export interface PublicJobFields {
  id: string;
  title?: string | null;
  companyName?: string | null;
  location?: string | null;
  remotePolicy?: string | null;
  compensationRange?: string | null;
  requirements?: string | null;
  idealProfile?: string | null;
  notes?: string | null;
  openedAt?: string | null;
  createdAt?: string | null;
}

export interface StructuredPlace {
  city: string;
  state: string;
  remote: boolean;
  countries: string[];
}

export interface PostingDates {
  datePosted: string;
  validThrough: string;
}

export function toPublicJob<T extends PublicJobFields>(job: T): T;

export function parseSalary(
  comp: string | null | undefined,
): Record<string, unknown> | null;

export function employmentTypeFor(job: {
  id?: string | null;
  title?: string | null;
  compensationRange?: string | null;
}): "CONTRACTOR" | "FULL_TIME";

export function postingDates(
  openedAt: string | null | undefined,
  createdAt: string | null | undefined,
  now?: Date,
): PostingDates;

export function structuredPlace(job: {
  id?: string | null;
  location?: string | null;
  remotePolicy?: string | null;
}): StructuredPlace;

export function buildJobJsonLd(
  job: PublicJobFields,
  url: string,
): Record<string, unknown>;

export function escapeHtml(value: string): string;

export function applyDocumentShell(html: string, title: string): string;
