// Unique job meta descriptions for /jobs/:slug.
// Built from the public job fields. Never the shared
// "Apply through Rebel Talent." closer.

export interface JobMetaInput {
  title?: string | null;
  companyName?: string | null;
  location?: string | null;
  remotePolicy?: string | null;
  level?: string | null;
  department?: string | null;
  companyIndustry?: string | null;
  compensationRange?: string | null;
  requirements?: string | null;
  idealProfile?: string | null;
  notes?: string | null;
  tags?: string[] | null;
}

const CLEARANCE_RES: Array<[RegExp, string]> = [
  [/TS\s*\/+\s*SCI/i, "TS/SCI"],
  [/\bTop Secret\b/i, "Top Secret"],
  [/\bSecret\b/i, "Secret"],
];

const POLY_RX = /polygraph|\bpoly\b/i;

const STACKS: Array<[string, RegExp]> = [
  ["TypeScript", /\bTypeScript\b/i],
  ["JavaScript", /\bJavaScript\b/i],
  ["Python", /\bPython\b/i],
  ["Java", /\bJava\b(?!Script)/i],
  ["Linux", /\bLinux\b/i],
  ["AWS", /\bAWS\b/],
  ["Kubernetes", /\bKubernetes\b|\bK8s\b/i],
  ["React", /\bReact\b/],
  ["SQL", /\bSQL\b/],
  ["C++", /C\+\+/],
  ["geospatial", /\bgeospatial\b/i],
  ["machine learning", /machine learning|\bAI\/ML\b|agentic AI/i],
  ["Windows", /\bWindows\b/],
  ["PowerShell", /\bPowerShell\b/i],
  ["VDI", /\bVDI\b|Virtual Desktop/i],
  ["Active Directory", /Active Directory/i],
];

function squash(value: string | null | undefined): string {
  return (value || "").replace(/\s+/g, " ").trim();
}

function shortLocation(location: string): string {
  let loc = squash(location);
  loc = loc.replace(/\s*\([^)]*\)/g, "").trim();
  loc = loc.replace(/\s+[—–-]\s+.*$/, "").trim();
  return loc;
}

function clearanceOf(blob: string): string | null {
  let label: string | null = null;
  for (const [rx, name] of CLEARANCE_RES) {
    if (rx.test(blob)) {
      label = name;
      break;
    }
  }
  if ((label === "TS/SCI" || label === "Top Secret") && POLY_RX.test(blob)) {
    return `${label} with polygraph`;
  }
  if (label === "Secret") return "Secret clearance";
  if (label) return label;
  if (/\bclearance\b/i.test(blob)) return "security clearance";
  return null;
}

function stacksOf(blob: string, limit = 4): string[] {
  const found: string[] = [];
  for (const [label, rx] of STACKS) {
    if (rx.test(blob)) found.push(label);
    if (found.length === limit) break;
  }
  return found;
}

function addBit(text: string, bit: string | null): string {
  if (!bit) return text;
  const candidate = `${text} ${bit}`;
  return candidate.length <= 160 ? candidate : text;
}

function choosePad(text: string, phrases: string[]): string {
  if (text.length >= 140) return text;
  const needMin = 140 - text.length - 1;
  const needMax = 160 - text.length - 1;
  if (needMax < 2) return text;

  const fits = phrases
    .map((phrase) => (phrase.endsWith(".") ? phrase : `${phrase}.`))
    .filter((phrase) => phrase.length >= needMin && phrase.length <= needMax && !text.includes(phrase));
  if (!fits.length) return text;
  fits.sort((a, b) => b.length - a.length);
  return `${text} ${fits[0]}`;
}

export function buildJobMetaDescription(job: JobMetaInput): string {
  const title = squash(job.title) || "Open role";
  const company = squash(job.companyName);
  const loc = shortLocation(job.location || "");
  const remote = squash(job.remotePolicy);
  const level = squash(job.level);
  const dept = squash(job.department);
  const industry = squash(job.companyIndustry);
  const comp = squash(job.compensationRange);
  const req = job.requirements || "";
  const ideal = job.idealProfile || "";
  const notes = job.notes || "";
  const tagText = (job.tags || []).filter(Boolean).join(" ");
  const blob = [title, req, ideal, notes, tagText, level, dept, industry].join(" ");

  const clearance = clearanceOf(blob);
  const found = stacksOf(`${title} ${tagText} ${req.slice(0, 1600)}`, 4);
  const head = company ? `${title} at ${company}.` : `${title}.`;

  let text = head;
  text = addBit(text, loc ? `Location: ${loc}.` : null);
  if (clearance === "security clearance") {
    text = addBit(text, "Security clearance required.");
  } else if (clearance) {
    text = addBit(text, `Clearance: ${clearance}.`);
  }
  if (found.length) {
    text = addBit(text, `Stack: ${found.slice(0, 2).join(", ")}.`);
  }
  if (level && !title.toLowerCase().includes(level.toLowerCase())) {
    text = addBit(text, `Level: ${level}.`);
  }
  if (remote && !loc.toLowerCase().includes(remote.toLowerCase()) && !remote.toLowerCase().includes(loc.toLowerCase())) {
    text = addBit(text, `Work mode: ${remote}.`);
  }
  if (industry && !text.toLowerCase().includes(industry.toLowerCase())) {
    text = addBit(text, `Industry: ${industry}.`);
  }
  if (comp) text = addBit(text, `Pay: ${comp}.`);
  if (dept && !title.toLowerCase().includes(dept.toLowerCase())) {
    text = addBit(text, `Team: ${dept}.`);
  }

  if (text.length < 140 && found.length > 2 && text.includes("Stack:")) {
    const oldStack = `Stack: ${found.slice(0, 2).join(", ")}.`;
    const newStack = `Stack: ${found.slice(0, 4).join(", ")}.`;
    const upgraded = text.replace(oldStack, newStack);
    if (upgraded.length <= 160) text = upgraded;
  }

  const low = blob.toLowerCase();
  const extras: string[] = [];
  if (/u\.?s\.?\s+citizen/i.test(low)) extras.push("US citizenship required.");
  if (/core hours|\bM-F\b/i.test(req)) extras.push("Weekday core hours.");
  if (/\bGovCon\b|\bFAR\b|\bDCAA\b/.test(blob)) extras.push("GovCon experience.");
  if (/\bjourneyman\b/i.test(low) && !/\bjourneyman\b/i.test(title)) extras.push("Journeyman labor category.");
  if (/full[- ]cycle/i.test(low)) extras.push("Full-cycle sales seat.");
  if (/forward[- ]deployed/i.test(low)) extras.push("Forward-deployed with the mission.");

  for (const extra of extras) {
    if (text.length >= 140) break;
    text = addBit(text, extra);
  }

  const publicName = /confidential/i.test(company)
    ? "a confidential client"
    : (company || "the hiring team");
  const city = loc.split(",")[0]?.trim();
  const industryBit = industry.split(/[/|]/).pop()?.trim();
  const phrases = [
    city ? `${city} search` : "",
    industryBit ? `${industryBit} hiring` : "",
    found[0] ? `${found[0]} work on this search` : "",
    `Search for ${publicName}`,
    `Open search with ${publicName}`,
    `Posted by Rebel Talent Systems for ${publicName}`,
    `Rebel Talent Systems is running this search for ${publicName}`,
  ].filter(Boolean);

  text = choosePad(text, phrases);

  if (/apply through rebel talent/i.test(text)) {
    text = text.replace(/apply through rebel talent\.?/ig, "").replace(/\s+/g, " ").trim();
  }

  return text;
}
