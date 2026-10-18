import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How is CodeBreakdowns different from grinding LeetCode directly?",
      answer: "LeetCode gives you problem statements and isolated discussion threads, but doesn't teach you the mental models needed when an interviewer modifies constraints. CodeBreakdowns deconstructs problems into core structural patterns (Two Pointers, Sliding Window, Monotonic Stacks, DP state machines). Instead of memorizing 1,000 disconnected questions, you master the underlying blueprints that solve 90% of interview loops, combined with distributed system design and real-world backend depth."
    },
    {
      id: "faq-2",
      question: "Do I get lifetime access to the courses and future updates?",
      answer: "Yes! Every course or bundle purchase includes full lifetime access. You pay once and own the material permanently. You will automatically receive all future problem breakdowns, revised pattern playbooks, and newly released lessons at zero additional cost—no recurring monthly subscriptions."
    },
    {
      id: "faq-3",
      question: "What programming languages are supported in the breakdowns?",
      answer: "Our visual walkthroughs focus on language-agnostic mental models and spatial intuition. For implementations, we provide clean, production-grade solutions in TypeScript/JavaScript, Python, and Go/Java. Each code breakdown includes optimal time/space complexity analysis and highlights language-specific nuances (like hash set operations, memory layout, and slicing overhead)."
    },
    {
      id: "faq-4",
      question: "What are the prerequisites for the backend and system design courses?",
      answer: "Basic proficiency in any programming language (variables, loops, basic functions) is all you need. We start with foundational principles—HTTP protocols, database tables, and REST contracts—before progressively advancing into production topics like Redis caching, WebSockets, ACID transaction locks, and modern AI agent pipelines."
    },
    {
      id: "faq-5",
      question: "Can I explore the curriculum before purchasing?",
      answer: "Absolutely! Our complete curriculum tree (courses, chapters, and lesson outlines) is 100% public and open for guests to browse. You can review every topic, read prerequisites and learning objectives, and watch free sample lessons (such as Contains Duplicate in Blind 75) before deciding to purchase."
    },
    {
      id: "faq-6",
      question: "What is your refund and support policy?",
      answer: "We are committed to helping you succeed in your technical interviews. If you encounter any technical issues or find that the material isn't suited to your current learning stage, reach out to our team at codebreakdowns@gmail.com within 7 days of purchase, and we will happily review your request per our refund policy."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-b border-border">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-primary mb-3.5 shadow-sm">
          <HelpCircle className="w-3.5 h-3.5 mr-2 shrink-0" />
          Got Questions? We&apos;ve Got Answers
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Everything you need to know about our curriculum, lifetime access, supported languages, and technical interview preparation.
        </p>
      </div>

      {/* Radix Accessible Accordion */}
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-8 shadow-sm">
        <Accordion type="single" collapsible defaultValue="faq-1" className="w-full space-y-2">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id} 
              className="border border-border/80 rounded-xl px-4 sm:px-6 bg-background/50 hover:bg-background/80 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-background"
            >
              <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-foreground py-4 hover:no-underline">
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Support Subtext */}
      <div className="mt-8 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Still have questions? Reach out to our team at{" "}
          <a 
            href="mailto:codebreakdowns@gmail.com" 
            className="text-primary hover:underline font-semibold"
          >
            codebreakdowns@gmail.com
          </a>
        </p>
      </div>

    </section>
  );
}
