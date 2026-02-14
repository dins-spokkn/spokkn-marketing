import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <a href="#" className="flex items-center gap-1 shrink-0">
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
            am<span className="text-gradient">ae</span>ya
          </span>
          <span className="text-primary text-lg">°</span>
        </a>

        {/* Center search - desktop */}
        <div className="hidden md:flex items-center bg-secondary rounded-full px-4 py-2 gap-2 w-full max-w-xs mx-6">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
          />
        </div>

        {/* Right side - desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-lavender border-2 border-card flex items-center justify-center text-xs font-semibold text-primary"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="flex items-center pl-3 text-sm font-medium text-muted-foreground">
              +1.2k Authors
            </div>
          </div>
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Login
          </button>
          <button className="bg-gradient-brand text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-card transition-all hover:-translate-y-0.5 flex items-center gap-1.5">
            Join
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
            <div className="container py-4 flex flex-col gap-4">
              <div className="flex items-center bg-secondary rounded-full px-4 py-2.5 gap-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-medium text-foreground py-1">Shows</a>
                <a href="#" className="text-sm font-medium text-foreground py-1">Work with us</a>
                <a href="#" className="text-sm font-medium text-foreground py-1">About Us</a>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <button className="text-sm font-medium text-foreground">Login</button>
                <button className="bg-gradient-brand text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5">
                  Join
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
