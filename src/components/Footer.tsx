import { ArrowUpRight, Download, Smartphone, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SpokknLogo from "./SpokknLogo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container relative">
        {/* Big CTA before footer links */}
        <div className="mb-16 pb-16 border-b border-primary-foreground/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Ready to Improve Your<br />
              <span className="text-accent">Spoken English?</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download App
            </button>
            <button className="border-2 border-accent text-accent font-semibold px-7 py-3.5 rounded-full hover:bg-accent/10 transition-all flex items-center gap-2">
              Sign Up on Web
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <SpokknLogo variant="light" size="50" />
            <p className="text-sm text-primary-foreground/60 mt-3 max-w-xs">
              Practice English through real conversations with peers worldwide.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Download</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">App Store</a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Google Play</a>
              </li>
              <li>
                <a href="https://spokkn.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors flex items-center gap-1">
                  Web App
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Company</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Spokkn. All rights reserved.
          </p>
          {/* <SpokknLogo variant="light" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
