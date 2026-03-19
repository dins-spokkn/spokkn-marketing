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
  <section className="py-20 md:py-32 bg-white">
    <div className="container max-w-3xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know before your first session.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-primary/10 rounded-md px-6 bg-primary/5"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
