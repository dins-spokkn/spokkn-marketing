import { useState, useEffect } from "react";
import { Download, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpokknLogo from "./SpokknLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 shrink-0">
          <SpokknLogo />
        </a>

        {/* Right side - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors group">
            Download App
            <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
              <Download className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              <button className="text-sm font-medium text-foreground text-left py-2">
                Sign In
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors group justify-center">
                Download App
                <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
                  <Download className="w-4 h-4" />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
