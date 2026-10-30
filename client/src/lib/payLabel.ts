// Public pay line. One format: a full-number range, or "Up to" a single ceiling.
// Hide the line when the field is empty or only says DOE.

const DOE = /^(?:doe|pay:\s*doe\.?|pay is doe\.?|competitive|depends on experience|dependent on experience)\.?$/i;
const MONEY = /(?:\$\s*\d|\b\d{2,3}\s*k\b|\b\d{2,3}(?:,\d{3})+\b|\bup to\b)/i;

function dollars(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

function amounts(text: string): number[] {
  const hourly = /\/\s*hr\b|\bper hour\b|\bhourly\b/i.test(text);
  const hasThousands = /\d\s*k\b/i.test(text);
  const found: number[] = [];
  const re = /\$?\s*(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(\s*[kK])?/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    let value = parseFloat(match[1].replace(/,/g, ""));
    if (!Number.isFinite(value)) continue;
    if (match[2]) value *= 1000;
    else if (!hourly && hasThousands && value < 1000) value *= 1000;
    if (hourly) {
      if (value > 0 && value < 1000) found.push(value);
      continue;
    }
    if (value >= 10000) found.push(value);
  }
  return found;
}

export function publicPayLine(comp?: string | null): string | null {
  if (!comp) return null;
  const text = comp.replace(/\s+/g, " ").trim();
  if (!text || DOE.test(text)) return null;
  if (!MONEY.test(text) && !/\d/.test(text)) return null;

  const hourly = /\/\s*hr\b|\bper hour\b|\bhourly\b/i.test(text);
  const values = amounts(hourly ? text.split(",")[0] : text);
  if (values.length === 0) return null;

  if (hourly) {
    const low = Math.min(...values);
    const high = Math.max(...values);
    if (low === high) return `Up to ${dollars(high)} per hour`;
    return `${dollars(low)} to ${dollars(high)} per hour`;
  }

  const low = Math.min(...values);
  const high = Math.max(...values);
  if (low !== high) return `${dollars(low)} to ${dollars(high)}`;
  if (/\bup to\b/i.test(text) || values.length === 1) {
    return /\bup to\b/i.test(text) ? `Up to ${dollars(high)}` : dollars(high);
  }
  return `Up to ${dollars(high)}`;
}
