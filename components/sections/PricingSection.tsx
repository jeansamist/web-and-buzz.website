import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface PricingSectionProps {
  setPage: (p: PageType) => void;
}

const CHECKLIST_LEFT = [
  { color: C.sky,    text: "Flexible payment options available"  },
  { color: C.blue,   text: "Strategy, design, and support included" },
  { color: C.yellow, text: "No hidden fees or surprise costs"    },
  { color: C.orange, text: "Completion within 1–6 weeks"        },
];

const CHECKLIST_RIGHT = [
  "Conversion-focused website design",
  "Smart lead capture & automation",
  "Automated follow-up sequences",
  "Search visibility foundation",
  "3 months post-launch support",
  "Strategy & discovery session",
];

export default function PricingSection({ setPage }: PricingSectionProps) {
  return (
    <section id="pricing" style={{ padding: "108px 0", background: C.charcoal, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-25%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,rgba(33,118,255,.12) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <div className="cols-2" style={{ display: "grid", gap: 80, alignItems: "center" }}>

          <FadeIn direction="left">
            <span className="eyebrow-light">Investment</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em", color: C.white }}>
              Investment That Matches<br /><span className="grad-blue">Real Business Growth.</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.58)", lineHeight: 1.8, marginBottom: 28 }}>
              Projects start from <strong style={{ color: C.yellow, fontWeight: 800 }}>$2,000</strong> depending on your needs and complexity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {CHECKLIST_LEFT.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckCircle2 size={18} color={item.color} />
                  <span style={{ fontSize: 16, color: "rgba(255,255,255,.72)", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-yellow" style={{ fontSize: 15, padding: "16px 32px" }} onClick={() => setPage("contact")}>
                Request a Quote <ArrowRight size={16} />
              </button>
              <button className="btn-ghost" onClick={() => setPage("contact")}>
                Get My Free Website Audit <ArrowUpRight size={16} />
              </button>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.12}>
            <div style={{ background: "rgba(255,255,255,.05)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: 36 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6 }}>Starting From</div>
                  <div style={{ fontSize: 52, fontWeight: 900, color: C.white, letterSpacing: "-0.04em", lineHeight: 1 }}>$2,000</div>
                </div>
                <span style={{ background: "rgba(253,202,64,.15)", border: "1px solid rgba(253,202,64,.3)", color: C.yellow, fontSize: 12, fontWeight: 700, padding: "6px 12px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Flexible Payment</span>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,.08)", margin: "22px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {CHECKLIST_RIGHT.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <CheckCircle2 size={16} color={C.sky} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,.7)", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <button className="btn-yellow" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "16px" }} onClick={() => setPage("contact")}>
                  Request a Quote <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
