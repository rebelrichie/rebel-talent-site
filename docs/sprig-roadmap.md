# Sprig Roadmap

Internal planning doc for the Sprig green-AI initiative (live at rebeltalentsystems.com/greener-planet).
Grounded in the June 2026 deep-research pass. Not deployed (lives in docs/, outside the served public/ dir).

## North star

Sprig is a small, honest contribution, not an offset. Rebel runs an AI-heavy recruiting
operation; Sprig points some of that same capability at greener everyday choices and says
so plainly. We never claim it cancels out, pays back, or neutralizes the datacenter footprint.

## The single biggest lesson from the research

Information and awareness do not change behavior (the attitude-behavior gap). Most green
behavior-change tools show small or no effect, and the effect fades within weeks to a year.
The one robust, replicable lever is choice architecture: defaulting people into the greener
option at the moment of decision (a menu-reordering RCT cut meal carbon ~12%, while labels
and taxes did nothing).

Implication: every Sprig feature should end in one concrete, low-friction action, not a
paragraph of facts. If a feature only informs, it probably will not move anything.

## Roadmap

### Now (credibility, shipped or next)
1. Reframe any offset language to a modest contribution. (Done: mission pull-quote rewritten.)
   Keep the honest disclaimer "It will not cancel out a datacenter, and we won't claim it does."
2. Keep the page noindex and clearly preview-grade until features are real.

### Quick wins (free, open, API-ready)
3. Real "Ask Sprig" chat on Claude, scoped to return ONE concrete next step, not an essay.
   Persona from the design handoff; server-side key; basic rate limiting.
   STATUS: front-end live (calls /api/sprig, falls back to canned answers until key set).
   Backend DEPLOYED: Cloudflare Worker "sprig-api" (model claude-haiku-4-5), routed at
   rebeltalentsystems.com/api/sprig*, KV rate-limiter bound (20 req / 10 min per IP).
   Config: docs/wrangler.toml; source: docs/sprig-api-worker.js.
   LIVE as of 2026-06-27: secret set via Cloudflare dashboard (CLI paste kept
   concatenating the key onto --name; dashboard form was the fix). Endpoint returns
   real one-step answers (verified). Page shows "Live AI" on first message.
   Optional hardening: add a Cloudflare WAF rate-limit rule on /api/sprig and a
   billing/spend alert (token scope here lacked WAF). Rotate the key if it was ever
   pasted in plaintext.
4. Food-waste / recipe lookups via Open Food Facts JSON API
   (free/open; licenses ODbL / DbCL / CC-BY-SA). Powers Cut Food Waste + Natural Solutions.
5. Footprint transparency widget: measure and publish Sprig's own AI footprint with EcoLogits
   (CodeCarbon hands off remote-LLM tracking to it; covers Anthropic). Turns the awkward
   question into a feature.

### Bigger builds
6. Recycling helper ("photo your item, can you recycle it") on TrashNet
   (2,527 images, 6 categories, MIT). MUST pair with local recycling rules or it will be
   confidently wrong, since rules are local.
7. Plant ID for Monitor & Protect Nature on PlantNet-300K (306k images, 1,081 species, NeurIPS 2021).

### Strategic question to resolve before investing heavily
The strongest lever (defaulting people into greener choices) works at the point of decision:
the menu, the store, the thermostat. Sprig is a standalone content site, not where people
actually buy or cook, so it is structurally disadvantaged for the thing that works best.
Decide: does Sprig stay a credible brand statement, or become a tool that inserts itself
into a real moment of choice (browser extension, integration, etc.)?

## Honest framing rules (for any future copy)
- Never use: offset, pays back, carbon neutral, net positive, cancels out.
- Okay: small contribution, points some of that capability at, honest, modest.
- If we cite AI energy numbers, date them and note they are per-prompt and onsite/median,
  not lifecycle. Aggregate datacenter demand is the real concern, not a single query.

## Key numbers (cite with dates; verify before reuse)
- Median Gemini text prompt: ~0.24 Wh, ~0.26 mL water (Google self-report, 2025; critics say
  it understates lifecycle water/energy).
- Short GPT-4o query: ~0.42 Wh, ~40% more than a 0.30 Wh Google search (arXiv 2505.09598, 2025;
  the 0.30 Wh search baseline is a dated 2009 figure).
- Datacenters: ~1.5% of global electricity (~415 TWh) in 2024, projected to ~945 TWh by 2030,
  AI the leading driver (IEA Energy & AI, 2025; projection is scenario-based).

## Sources
- IEA Energy & AI (2025): https://www.iea.org/reports/energy-and-ai/executive-summary
- Google AI environmental impact (2025): https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf
- How Hungry is AI? (arXiv 2505.09598): https://arxiv.org/html/2505.09598v5
- Behavior-change review (Frontiers, 2022): https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.901927/full
- Digital interventions meta-analysis (ECIS 2024): https://aisel.aisnet.org/ecis2024/track17_greenis/track17_greenis/34/
- Choice-architecture RCT (PMC, 2024): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11450623/
- Carbon-calculator decay study (Env. & Resource Economics, 2023): https://link.springer.com/article/10.1007/s10640-023-00800-7
- FTC Green Guides: https://www.ftc.gov/news-events/topics/truth-advertising/green-guides
- Open Food Facts data/API: https://world.openfoodfacts.org/data
- TrashNet: https://github.com/garythung/trashnet
- PlantNet-300K: https://github.com/plantnet/PlantNet-300K
- CodeCarbon / EcoLogits: https://github.com/mlco2/codecarbon

## Do-not-repeat (claims killed in verification)
- Open Food Facts data is NOT AGPL-3.0 (it is ODbL / DbCL / CC-BY-SA).
- The "1.7M products / 150 countries" Open Food Facts figure did not verify; do not cite it.
