import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-400 cursor-pointer">
            Mido.dev
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`font-medium transition-colors duration-300 relative group ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 block h-0.5 bg-primary bottom-[-4px]"
                  />
                )}
              </a>
            </Link>
          ))}
          <div className="pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-panel rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
