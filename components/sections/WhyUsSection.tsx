import { ArrowRight, ArrowUpRight, Target, Layers, Lightbulb, HeartHandshake } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface WhyUsSectionProps {
  setPage: (p: PageType) => void;
}

const REASONS = [
  { Icon: Target,         color: C.blue,   title: "We Focus on Conversions and Measurable Outcomes",    desc: "Every decision is made to improve lead generation. We measure success in clients, not clicks."                                   },
  { Icon: Layers,         color: C.orange, title: "We Combine Design and Automation",                    desc: "You get a complete system — not just a website. Design, capture, qualify, and follow-up in one."                              },
  { Icon: Lightbulb,      color: C.sky,    title: "We Keep Things Simple and Effective",                 desc: "No unnecessary complexity. Clean, strategic, and built to perform from day one."                                               },
  { Icon: HeartHandshake, color: C.yellow, title: "We Support You Beyond Launch",                        desc: "Continuous improvement is part of the process. We're with you for the first 3 months post-launch."                            },
];

export default function WhyUsSection({ setPage }: WhyUsSectionProps) {
  return (
    <section style={{ padding: "108px 0", background: C.mist }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ maxWidth: 560, marginBottom: 60 }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Built For Results.<br /><span className="grad-blue">Not Just Design.</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
          {REASONS.map((d, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="hover-lift" style={{ background: C.white, border: `1.5px solid ${C.cloud}`, borderRadius: 16, padding: 30, display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 50, height: 50, background: C.charcoal, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <d.Icon size={21} color={d.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: C.charcoal, marginBottom: 7, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(49,57,60,.58)", lineHeight: 1.77 }}>{d.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.42}>
          <div style={{ display: "flex", gap: 14, marginTop: 48, flexWrap: "wrap" }}>
            <button className="btn-blue" style={{ fontSize: 16, padding: "17px 36px" }} onClick={() => setPage("contact")}>
              Get My Free Website Audit <ArrowRight size={18} />
            </button>
            <button className="btn-outline-dark" onClick={() => setPage("contact")}>
              Request a Quote <ArrowUpRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
