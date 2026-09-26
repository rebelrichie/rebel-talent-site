declare module "@shared/jobFeed.mjs" {
  export const PUBLIC_JOBS_API: string;
  export const SITE_ORIGIN: string;
  export const JOBS_FEED_PATH: string;

  export function jobPath(job: {
    id?: string | null;
    title?: string | null;
    companyName?: string | null;
    location?: string | null;
  }): string;

  export function buildJobsFeedXml(jobs: unknown[], generatedAt?: Date): string;

  export function fetchPublicJobs(fetchImpl?: typeof fetch): Promise<unknown[]>;

  export function buildJobsFeedXmlFromApi(
    fetchImpl?: typeof fetch,
    generatedAt?: Date,
  ): Promise<string>;
}
