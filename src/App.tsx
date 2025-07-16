import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Placements from "./pages/Placements";
import NotFound from "./pages/NotFound";
import JEECounselling from "./pages/JEECounselling";
import NewsEvents from "./pages/NewsEvents";
import Hackathons from './pages/Hackathons';
import Login from "./pages/Login";
import Register from "./pages/Register";

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
          <Route path="/competitions-hackathons" element={<Hackathons />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
