import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
   <QueryClientProvider client={queryClient}>
      <TooltipProvider>
         <Toaster />
         <Sonner />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/menu" element={<Menu />} />
               <Route path="/about" element={<About />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/skills" element={<Skills />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/certificates" element={<Certificates />} />
               <Route path="/timeline" element={<Timeline />} />
               <Route path="/contact" element={<Contact />} />
               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </TooltipProvider>
   </QueryClientProvider>
);

export default App;
