const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = '/home/runner/workspace/dist/public';
const outFile = '/home/runner/workspace/rebel-talent-netlify.zip';

if (fs.existsSync(outFile)) fs.unlinkSync(outFile);

function getAllFiles(dir, baseDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(full, baseDir));
    } else {
      files.push(path.relative(baseDir, full));
    }
  }
  return files;
}

const files = getAllFiles(srcDir, srcDir);
console.log(`Packaging ${files.length} files...`);

const ZipStream = class {
  constructor() {
    this.chunks = [];
    this.centralDir = [];
    this.offset = 0;
  }

  uint16LE(n) {
    const b = Buffer.alloc(2);
    b.writeUInt16LE(n);
    return b;
  }

  uint32LE(n) {
    const b = Buffer.alloc(4);
    b.writeUInt32LE(n >>> 0);
    return b;
  }

  crc32(buf) {
    const table = this._crc32Table();
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  _crc32Table() {
    if (this._table) return this._table;
    this._table = [];
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      this._table[n] = c;
    }
    return this._table;
  }

  addFile(name, data) {
    const nameBuf = Buffer.from(name, 'utf8');
    const crc = this.crc32(data);
    const localHeader = Buffer.concat([
      Buffer.from([0x50,0x4b,0x03,0x04]),
      this.uint16LE(20),
      this.uint16LE(0),
      this.uint16LE(0),
      this.uint16LE(0),
      this.uint16LE(0),
      this.uint32LE(crc),
      this.uint32LE(data.length),
      this.uint32LE(data.length),
      this.uint16LE(nameBuf.length),
      this.uint16LE(0),
      nameBuf,
    ]);
    const localOffset = this.offset;
    this.chunks.push(localHeader, data);
    this.offset += localHeader.length + data.length;
    this.centralDir.push({ nameBuf, crc, size: data.length, offset: localOffset });
  }

  finalize() {
    const cdStart = this.offset;
    const cdEntries = this.centralDir.map(({ nameBuf, crc, size, offset }) =>
      Buffer.concat([
        Buffer.from([0x50,0x4b,0x01,0x02]),
        this.uint16LE(20),
        this.uint16LE(20),
        this.uint16LE(0),
        this.uint16LE(0),
        this.uint16LE(0),
        this.uint16LE(0),
        this.uint32LE(crc),
        this.uint32LE(size),
        this.uint32LE(size),
        this.uint16LE(nameBuf.length),
        this.uint16LE(0),
        this.uint16LE(0),
        this.uint16LE(0),
        this.uint16LE(0),
        this.uint32LE(0),
        this.uint32LE(offset),
        nameBuf,
      ])
    );
    const cdBuf = Buffer.concat(cdEntries);
    const cdSize = cdBuf.length;
    const eocd = Buffer.concat([
      Buffer.from([0x50,0x4b,0x05,0x06]),
      this.uint16LE(0),
      this.uint16LE(0),
      this.uint16LE(this.centralDir.length),
      this.uint16LE(this.centralDir.length),
      this.uint32LE(cdSize),
      this.uint32LE(cdStart),
      this.uint16LE(0),
    ]);
    return Buffer.concat([...this.chunks, cdBuf, eocd]);
  }
};

const zip = new ZipStream();

for (const relPath of files) {
  const fullPath = path.join(srcDir, relPath);
  const data = fs.readFileSync(fullPath);
  zip.addFile(relPath, data);
}

const zipBuf = zip.finalize();
fs.writeFileSync(outFile, zipBuf);

const size = (zipBuf.length / 1024 / 1024).toFixed(2);
console.log(`Created: rebel-talent-netlify.zip (${size} MB)`);
