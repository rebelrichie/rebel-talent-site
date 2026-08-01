import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";

// Safe addition — route-level code splitting. Home stays eager (primary LCP
// entry, no Suspense flash on the top landing page); every other route is
// lazy-loaded so it no longer weighs down the initial JS bundle. The Puppeteer
// prerender waits for networkidle0, so each lazy chunk resolves before the
// static HTML snapshot is captured (SEO-safe).
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const HowItWorks = lazy(() => import("@/pages/HowItWorks"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const Podcast = lazy(() => import("@/pages/Podcast"));
const FreeTools = lazy(() => import("@/pages/FreeTools"));
const CommandDemo = lazy(() => import("@/pages/CommandDemo"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Certification = lazy(() => import("@/pages/Certification"));
const FractionalHeadOfTalent = lazy(() => import("@/pages/FractionalHeadOfTalent"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Advisory = lazy(() => import("@/pages/Advisory"));
const StrategyCall = lazy(() => import("@/pages/StrategyCall"));
const HiringReadiness = lazy(() => import("@/pages/HiringReadiness"));
const Jobs = lazy(() => import("@/pages/Jobs"));
const JobDetail = lazy(() => import("@/pages/JobDetail"));
const JobApply = lazy(() => import("@/pages/JobApply"));
const GeneralApply = lazy(() => import("@/pages/GeneralApply"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-rebel-space" />}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/results" component={CaseStudies} />
      <Route path="/podcast" component={Podcast} />
      {/* /platform retired, Rebel Apply scuttled. Redirect to /services. */}
      <Route path="/platform">{() => { window.location.href = "/services"; return null; }}</Route>
      <Route path="/command" component={CommandDemo} />
      <Route path="/free-tools" component={FreeTools} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/certification" component={Certification} />
      <Route path="/fractional-head-of-talent" component={FractionalHeadOfTalent} />
      <Route path="/fractional-recruiting-services" component={FractionalHeadOfTalent} />
      <Route path="/pricing" component={Pricing} />
      {/* /rachael retired. 301 to home. */}
      <Route path="/rachael">{() => { window.location.href = "/"; return null; }}</Route>
      <Route path="/advisory" component={Advisory} />
      <Route path="/strategy-call" component={StrategyCall} />
      <Route path="/hiring-readiness" component={HiringReadiness} />
      <Route path="/jobs" component={Jobs} />
      {/* Safe addition (2026-06-05): general application for future-role consideration. */}
      <Route path="/jobs/general" component={GeneralApply} />
      <Route path="/jobs/:id/apply" component={JobApply} />
      <Route path="/jobs/:id" component={JobDetail} />
      {/* Hidden page "/greener-planet" is served as a standalone static file
          (client/public/greener-planet/index.html), not a React route. */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      {/* Safe addition, redirect /shop to external store */}
      <Route path="/shop">{() => { window.location.href = "https://rebel-talent-shop.fourthwall.com/"; return null; }}</Route>
      <Route path="/abcr-certification">{() => { window.location.href = "/certification"; return null; }}</Route>
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
