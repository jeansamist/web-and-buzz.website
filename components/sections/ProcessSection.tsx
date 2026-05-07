import { ArrowRight, Lightbulb, PenLine, Code2, Rocket } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface ProcessSectionProps {
  setPage: (p: PageType) => void;
}

const PHASES = [
  { n: "01", Icon: Lightbulb, color: C.blue,   title: "Discovery & Strategy",  desc: "We understand your business, goals, and ideal clients before writing a single line of code."  },
  { n: "02", Icon: PenLine,   color: C.sky,    title: "Design & Validation",   desc: "You review and approve every design before development begins. No surprises."                  },
  { n: "03", Icon: Code2,     color: C.orange, title: "Development",           desc: "We build your full system with precision — website, automation, and follow-up flows."           },
  { n: "04", Icon: Rocket,    color: C.yellow, title: "Launch & Optimization", desc: "We go live and help you improve performance with real data from real visitors."                 },
];

export default function ProcessSection({ setPage }: ProcessSectionProps) {
  return (
    <section style={{ padding: "108px 0", background: C.white }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 64px" }}>
            <span className="eyebrow">Our Process</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              A Clear Path From<br /><span className="grad-blue">Idea To Launch.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="cols-4" style={{ display: "grid", gap: 20, position: "relative" }}>
          <div className="connector-line" style={{ position: "absolute", top: 38, left: "12%", right: "12%", height: 1, background: C.cloud, zIndex: 0 }} />
          {PHASES.map((p, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="step-card" style={{ position: "relative", zIndex: 1, background: C.mist, borderRadius: 16, padding: 26, border: `1.5px solid ${C.cloud}` }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: `2px solid ${p.color}`, background: i === 0 ? p.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: i === 0 ? `0 0 28px ${p.color}50` : "none" }}>
                  <p.Icon size={21} color={i === 0 ? C.white : p.color} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(49,57,60,.35)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>Phase {p.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: C.charcoal, marginBottom: 9, letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(49,57,60,.55)", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <button className="btn-blue" style={{ fontSize: 16, padding: "17px 36px" }} onClick={() => setPage("contact")}>
              Request a Quote <ArrowRight size={18} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
