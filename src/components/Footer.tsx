import { ArrowUpRight } from "lucide-react";
import SpokknLogo from "./SpokknLogo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-primary-foreground/5 hidden lg:block" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full border border-primary-foreground/5 hidden lg:block" />

      <div className="container relative">
        {/* Big CTA before footer links */}
        <div className="mb-16 pb-16 border-b border-primary-foreground/10">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Ready to start<br />
            <span className="text-accent">speaking</span>?
          </h3>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-full hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex items-center gap-2 group">
              Create Your First Activity
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
            <p className="text-sm text-primary-foreground/50 max-w-xs mt-2 sm:mt-0 sm:pt-2">
              Create activities, join sessions, and practice English with real people worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <SpokknLogo variant="light" />
            <p className="text-sm text-primary-foreground/60 mt-3 max-w-xs">
              Create your activity. Join sessions. Practice English with real conversations.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {["Activities", "Sessions", "Become a Host", "Pricing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Social</h4>
            <ul className="flex flex-col gap-2.5">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors flex items-center gap-1">
                    {item}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Spokkn. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
