import { ArrowRight, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface FaqSectionProps {
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
  setPage: (p: PageType) => void;
}

const FAQS = [
  { q: "How long does a project take?",           a: "Most projects are completed within one to six weeks, depending on scope and complexity. We'll give you a clear timeline before we start."                         },
  { q: "Can I update my website myself?",         a: "Yes — your website will be built on modern, user-friendly tools so you can easily make updates without any technical knowledge."                                 },
  { q: "Do you provide support after launch?",    a: "Yes. Every project includes up to three months of post-launch support so you're never left managing a new system alone."                                         },
  { q: "Do you work with international clients?", a: "Yes. We work with service businesses across different regions and time zones. Distance is never an issue."                                                        },
];

export default function FaqSection({ openFaq, setOpenFaq, setPage }: FaqSectionProps) {
  return (
    <section id="faq" style={{ padding: "108px 0", background: C.white }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">FAQ</span>
            <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Questions Before You Start?<br /><span className="grad-blue">We've Got Answers.</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ borderTop: `1px solid ${C.cloud}` }}>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="faq-row">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: "'Outfit',sans-serif" }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: C.charcoal, lineHeight: 1.4, letterSpacing: "-0.01em" }}>{faq.q}</span>
                  <div style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s", background: openFaq === i ? C.blue : C.cloud }}>
                    <ChevronDown size={15} color={openFaq === i ? C.white : C.charcoal} style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .3s ease" }} />
                  </div>
                </button>
                <div style={{ maxHeight: openFaq === i ? 220 : 0, overflow: "hidden", transition: "max-height .4s ease" }}>
                  <p style={{ fontSize: 15, color: "rgba(49,57,60,.6)", lineHeight: 1.82, paddingBottom: 22 }}>{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div style={{ textAlign: "center", marginTop: 40, padding: "24px", background: C.mist, borderRadius: 14, border: `1.5px solid ${C.cloud}` }}>
            <p style={{ fontSize: 15, color: "rgba(49,57,60,.6)", marginBottom: 14 }}>Still have questions?</p>
            <button className="btn-blue" onClick={() => setPage("contact")}>
              Send Us a Message <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
