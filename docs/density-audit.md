# Density audit

Walked every public page on the Rebel Talent Systems site: the routes in `client/src/App.tsx`, the copy in `client/src/pages`, the shared chrome, and the ten published posts in `client/src/data/blog-posts.json`. This is a cut list for the founder. It does not change the site.

Bullets on each page are ranked, highest impact first. Each one is a cut, a merge, or a shorten.

Flags, used only when they apply:

- **Slogan.** A line that sounds like a tagline.
- **Repetition.** A point this page, or another page, already made.
- **Em dash.** A search of visitor-facing copy in the pages, shared chrome, and the ten published posts found none. The em dashes in the repo are in code comments. Visitors do not see those. The dense feeling comes from stacked slogans and repeated blocks. Do not add dashes while tightening the copy. End the sentence.

Fee figures are left out of this document on purpose. Where a block is mostly numbers, the note says to cut or shorten the block and does not repeat the figures.

## Scope

Public pages only.

`/results` is the same page as `/case-studies`. One entry covers both.

These paths are redirects, not pages: `/how-it-works`, `/platform`, `/command`, `/pricing`, `/rachael`, `/defense`, `/fractional-head-of-talent`, `/fractional-recruiting-services`, `/abcr-certification`, `/shop`, and the old `.html` paths. `Platform.tsx` is not routed.

`/greener-planet` is a hidden, noindex static page and is not in the nav. Left out.

## Sitewide

These show up on many pages. Fixing them once does more than trimming a single hero.

- Cut the footer bar, "Ready to build your team the right way?" plus another strategy-call link. **Slogan.** **Repetition.** Almost every page already ends on that button.
- Shorten the footer bio to the name and the city. "We install the hiring infrastructure your team runs on" restates the homepage thesis on every page. **Repetition.**
- Keep the three client stories on Case Studies only. Home, Services, and About each retell them. **Repetition.**
- Cut "no fluff," "actually," and "real" wherever they prop up a sentence. Testimonials, the podcast, free tools, and About all use them. The fact beside the word is the line.
- The buyer pages share one template: hero, three cards, a fit list, a compare grid, an FAQ, and a closer. Cut the compare grid and the closer on each of them. The hero and one detail section can carry the page.

## Home (`/`)

- Cut the veterans block down to the free resume review and the cleared link. **Slogan:** "For the ones who stood up when it mattered." The paragraph names the same three audiences twice, and "No corporate fluff, just real talent leadership" is a tagline.
- Cut "Who this is for." The hero already says Series A through C and defense. "Growth companies" is the same audience as the first card. **Repetition.**
- Shorten the two path cards to a title and a link. The hero paragraph already defines contingent versus embedded, and the line under the cards points at Services and Cleared again. **Slogan:** "Fill one seat." and "Keep the system."
- Merge the Chris block with the contingent card. It explains the fee model a second time and adds a second way to book, next to "Book a strategy call."
- Cut the closing "Bring the open role" section. **Slogan.** The hero buttons and the footer already ask for the call.
- Shorten the hero headline, or let the paragraph under it do the work. **Slogan:** "Recruiting that scales with the company you're becoming."

## How we engage (`/services`)

- Cut the proof section. It is the homepage proof, rewritten as one paragraph. **Repetition.**
- Cut "Bring the role, or the question." **Slogan.** Same thirty-minute promise as Home.
- Shorten the four cards to a name, one sentence, and the detail link. The hero already lists contingent, retained, embedded, and advisory.
- Cut the line under the cards. It repeats "Series A through C, and defense" and points at Cleared, which is already in the nav. **Repetition.**
- **Slogan:** "Four ways to take the work." "One role, one fee." "The desk, then the handoff." "The plan, before the search."

## Contingent (`/contingent`)

- Cut the three "How the fee works" cards. They restate the paragraph above them, which restates the hero. **Repetition.**
- Cut either the compare grid or the FAQ answers about retained and embedded. Both exist, and both point at pages that explain themselves.
- Shorten the FAQ to the questions the hero does not answer: when the invoice is due, how the band lock works, and what the replacement guarantee covers.
- Cut the closing "Start a search" block. The hero already has the button and the email link. **Repetition.**
- **Slogan:** "The questions that decide the search." The fee sentence is repeated in the hero, the fee section, the fit list, the compare card, the FAQ, and the closer.

## Fractional (`/fractional`)

- Cut "This is for you if." The intro line and the first bullet say the same thing. **Repetition.**
- Cut the compare row. Contingent, Fractional, and Cleared each carry a version of it.
- Shorten the FAQ answer that tours other offers and other pages. One sentence and a link is enough.
- Cut the closer. The hero, the three steps, and the closer all say "we run it, then you keep it." Keep the three steps.
- **Slogan:** "We run recruiting for a while. Then you run it." The strategy-call page repeats it for this engagement.

## Advisory (`/advisory`)

- Cut the symptom list from eleven display-size lines to four. They are one situation, an untested plan, said many ways.
- Shorten the four offer cards to a name and three bullets. The page also has a stats band, an AI essay, a "what this is not" box, two audience cards, a bio, current clients, a newsletter, and a closer.
- Cut "Who you are working with" and the newsletter block. The bio repeats the About stats, and the newsletter is in the footer. **Repetition.**
- Merge "Two kinds of teams" into the hero. Series A through C and defense are already the site's default audience.
- **Slogan:** "None of those get fixed by looking at more resumes." "I am not a consultant who read about this." "Most Popular." "Tell me the role you cannot close." "Priced up front" appears in the hero, the offer intro, and the services card.

## Startups (`/startups`)

- Cut the five large pain lines, or cut the bullets inside the three offer cards. Both explain that startup hiring is hard, then restate contingent, retained, and contract.
- Merge this menu with Services, or let this page own the startup version and shorten Services. Right now both pages sell the same three paths.
- Shorten "How it works." Step one and the closer use the same sentence about hearing the truth on the call. **Repetition.**
- **Slogan:** "The hires your next round depends on." The "Sound familiar" kicker matches Advisory.

## Cleared (`/cleared`)

- Shorten the hero to one sentence plus the two buttons. It defines contingent and fractional again.
- Cut "Pick the paper." It is the services menu again, and the FAQ "Contingent, retained, or fractional?" says it a second time. **Repetition.**
- Merge the four role lines into the hero. **Slogan:** "Where the desk goes deep" introduces a four-item list.
- Cut the two blog links, or cut the role list. The links open essays that repeat this page.
- Cut the closer. It repeats the hero buttons.
- **Slogan:** "A cleared req is not a normal req." "Startup speed, prime reality."

## Case studies (`/case-studies`, also `/results`)

- Cut EarthDaily's "What this engagement actually delivered" list and "The Math" block. The opening stats, the situation list, the built list, and the role table already made the point. The math block repeats the opening stats in prose. **Repetition.**
- Cut Kalibri's second essay, "What the inbound pile actually contained," or cut the three pipeline tables. The intro, the tables, and the essay walk the same funnel.
- Shorten "How the search ran." "One meeting, then execution" is already in The Situation.
- Cut the slogan under the EarthDaily math: "Every future hire EDF makes runs on infrastructure I built. That compounds." Leave the Legal Managed Services card as the one short note it already is.
- **Slogan:** "What the work actually produced." "This isn't a data point. This is the market." "See If We Fit."
- The same three stories open Home, Services, and About. This is the page that should keep the detail. **Repetition.**

## Advisors (`/advisors`)

- Shorten the three paragraphs above the form. The hero already said judgment, network, and depth. **Repetition.**
- Cut "Ask the firm." It is the strategy-call closer on a page about advisors.
- Cut the empty "More advisors joining" card until there is a second person. The form already collects interest.
- Shorten Arin's card. Put the credentials on the title line and keep the ScaleByrd sentence.
- **Slogan:** "Judgment beside the search." "Advise Rebel." "Ask the firm."

## About (`/about`)

- Cut "What 14 years actually built." It is the case studies, again, including the note that one engagement predates the firm. **Repetition.**
- Cut the three quotes. Arin's line and a shorter Keisha line are also on Testimonials.
- Shorten each team blurb to one plain sentence, or leave the title and the links. **Slogan:** "the commercial lead startups actually want on the first call," "keeps the house from catching fire," "usually three steps ahead of the calendar," "without going soft on either."
- Merge "Built by me" down to the covers and the links. The Rebel Command paragraph repeats the timeline paragraph about outcomes, reporting, and a bench. The Unfinished Rooms blurb is a second essay.
- Cut the agents section here, or cut the AI explanation on Advisory. Five named agents read as a second team, and the intro says they do the front-line work.
- **Slogan:** "Five cities. One thesis." "I left to build the thing I wanted when I was on the other side of the desk." The pull quote about being dedicated or unhinged. "The seats I've actually filled, not the keywords on my LinkedIn." "Technical enough to build. Commercial enough to close. Rare." "Stories for the recruiters... who refuse to play the game safe." "Smart companies close those rooms. Great ones never open them."

## Vision (`/about/vision`)

- Shorten section one. "We fill the open roles and leave the system" is the homepage thesis again. **Repetition.**
- Shorten "What we will not do" to the four heads. The paragraph under them restates the four rules.
- Cut "How big." It is one slogan sentence between two stronger sections.
- Cut either "write me" or the two cards under it. They are the same invitation.
- **Slogan:** "Build something that compounds." "Build right. Hire right. Give a shit." "Not a body shop." "Growth is a byproduct of doing the work well."
- No em dashes in the visible copy. The section labels in the source file use them. Visitors do not see those.

## Testimonials (`/testimonials`)

- Cut the card grid. The carousel already shows the same four quotes, and the cards clamp them to four lines. **Repetition.**
- Shorten Keisha's quote to the one story: the candidate was still there a year later, in a bigger role. A shorter version is already on About.
- Move Natalie and Martyn to Free Tools, or cut them here. They are coaching stories on a client-proof page.
- Cut "Operator-Led. Results-Driven." and the line about dozens more on LinkedIn. **Slogan.** One LinkedIn link is enough.
- **Slogan:** "What clients actually say." "Real results from real people. No fluff, no embellishment, just honest feedback."

## Jobs (`/jobs`)

- Shorten the hero to "Open roles we are working." **Slogan:** the list "Cleared, AI/ML, forward deployed, GTM, and executive. One profile. One apply."
- Cut the sentence above "What to expect." It is card one and card three, written again. **Repetition.**
- Merge the general-application card and the empty-state line. Both say "Don't see your role?" and both list the same kinds of searches.
- Shorten the four expectation cards to two: a person reads it, and you hear yes or no in two business days.
- **Slogan:** "You are not sorted by a blast and forgotten."

## Job detail (`/jobs/:id`)

- Cut the second apply button. "Ready to apply?" adds a heading and a duplicate of the button at the top.
- Shorten the empty-description fallback to one sentence. Two paragraphs explain that the writeup is missing.
- Cut "Quick application. Free for candidates. We reply within two business days." The jobs page already says this. **Repetition.**
- When a role fills both Requirements and Ideal Candidate with the same list, keep one section.
- The page chrome is otherwise lean. Role body length depends on the listing, not this template.

## Apply (`/jobs/:id/apply`)

- Shorten the default form to name, email, phone, LinkedIn or resume, and start date. Clearance, target comp, and "Why this role?" fight the "quick application" promise. The screener, when a role has one, is the right place for extra questions.
- Shorten the not-a-fit state to the keep-on-file box. Two paragraphs say "not a match" before it.
- **Slogan:** "You're on our radar." "Skip the wait." "This isn't the end of the road."
- **Repetition:** "within two business days" is also on the jobs page and the job detail.

## General application (`/jobs/general`)

- Cut working style, years of experience, and availability. The page asks for a sentence or two, then offers a full profile form.
- Shorten the hero to one sentence. It repeats the jobs-page card: cleared, technical, sales, exec, and a promise to reach out. **Repetition.**
- **Slogan:** "For roles that haven't opened yet." "You're in."
- The success note sends people back to open roles. The link is enough.

## Strategy call (`/strategy-call`)

- Shorten every variant to the headline plus one sentence. "Name, email, and company get you through" is in the deck and in the field labels. **Repetition.**
- Show three fields and one note. Timeline, stage, website, and engagement type are a second form after the page says three fields are enough.
- Use one headline. The query string can route the lead. Six different essays on one URL is the density.
- Say "No list-building. FOCI-sensitive work is supported" once, under the form. It currently repeats on every variant.
- Cut the scorecard sentence down to the link. It restates the scorecard page. **Repetition.**

## Blog index (`/blog`)

- Shorten the hero to the name. **Slogan:** "building teams that win." The deck also repeats "contingent, retained, and embedded."
- Cut "Need Recruiting Help?" It is a third description of the firm, plus the same button as the footer. **Repetition.**
- Leave the featured post and the grid. That layout is the page.
- Shorten excerpts that restate the title. Several titles already say the whole post.

## Post: Contingent flat fee vs percentage of salary

`/blog/contingent-flat-fee-vs-percentage-of-salary`

- Merge this into the contingent FAQ, or cut the fee section on the contingent page and let this be the one explanation. Both teach the band lock. **Repetition.**
- Cut "The short version." It restates the opening.
- Shorten "Why a percentage of salary exists" to the opening conflict. The first two sentences already say it.
- **Slogan:** "That is the product. It is also the conflict."
- The closer points back at the contingent page, which points back at this post.

## Post: When contingent beats retained and embedded

`/blog/when-contingent-beats-retained-and-embedded`

- Merge "A simple test" into Services, and cut the three model sections here. Or cut the compare grids on the service pages and keep this as the one explainer. Running both is the density. **Repetition.**
- **Slogan:** "Three ways to buy a search. One of them is a search."
- Cut the closer. "The full menu lives on Services" is a second services page.
- The opening says Rebel sells four offerings, then discusses three. Shorten the opening to the three.

## Post: When should a startup hire a fractional recruiting consultant?

`/blog/when-to-hire-fractional-recruiting-consultant`

- Cut the seven signals to four. Open roles, slow fill, managers doing it themselves, and losing a candidate to speed are one signal.
- Cut the H2 that repeats the title.
- Cut "Why fractional beats full-time." The fractional page FAQ already says it. **Repetition.**
- **Slogan:** "The short answer: earlier than you think." "The Right Time Is Before You Need It." The closer, "No pitch. Just a diagnostic," is the sitewide call.

## Post: Forward deployed engineering talent model

`/blog/forward-deployed-engineering-talent-model`

- Merge with the FDE culture post. Two essays make the same hire.
- Cut "Why FDE Is the Future." Keep the definition and the hiring problem.
- Cut the closer. "You need a recruiting partner who gets it. Let's talk."
- **Slogan:** "The Talent Model Big Tech Doesn't Want You to Know About." "Quietly becoming the most important talent strategy in tech."

## Post: Hiring cleared engineers

`/blog/hiring-cleared-engineers-defense-tech-guide`

- Cut "How Rebel Talent Helps." Link to Cleared. The section repeats that page. **Repetition.**
- Shorten the title. "A Complete Guide" promises more than the post is. The cleared page already says the pool is small and the primes pay to keep people.
- Cut the closer. "Let's have a conversation."
- **Slogan:** "you already know the pain."

## Post: Startup hiring playbook, first 10 hires

`/blog/startup-hiring-playbook-first-10-hires`

- Shorten the closer so the piece stays a playbook. The title says "without a recruiter," and the last section sells bringing help in.
- Cut the opening restatement at the end. "Your first 10 hires are too important to leave to chance" repeats the first paragraph. **Repetition.**
- **Slogan:** "Not your product, not your funding, not your market, your people."
- The pain matches the Startups page. One of them should tell this story.

## Post: Forward deployed engineering culture

`/blog/defense-tech-forward-deployed-engineering-culture`

- Merge with the other FDE post. Culture, pipeline, retention, and "how Rebel builds FDE teams" is a second pitch. **Repetition.**
- Cut the company list in the opener, or let it be the whole opener. Anduril, Shield AI, Palantir, and Scale AI do not set up the next sections.
- Cut "How Rebel Talent Builds FDE Teams" down to a link to Cleared.
- **Slogan:** "It's not just a job title. It's an operating philosophy." "This is what we do."

## Post: How we use AI to run talent operations

`/blog/how-we-use-ai-run-talent-operations`

- Keep one explanation of the agent stack. This post, the About agents section, and the Advisory AI block all describe it. **Repetition.**
- Cut "Before our first cup of coffee." The morning brief is the point.
- Shorten "Why This Matters For You" to a link to Advisory.
- **Slogan:** "(And Why You Should Too)." "The companies that figure out this balance... will dominate the next decade of talent acquisition."

## Post: DoD contracting for startups

`/blog/dod-contracting-startups-first-government-deal`

- Cut the SAM and SBIR steps, or move them off this blog. They make a recruiting site feel like a second business. Keep the cleared-workforce step and link to Cleared.
- Cut "How Rebel Talent Fits In." It repeats the cleared page. **Repetition.**
- **Slogan:** "The Opportunity Is Massive." "Filled with landmines." "The defense market is wide open."
- Shorten the opener to the one action. The terrain metaphor does not add a step.

## Post: The hidden cost of a bad senior hire

`/blog/hidden-cost-bad-senior-hire`

- Merge the three sections into one. "The costs nobody talks about" then lists the usual costs.
- Cut the last line. It repeats the opening. **Repetition.**
- **Slogan:** "A bad senior hire costs more than you think. Way more." "The best hire is the one you don't regret. Let's make sure your next senior hire is exactly that."
- The title's parenthetical, "And How to Avoid It," is the slogan. The avoid-it section can be the whole post.

## Podcast (`/podcast`)

- Cut the one-line descriptions that restate the episode title. Show, episode, links.
- Cut the newsletter block. It matches Free Tools and the footer. **Repetition.**
- Shorten the closer. "No scripts. No fluff" repeats the hero. **Repetition.**
- Put the network and the show on one line. Eleven cards each have a kicker, a title, an episode line, a paragraph, and up to three buttons.
- **Slogan:** "Straight talk on recruiting, AI, and broken hiring." "No corporate scripts. No fluff. Just real answers." Episode titles already carry the punch: "The Resume Is Dead." "Why Agency Recruiting Feels Like a Knife Fight." "This Isn't the Wolf of Wall Street."

## Free tools (`/free-tools`)

- Cut the book blurbs, or point at About. The two pages describe the same books differently. **Repetition.**
- Cut the shop card. The footer already links to the shop. **Slogan:** "Gear for people who build right, hire right, and rebel forever."
- Move the paid session off this page, or name it in the hero so the page is one kind of offer. It currently sits in the middle of the free tools and uses the strategy-call URL.
- Say the email-gate rule once, on the scorecard. The hero and the scorecard card both explain it. **Repetition.**
- **Slogan:** "Tools that actually work." "Built by someone who actually does the work." "The resume framework that actually gets callbacks." "What actually matters."

## Certification (`/certification`)

- Cut the three cards for recruiters, employers, and the profession. Each list says credential, ethics, and trust.
- Shorten "What does CR mean?" The hero already defined it. Keep the CR and CRA pair and the four chips.
- Cut the domain blurbs. The seven titles are the content. The one-line descriptions repeat them.
- Cut one of the two "Join the Founding Class" blocks. The hero and the closer are the same button and the same pitch. **Repetition.**
- **Slogan:** "The standard for recruiting professionals." "Elevating recruiting into a credentialed profession." "Be among the first certified recruiters." "Commitment to excellence." "Verified competency."

## Hiring readiness (`/hiring-readiness`)

- Cut the category list from the intro. The questions show the categories, and the four stat tiles already show the count. **Repetition.**
- Say the email rule once. It appears in the intro, again above the form, and again under the button as "No follow-up sequence."
- Cut the question-step heading. The eyebrow already says how many questions and categories.
- On the results screen, show the gaps with their fixes and collapse the passing questions. The score, "fix these first," and the full breakdown currently list the same gaps.
- Shorten "Want a deeper diagnosis?" to the button. **Repetition.** It is the sitewide strategy-call closer.

## Privacy policy (`/privacy-policy`)

- Leave the page. It is the shortest one on the site.
- Shorten "How We Use Your Information" and "Data Retention" by a sentence each. Both say the information is used for the reason it was sent.
- Merge "Contact" into "Your Rights." Both end at the same email. **Repetition.**
- No slogan lines. No em dashes. The uppercase headings are the only extra weight.

## Not found (unmatched routes)

- Cut the radar, the glitch, the scan log, and the wait before the links appear. The useful links show up after the animation.
- Keep a plain "Page not found" and the six links.
- **Slogan:** "Target Not Found." "The page you're looking for has gone dark." "Available targets." "Return to Base."
- No em dashes.
