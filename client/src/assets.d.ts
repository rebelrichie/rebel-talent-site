// Safe addition — TypeScript can't see two things Vite handles fine at build
// time: the @assets alias (declared only in vite.config.ts) and image files
// with an UPPERCASE .PNG extension (vite/client's built-in types only cover
// lowercase .png). The @assets path added to tsconfig.json fixes the alias;
// this declaration fixes the extension. Without both, `tsc --noEmit` errors
// on the Head_And_Heart_*.PNG imports in About.tsx and FreeTools.tsx.
declare module "*.PNG" {
  const src: string;
  export default src;
}
