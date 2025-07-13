import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Make sure this path is correct
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Placements from "./pages/Placements";
import NotFound from "./pages/NotFound";
import JEECounselling from "./pages/JEECounselling";
import NewsEvents from "./pages/NewsEvents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ Fixes scrolling issue */}
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/placements" element={<Layout><Placements /></Layout>} />
          <Route path="/jee-counselling" element={<Layout><JEECounselling /></Layout>} />
          <Route path="/news-events" element={<Layout><NewsEvents /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
