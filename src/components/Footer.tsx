import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-extrabold tracking-tight">
              am<span className="text-gradient">ae</span>ya<span className="text-primary">°</span>
            </span>
            <p className="text-sm text-primary-foreground/60 mt-3 max-w-xs">
              Empowering conversations that humanize our world.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary-foreground/80">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {["Shows", "Episodes", "Topics", "Authors"].map((item) => (
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
            © 2026 Amaeya Network. All rights reserved.
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
