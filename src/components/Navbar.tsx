import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpokknLogo from "./SpokknLogo";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <header className="top-0 left-0 right-0 z-50 bg-transparent w-full">
      <div className="flex items-center justify-between h-16 md:h-20 px-2 sm:px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 shrink-0">
          <SpokknLogo variant={isDark ? "dark" : "light"} />
        </a>

        {/* Right side - desktop */}
        <div className="hidden md:flex items-center gap-3">
          {isDark ? (
            <>
              <Button variant="outline" className="text-foreground border-border hover:bg-muted">
                Sign In
              </Button>
              <Button>
                Download App
                <Download className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20">
                Sign In
              </Button>
              <Button variant="white">
                Download App
                <Download className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 ${isDark ? "text-foreground" : "text-white"}`}
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
              <Button variant="ghost" className="text-foreground justify-start">
                Sign In
              </Button>
              <Button>
                Download App
                <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
                  <Download className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
