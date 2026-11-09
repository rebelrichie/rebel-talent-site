import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const home = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");
const about = readFileSync(new URL("../client/src/pages/About.tsx", import.meta.url), "utf8");
const services = readFileSync(new URL("../client/src/pages/Services.tsx", import.meta.url), "utf8");
const cases = readFileSync(new URL("../client/src/pages/CaseStudies.tsx", import.meta.url), "utf8");
const footer = readFileSync(new URL("../client/src/components/Footer.tsx", import.meta.url), "utf8");
const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8");
const twinkle = readFileSync(new URL("../client/src/components/GlobeTwinkle.tsx", import.meta.url), "utf8");

test("homepage keeps the locked hero and proof copy", () => {
  assert.match(home, /Defense · Space · Series A to C/);
  assert.match(home, /Recruiting that scales/);
  assert.match(home, /with the company/);
  assert.match(home, /you’re becoming\./);
  assert.match(home, /For defense and commercial buyers\./);
  assert.match(home, /About \$406K in agency fees avoided on about \$115K billed, a 3\.5x return/);
  assert.match(home, /3 more roles in flight and 17 incoming in 2027/);
  assert.match(home, /average time to hire/);
  assert.match(home, />12</);
  assert.match(home, /34/);
  assert.match(home, /360\+/);
  assert.match(home, /\$20K under the agency quote/);
  assert.match(home, /20/);
  assert.match(home, /90% retained/);
  assert.match(home, /src="\/map\.jpg"/);
  assert.match(home, /A broad view of an operations floor, with people working before a wall of technical displays/);
  assert.doesNotMatch(home, /approach-media[\s\S]*earth-limb/);
  assert.doesNotMatch(home, /\$294K|\$394K|335%|3\.4x|11 placements|all nine/);
  assert.doesNotMatch(home, /Altman Solon|Pro Vision|Sifted/);
  assert.doesNotMatch(home, /[—–]/);
});

test("public proof pages use the approved EarthDaily figures", () => {
  for (const source of [about, services, cases]) {
    assert.match(source, /\$406K|~\$406,000/);
    assert.match(source, /3\.5x/);
    assert.match(source, /\$115K/);
    assert.doesNotMatch(source, /\$294K|\$394K|335%|3\.4x|5\.2x|\b9 placements|11 placements/);
  }
  assert.match(cases, /average time to hire/i);
  assert.match(cases, /an average, across the first nine placements/);
  assert.match(cases, /Sales Engineer[\s\S]*~\$48,000/);
  assert.match(cases, /Director of Business Development, IC[\s\S]*~\$48,000/);
  assert.match(cases, /Contract 4/);
  assert.match(cases, /17 incoming in 2027/);
});

test("footer keeps the registration marks and live routes stay mounted", () => {
  assert.match(footer, /CAGE 202V6/);
  assert.match(footer, /UEI JQ4MZ69FNAK4/);
  assert.match(footer, /SAM\.gov/);
  for (const route of ['path="/"', 'path="/jobs"', 'path="/jobs/:id"', 'path="/jobs/:id/apply"', 'path="/strategy-call"', 'path="/blog"', 'path="/blog/:slug"']) {
    assert.ok(app.includes(route), route);
  }
});

test("the band sheet sentence is not rendered", () => {
  const files = ["Contingent.tsx", "ContingentTech.tsx", "Services.tsx"].map((name) =>
    readFileSync(new URL(`../client/src/pages/${name}`, import.meta.url), "utf8"),
  );
  const css = readFileSync(new URL("../client/src/v4.css", import.meta.url), "utf8");
  for (const source of files) {
    assert.doesNotMatch(source, /band sheet/i);
    assert.doesNotMatch(source, /walked on the call/);
    assert.doesNotMatch(source, /[—–]/);
  }
  assert.match(files[0], /Start a search/);
  assert.match(files[0], /flat fee by salary band/);
  assert.match(files[0], /that is embedded/);
  assert.match(css, /globe-drift/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /animation: none/);
});

test("city twinkle respects reduced motion and does not scatter random lights", () => {
  assert.match(twinkle, /prefers-reduced-motion/);
  assert.match(twinkle, /IntersectionObserver/);
  assert.match(twinkle, /devicePixelRatio/);
  assert.match(twinkle, /r < b \+ 30/);
  assert.match(twinkle, /createRadialGradient/);
  assert.doesNotMatch(twinkle, /Math\.random\(\) \* 0\.55/);
});
