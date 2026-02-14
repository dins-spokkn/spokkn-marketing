import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About", "Features", "How It Works", "Pricing"];

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
        scrolled ? "bg-card/80 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 shrink-0">
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gradient">
            Spokkn
          </span>
        </a>

        {/* Center nav - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side - desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Log In
          </button>
          <button className="bg-gradient-brand text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-card transition-all hover:-translate-y-0.5 flex items-center gap-1.5">
            Book Your First Session
            <ArrowUpRight className="w-3.5 h-3.5" />
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
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-sm font-medium text-foreground py-2">
                  {link}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <button className="text-sm font-medium text-foreground">Log In</button>
                <button className="bg-gradient-brand text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5">
                  Book Your First Session
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
