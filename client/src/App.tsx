import { Switch, Route, Router, BaseLocationHook } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import { useLayoutEffect, useState } from "react";

// Get base path from Vite's import.meta.env.BASE_URL
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, ""); // Remove trailing slash

// Custom location hook that strips the base path
const useBaseLocation: BaseLocationHook = () => {
  const getPath = () => {
    let path = window.location.pathname;
    // Strip base path
    if (path.startsWith(BASE_PATH)) {
      path = path.slice(BASE_PATH.length) || "/";
    }
    return path;
  };

  const [location, setLocation] = useState(getPath);

  useLayoutEffect(() => {
    const handlePopState = () => {
      setLocation(getPath());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string, replace?: boolean) => {
    // Add base path back when navigating
    const fullPath = path.startsWith("/") ? BASE_PATH + path : path;
    if (replace) {
      window.history.replaceState(null, "", fullPath);
    } else {
      window.history.pushState(null, "", fullPath);
    }
    setLocation(path);
    // Trigger popstate to notify wouter
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return [location, navigate];
};

function AppRouter() {
  return (
    <Router hook={useBaseLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
