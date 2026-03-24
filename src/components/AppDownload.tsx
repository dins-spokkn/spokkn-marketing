import { Download, Smartphone, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AppDownload = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Available on iOS & Android</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Take Spokkn Anywhere
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Download the app and practice English on the go. Join sessions anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg">
                <Download className="w-5 h-5" />
                Download App
              </Button>
              <Button size="lg" variant="outline">
                <QrCode className="w-5 h-5" />
                Scan QR Code
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div
                className="h-14 px-6 bg-foreground text-background rounded-xl flex items-center gap-3 text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Download on the</div>
                  <div className="text-base">App Store</div>
                </div>
              </motion.div>
              
              <motion.div
                className="h-14 px-6 bg-foreground text-background rounded-xl flex items-center gap-3 text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Get it on</div>
                  <div className="text-base">Google Play</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Phone mockup placeholder */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-sm mx-auto aspect-[9/16] bg-gradient-to-br from-primary to-accent rounded-3xl border-8 border-foreground/10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Smartphone className="w-20 h-20 text-white/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
