import { launch } from "puppeteer";
import { mkdirSync } from "node:fs";

const OUT = "/opt/cursor/artifacts";
mkdirSync(OUT, { recursive: true });
const browser = await launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const problems = [];
function check(ok, message) {
  if (!ok) problems.push(message);
  else console.log("ok", message);
}

async function shot(page, name) {
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
}

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle0", timeout: 30000 });
await page.waitForSelector("h1");
await new Promise((r) => setTimeout(r, 600));
const homeText = await page.evaluate(() => document.body.innerText);
check(homeText.includes("Recruiting that scales"), "hero headline");
check(homeText.includes("For defense and commercial buyers."), "subline");
check(homeText.includes("Defense · Space · Series A to C"), "kicker");
check(homeText.includes("About $294K"), "edf fees");
check(homeText.includes("335%"), "edf roi");
check(homeText.includes("average time to hire"), "average time");
check(!/Altman Solon|Pro Vision|Sifted|\$394K/.test(homeText), "no confidential or old edf totals");
check(homeText.includes("CAGE 202V6") && homeText.includes("JQ4MZ69FNAK4"), "footer ids");
const lights = await page.$eval("canvas.twinkle", (c) => Number(c.dataset.lights || 0));
check(lights > 8, `city lights sampled (${lights})`);
const logoCount = await page.$$eval("header img", (imgs) => imgs.length);
check(logoCount === 1, "logo only in nav");
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
check(overflow <= 1, `desktop overflow ${overflow}`);
await shot(page, "home-desktop");
await page.evaluate(() => window.scrollTo(0, 1100));
await new Promise((r) => setTimeout(r, 200));
await shot(page, "home-approach");
await page.evaluate(() => window.scrollTo(0, 2200));
await new Promise((r) => setTimeout(r, 200));
await shot(page, "home-proof");

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 400));
const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
check(mobileOverflow <= 1, `mobile overflow ${mobileOverflow}`);
await shot(page, "home-mobile");
await page.click("[data-testid='button-mobile-menu']");
await page.waitForSelector("header.open nav");
const expanded = await page.$eval("[data-testid='button-mobile-menu']", (b) => b.getAttribute("aria-expanded"));
check(expanded === "true", "mobile menu opens");
await shot(page, "home-mobile-menu");
await page.keyboard.press("Escape");
const closed = await page.$eval("[data-testid='button-mobile-menu']", (b) => b.getAttribute("aria-expanded"));
check(closed === "false", "escape closes menu");

const reduced = await browser.newPage();
await reduced.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await reduced.setViewport({ width: 1440, height: 900 });
await reduced.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 500));
const motion = await reduced.$eval("canvas.twinkle", (c) => c.dataset.motion);
const reducedLights = await reduced.$eval("canvas.twinkle", (c) => Number(c.dataset.lights || 0));
check(motion === "static", `reduced motion is static (${motion})`);
check(reducedLights > 8, `reduced motion still shows city lights (${reducedLights})`);
await reduced.close();

async function visit(path, file, width = 1440) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  const res = await page.goto(`http://127.0.0.1:5173${path}`, { waitUntil: "networkidle0", timeout: 30000 });
  check(res && res.status() < 400, `${path} status ${res && res.status()}`);
  await new Promise((r) => setTimeout(r, 350));
  const broken = await page.evaluate(() =>
    [...document.images].filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src),
  );
  check(broken.length === 0, `${path} images ${broken.join(",") || "ok"}`);
  await shot(page, file);
}

await visit("/about", "about-desktop");
await visit("/case-studies", "work-desktop");
await visit("/jobs", "jobs-desktop");
const jobSearch = await page.$("input");
check(Boolean(jobSearch), "jobs search input");
const jobLinks = await page.$$eval("a[href*='/jobs/']", (links) => links.length);
check(jobLinks > 0, `job links ${jobLinks}`);
await visit("/strategy-call", "connect-desktop");
const fields = await page.$$eval("input, textarea, select", (els) => els.length);
check(fields > 3, `strategy fields ${fields}`);
await visit("/blog", "blog-desktop");
await visit("/cleared", "cleared-desktop");
await visit("/services", "services-desktop");
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await visit("/jobs", "jobs-mobile", 390);
await visit("/about", "about-mobile", 390);

await browser.close();
if (problems.length) {
  console.error("PROBLEMS");
  for (const problem of problems) console.error(" -", problem);
  process.exit(1);
}
console.log("all checks passed");
