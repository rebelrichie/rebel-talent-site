// Public pay line. Show a real range when the role has one.
// Hide the line when the field is empty or only says DOE.

const DOE = /^(?:doe|pay:\s*doe\.?|pay is doe\.?|competitive|depends on experience|dependent on experience)\.?$/i;
const MONEY = /(?:\$\s*\d|\b\d{2,3}\s*k\b|\b\d{2,3}(?:,\d{3})+\b)/i;

export function publicPayLine(comp?: string | null): string | null {
  if (!comp) return null;
  const text = comp.replace(/\s+/g, " ").trim();
  if (!text || DOE.test(text)) return null;
  if (!MONEY.test(text)) return null;
  return text;
}
