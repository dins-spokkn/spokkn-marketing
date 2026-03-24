import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Spokkn?",
    a: "Spokkn is a peer-to-peer speaking practice platform where you can book live sessions with other learners, practice real conversations, and review recordings and transcripts to improve your spoken English.",
  },
  {
    q: "Do I need to be fluent to join?",
    a: "Not at all. Spokkn welcomes learners at every level. You can filter sessions by proficiency level and find peers who match where you are right now.",
  },
  {
    q: "How are sessions structured?",
    a: "Sessions are guided by AI-generated activities tailored to your goals — job interviews, casual conversation, academic presentations, and more. You can also create and save your own custom activities.",
  },
  {
    q: "Can I practice alone or only with others?",
    a: "You can join group sessions or book one-on-one sessions with a partner. Solo practice tools like activity generation are also available anytime.",
  },
  {
    q: "Are sessions recorded?",
    a: "Yes. Every session is recorded and transcribed so you can review your performance, spot patterns, and track improvement over time.",
  },
  {
    q: "Is Spokkn free to use?",
    a: "Spokkn offers a free tier so you can get started right away. Premium plans unlock unlimited sessions, advanced analytics, and priority matching.",
  },
  {
    q: "What devices does Spokkn support?",
    a: "Spokkn works on any modern browser on desktop or mobile. Dedicated iOS and Android apps are coming soon.",
  },
];

const FAQ = () => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        {/* Left side - Heading */}
        <motion.div
          className="lg:top-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-sm">
            Everything you need to know before your first session.
          </p>
        </motion.div>

        {/* Right side - Accordion */}
        <div className="lg:col-span-2">
          <Accordion type="single" collapsible className="space-y-2.5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="border border-border rounded-2xl px-5 bg-card
                    hover:border-primary/30 transition-colors duration-200"
                >
                  <AccordionTrigger
                    className="text-left font-semibold text-foreground
                      hover:no-underline py-5 text-sm md:text-base"
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-muted-foreground text-sm leading-relaxed pb-5"
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

      </div>
    </div>
  </section>
);

export default FAQ;
