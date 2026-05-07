import { ArrowRight, Globe, Layers, BadgeCheck, Bot, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface HowItWorksSectionProps {
  setPage: (p: PageType) => void;
}

const STEPS = [
  { n: "01", Icon: Globe,      color: C.blue,   title: "Visitor Lands",    desc: "Guided with clear messaging and structure toward taking action."         },
  { n: "02", Icon: Layers,     color: C.sky,    title: "Lead Captured",    desc: "Forms and chat collect key information instantly."                       },
  { n: "03", Icon: BadgeCheck, color: C.yellow, title: "Lead Qualified",   desc: "System filters prospects so you focus only on serious buyers."           },
  { n: "04", Icon: Bot,        color: C.orange, title: "Follow-Up Begins", desc: "Automated sequences respond — no more missed messages."                 },
  { n: "05", Icon: TrendingUp, color: C.blue,   title: "You Close More",   desc: "Less manual effort. More signed clients. Every week."                   },
];

export default function HowItWorksSection({ setPage }: HowItWorksSectionProps) {
  return (
    <section id="how" style={{ padding: "108px 0", background: C.charcoal, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,rgba(253,202,64,.07) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
            <span className="eyebrow-light">How It Works</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, color: C.white, letterSpacing: "-0.03em" }}>
              A Simple System That Works —<br /><span className="grad-blue">From First Visit To Signed Client.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="cols-5" style={{ display: "grid", gap: 16, position: "relative" }}>
          <div className="connector-line" style={{ position: "absolute", top: 34, left: "10%", right: "10%", height: 1, background: "rgba(255,255,255,.07)", zIndex: 0 }} />
          {STEPS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="step-card" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 8px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: `2px solid ${s.color}`, background: i === 0 ? s.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", boxShadow: i === 0 ? `0 0 28px ${s.color}55` : "none" }}>
                  <s.Icon size={20} color={i === 0 ? C.white : s.color} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>Step {s.n}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: C.white, marginBottom: 8, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.42)", lineHeight: 1.72 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.55}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 52 }}>
            <button className="btn-yellow" style={{ fontSize: 16, padding: "17px 36px" }} onClick={() => setPage("contact")}>
              Request a Quote <ArrowRight size={18} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
