import { ArrowUpRight, Download, Smartphone, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SpokknLogo from "./SpokknLogo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="text-white py-16 relative overflow-hidden rounded-2xl mx-4 mb-4" style={{ backgroundColor: "rgb(208, 233, 251)" }}>
      {/* Gradient orbs */}
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(1600px,200vw)] h-[900px] rounded-full opacity-70 pointer-events-none" style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(120px)", zIndex: 0 }} />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-80 pointer-events-none" style={{ backgroundColor: "rgb(80, 167, 227)", filter: "blur(100px)", zIndex: 0 }} />

      <div className="container relative">
        {/* Big CTA before footer links */}
        <div className="mb-16 pb-16 border-b border-white/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Ready to Improve Your<br />
              <span className="text-white">Spoken English?</span>
            </h3>
          </div>
          <div className="flex flex-col xs:flex-row items-stretch sm:items-start gap-3">
            <Button variant="white" size="lg">
              <Download className="w-4 h-4" />
              Download App
            </Button>
            <Button variant="white" size="lg" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
              Sign Up on Web
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <SpokknLogo className="-ml-5" variant="light" size="lg" />
            <p className="text-sm text-white mt-3 max-w-xs leading-relaxed">
              Practice English through real conversations with peers worldwide.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://in.linkedin.com/company/spokkn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/spokkn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/917022253059?text=Hi%2C%20I%20recently%20came%20across%20Spokkn%20and%20it%20looks%20really%20interesting.%20I%E2%80%99d%20love%20to%20learn%20more%20about%20how%20your%20sessions%20work%2C%20what%20the%20format%20is%2C%20and%20how%20I%20can%20get%20started.%20Could%20you%20please%20share%20the%20details%3F" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Download</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white transition-colors">App Store</a></li>
              <li><a href="#" className="text-sm text-white transition-colors">Google Play</a></li>
              <li>
                <a href="https://spokkn.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white transition-colors flex items-center gap-1">
                  Web App <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Features</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-white transition-colors">Live Sessions</a></li>
              <li><a href="#" className="text-sm text-white transition-colors">Storytelling</a></li>
              <li><a href="#" className="text-sm text-white transition-colors">Debates</a></li>
              <li><a href="#" className="text-sm text-white transition-colors">Role Play</a></li>
              <li><a href="#" className="text-sm text-white transition-colors">Pronunciation</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/privacy-policy" className="text-sm text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-sm text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-sm text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/data-deletion" className="text-sm text-white transition-colors">Data Deletion</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white">
            © 2026 Spokkn. All rights reserved.
          </p>
          {/* <SpokknLogo variant="light" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
