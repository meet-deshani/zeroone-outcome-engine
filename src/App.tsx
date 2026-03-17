import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import Solutions from "./pages/Solutions";
import Community from "./pages/Community";
import SeoGeo from "./pages/SeoGeo";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Security from "./pages/Security";
import InfinityCRM from "./pages/Infinity";
import NotFound from "./pages/NotFound";
import OvertradeOP from "./pages/OvertradeOP";
import PrivateAI from "./pages/PrivateAI";
import AiWorkshop from "./pages/AiWorkshop";
import HeatExchanger from "./pages/HeatExchanger";
import PersonalAiAgent from "./pages/PersonalAiAgent";
import Resources from "./pages/Resources";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import LMTDCalculator from "./pages/tools/LMTDCalculator";
import BaffleCutArticle from "./pages/blog/BaffleCutArticle";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { initGA } from "./lib/analytics";

// Code-split blog pages (loaded on demand for better performance)
const BusinessMarginGuide = lazy(() => import("./pages/blog/BusinessMarginGuide"));
const AiAutomationGuide = lazy(() => import("./pages/blog/AiAutomationGuide"));
const AiCommunityGuide = lazy(() => import("./pages/blog/AiCommunityGuide"));
const AiEducationGuide = lazy(() => import("./pages/blog/AiEducationGuide"));
const AiToolsIndia = lazy(() => import("./pages/blog/AiToolsIndia"));
const AiCouncilGuide = lazy(() => import("./pages/blog/AiCouncilGuide"));
const PrivateAiIndia = lazy(() => import("./pages/blog/PrivateAiIndia"));
const AiOfficeSetup = lazy(() => import("./pages/blog/AiOfficeSetup"));
const OfflineAiGuide = lazy(() => import("./pages/blog/OfflineAiGuide"));
const PrivateAiVsCloud = lazy(() => import("./pages/blog/PrivateAiVsCloud"));
const OnPremiseAiGuide = lazy(() => import("./pages/blog/OnPremiseAiGuide"));

// Code-split Private AI sub-pages
const WithoutInternet = lazy(() => import("./pages/private-ai/WithoutInternet"));
const AiCouncil = lazy(() => import("./pages/private-ai/AiCouncil"));
const AiOffice = lazy(() => import("./pages/private-ai/AiOffice"));

const queryClient = new QueryClient();

// Simple loading fallback for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen bg-cream-50 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-ink border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnalyticsTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/community" element={<Community />} />
              <Route path="/seo-geo" element={<SeoGeo />} />
              <Route path="/digital-authority" element={<Navigate to="/seo-geo" replace />} />
              <Route path="/infinity-crm" element={<InfinityCRM />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/security" element={<Security />} />
              <Route path="/overtrade-op" element={<OvertradeOP />} />
              <Route path="/private-ai" element={<PrivateAI />} />
              <Route path="/private-ai/without-internet" element={<Suspense fallback={<PageLoader />}><WithoutInternet /></Suspense>} />
              <Route path="/private-ai/council" element={<Suspense fallback={<PageLoader />}><AiCouncil /></Suspense>} />
              <Route path="/private-ai/office" element={<Suspense fallback={<PageLoader />}><AiOffice /></Suspense>} />
              <Route path="/inhouse-slm" element={<Navigate to="/private-ai" replace />} />
              <Route path="/ai-workshop" element={<AiWorkshop />} />
              <Route path="/he-design" element={<HeatExchanger />} />
              <Route path="/personal-ai-agent" element={<PersonalAiAgent />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Resources & Tools */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/lmtd-calculator" element={<LMTDCalculator />} />
              <Route path="/resources/baffle-cut-optimization" element={<BaffleCutArticle />} />

              {/* Blog pages (code-split for performance) */}
              <Route path="/resources/business-margin-guide" element={<Suspense fallback={<PageLoader />}><BusinessMarginGuide /></Suspense>} />
              <Route path="/resources/ai-automation-guide" element={<Suspense fallback={<PageLoader />}><AiAutomationGuide /></Suspense>} />
              <Route path="/resources/ai-community" element={<Suspense fallback={<PageLoader />}><AiCommunityGuide /></Suspense>} />
              <Route path="/resources/ai-education" element={<Suspense fallback={<PageLoader />}><AiEducationGuide /></Suspense>} />
              <Route path="/resources/ai-tools-india" element={<Suspense fallback={<PageLoader />}><AiToolsIndia /></Suspense>} />
              <Route path="/resources/ai-council-guide" element={<Suspense fallback={<PageLoader />}><AiCouncilGuide /></Suspense>} />
              <Route path="/resources/private-ai-india" element={<Suspense fallback={<PageLoader />}><PrivateAiIndia /></Suspense>} />
              <Route path="/resources/ai-office-setup" element={<Suspense fallback={<PageLoader />}><AiOfficeSetup /></Suspense>} />
              <Route path="/resources/offline-ai-guide" element={<Suspense fallback={<PageLoader />}><OfflineAiGuide /></Suspense>} />
              <Route path="/resources/private-ai-vs-cloud" element={<Suspense fallback={<PageLoader />}><PrivateAiVsCloud /></Suspense>} />
              <Route path="/resources/on-premise-ai-guide" element={<Suspense fallback={<PageLoader />}><OnPremiseAiGuide /></Suspense>} />

              {/* Legacy route redirects */}
              <Route path="/approach" element={<Pricing />} />
              <Route path="/services" element={<Solutions />} />
              <Route path="/work" element={<Community />} />
              <Route path="/contact" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
