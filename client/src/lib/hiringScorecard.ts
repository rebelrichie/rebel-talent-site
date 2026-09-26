// Shared scorecard copy so the free-tools page and the scorecard
// stay on the same question count, category count, and email gate.

export interface ScorecardQuestion {
  id: string;
  category: string;
  prompt: string;
}

// Keep in sync with rebelapply.com src/app/api/public/scorecard/route.ts QUESTIONS.
export const QUESTIONS: ScorecardQuestion[] = [
  { id: "roadmap", category: "Strategy", prompt: "Do you have a documented hiring roadmap for the next 6 months?" },
  { id: "scorecards", category: "Process", prompt: "Do all of your hiring managers use the same interview scorecard?" },
  { id: "cost-per-hire", category: "Metrics", prompt: "Do you know your current cost per hire across all sourcing channels?" },
  { id: "sourcing-playbooks", category: "Sourcing", prompt: "Do you have a sourcing playbook for each role type you regularly hire?" },
  { id: "candidate-response", category: "Candidate Experience", prompt: "Do candidates get a substantive response within 48 hours of applying?" },
  { id: "comp-framework", category: "Compensation", prompt: "Do you have a defensible compensation framework by level and function?" },
  { id: "pipeline-metrics", category: "Data", prompt: "Can your ATS tell you the conversion rate at each pipeline stage?" },
  { id: "interview-calibration", category: "Process", prompt: "Are interview questions calibrated against the actual job requirements?" },
  { id: "onboarding-plan", category: "Onboarding", prompt: "Do new hires get a documented 30/60/90-day plan in their first week?" },
  { id: "exit-feedback", category: "Retention", prompt: "Do you ask departing employees what would have kept them?" },
];

const COUNT_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"] as const;

function countWord(n: number): string {
  return COUNT_WORDS[n] ?? String(n);
}

export function scorecardCategories(): string[] {
  const seen: string[] = [];
  for (const q of QUESTIONS) {
    if (!seen.includes(q.category)) seen.push(q.category);
  }
  return seen;
}

export function scorecardCategorySentence(): string {
  const names = scorecardCategories().map((c) => c.toLowerCase());
  const last = names[names.length - 1] ?? "";
  const rest = names.slice(0, -1);
  const list = rest.length > 0 ? `${rest.join(", ")}, and ${last}` : last;
  const questions = countWord(QUESTIONS.length);
  const categories = countWord(names.length);
  const lead = questions.charAt(0).toUpperCase() + questions.slice(1);
  return `${lead} yes-or-no questions across ${categories} categories: ${list}.`;
}

// The score itself is not behind a form. The written fixes are.
export const SCORECARD_GATE =
  "You see the score before any form. The written fix for each gap asks for your name, work email, and company. No marketing sequence.";

export function localScore(yesCount: number, total = QUESTIONS.length): number {
  if (total <= 0) return 0;
  return Math.round((yesCount / total) * 100);
}
