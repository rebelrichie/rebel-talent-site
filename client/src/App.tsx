import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import Testimonials from "@/pages/Testimonials";
import CaseStudies from "@/pages/CaseStudies";
import Podcast from "@/pages/Podcast";
import FreeTools from "@/pages/FreeTools";
import Platform from "@/pages/Platform";
import ClientPortal from "@/pages/ClientPortal";
import CommandDemo from "@/pages/CommandDemo";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Certification from "@/pages/Certification";
import FractionalHeadOfTalent from "@/pages/FractionalHeadOfTalent";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/platform" component={Platform} />
      <Route path="/client-portal" component={ClientPortal} />
      <Route path="/command" component={CommandDemo} />
      <Route path="/free-tools" component={FreeTools} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/certification" component={Certification} />
      <Route path="/fractional-head-of-talent" component={FractionalHeadOfTalent} />
      <Route path="/fractional-recruiting-services" component={FractionalHeadOfTalent} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      {/* Safe addition — redirect /shop to external store */}
      <Route path="/shop">{() => { window.location.href = "https://rebel-talent-shop.fourthwall.com/"; return null; }}</Route>
      <Route path="/abcr-certification">{() => { window.location.href = "/certification"; return null; }}</Route>
      <Route component={NotFound} />
    </Switch>
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
