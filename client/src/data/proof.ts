// Drop real logos and quotes in here later. Empty lists render nothing.

export type ProofLogo = {
  name: string;
  src: string;
  href?: string;
};

export type ProofQuote = {
  quote: string;
  name: string;
  role: string;
};

export const proofLogos: ProofLogo[] = [];

export const proofQuotes: ProofQuote[] = [];
