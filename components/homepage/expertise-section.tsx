"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "cn";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I know if therapy with Dr. Maya is the right fit for me?",
    answer:
      "I specialize in working with thoughtful, high-achieving adults who feel functional on the outside while quietly carrying anxiety, panic, trauma, or burnout. If you are seeking a psychologist who combines practical, science-backed tools with deep emotional insight—and who understands the realities of high-pressure work and life—we are likely a strong fit. We begin with a brief consultation call to ensure alignment before scheduling your first appointment.",
  },
  {
    question:
      "Do you offer in-person sessions in Santa Monica or virtual therapy?",
    answer:
      "I offer both. In-person sessions take place at my quiet, private office at 123th Street 45 W in Santa Monica, California, curated with natural daylight and an uncluttered setting. For clients across California—including the Bay Area, Orange County, and San Diego—or those with demanding schedules, I offer secure, HIPAA-compliant telehealth that maintains the exact same depth and relational presence.",
  },
  {
    question: "How does EMDR therapy work, and will it feel overwhelming?",
    answer:
      "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based modality that helps your brain reprocess unresolved traumatic memories and anxious triggers so they no longer hijack your present-day nervous system. In my practice, safety and pacing are paramount. We never rush into traumatic material; we build grounding, self-regulation, and stabilization tools first.",
  },
  {
    question: "Why do you integrate body-oriented (somatic) work with CBT?",
    answer:
      "Anxiety, panic, and burnout are physiological realities just as much as cognitive ones—manifesting as muscle tension, shallow breathing, racing heartbeat, or sleep disruption. While Cognitive-Behavioral Therapy (CBT) helps reframe anxious thought loops, somatic practices address physical tension directly. Integrating mind and body produces deeper, longer-lasting relief.",
  },
  {
    question: "What is your typical session structure and pacing?",
    answer:
      "Sessions are 50 minutes long and typically held weekly, particularly in the initial phase to establish momentum and felt safety. My approach provides enough structure to feel actionable and reassuring between sessions, while preserving spaciousness for reflection and vulnerability.",
  },
  {
    question: "How do fees, payments, and insurance reimbursement work?",
    answer:
      "I am an out-of-network provider in California. Payment is due at the time of each session. If your health insurance plan includes out-of-network behavioral health benefits, I can provide a monthly statement (superbill) that you may submit for potential reimbursement. You are entitled to a Good Faith Estimate under the No Surprises Act.",
  },
];

export function ExpertiseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions about Therapy in Santa Monica"
      className="relative w-full bg-background py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-accent font-medium mb-4">
            Common Inquiries
          </p>
          <h2 className="font-heading font-light text-foreground text-h2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Starting therapy is an important investment in your wellbeing. Here
            is clarity on what to expect.
          </p>
        </div>

        {/* Minimalist Hairline Accordion (No SaaS Card Boxes) */}
        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={faq.question} className="py-6 sm:py-8">
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <span className="font-heading text-xl sm:text-2xl text-foreground font-normal leading-snug group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 text-muted-foreground shrink-0 transition-transform duration-300 mt-1",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="pt-4 pr-10 text-muted-foreground font-sans text-base font-light leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
