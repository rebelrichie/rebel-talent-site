const SMALL = new Set(["a", "an", "the", "and", "or", "of", "for", "in", "on", "at", "to", "with", "vs"]);
const ACRONYM = /^(ts\/sci|ts|sci|sme|ai|ml|ai\/ml|gtm|bd|ae|hr|it|qa|ux|ui|vp|sre|vdi|av|tmt|fmv|us|usa|dc|va|md|nv)$/i;

// All-caps titles become title case. En dashes in a title become a comma.
export function publicJobTitle(title: string): string {
  const cleaned = title
    .replace(/\s*[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
  const letters = cleaned.replace(/[^A-Za-z]/g, "");
  if (!letters || letters !== letters.toUpperCase()) return cleaned;

  let wordIndex = 0;
  return cleaned
    .toLowerCase()
    .split(/(\s+)/)
    .map((part) => {
      if (/^\s+$/.test(part)) return part;
      const core = part.replace(/[^a-z0-9/]/gi, "");
      const index = wordIndex;
      wordIndex += 1;
      if (ACRONYM.test(core)) return part.replace(new RegExp(core, "i"), core.toUpperCase());
      if (index > 0 && SMALL.has(core)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}
