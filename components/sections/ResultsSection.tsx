import { ArrowRight, ExternalLink, Shield, Globe, Lightbulb, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface ResultsSectionProps {
  setPage: (p: PageType) => void;
  handleNav: (href: string) => void;
}

const CASES = [
  { Icon: Shield,    color: C.blue,   bg: "rgba(33,118,255,.08)", metric: "+15%", period: "First Month",  title: "Insurance Agency",      result: "Increased quote requests by 15 percent within the first month after launch.",                       stars: 5 },
  { Icon: Globe,     color: C.orange, bg: "rgba(247,152,36,.08)", metric: "+25%", period: "After Launch", title: "Real Estate Business",  result: "Boosted showing requests by 25 percent after launching their new acquisition system.",               stars: 5 },
  { Icon: Lightbulb, color: C.yellow, bg: "rgba(253,202,64,.1)",  metric: "2x",   period: "Six Weeks",    title: "Independent Consultant",result: "Doubled inbound client inquiries in just six weeks with automated follow-up in place.",               stars: 5 },
];

export default function ResultsSection({ setPage, handleNav }: ResultsSectionProps) {
  return (
    <section id="results" style={{ padding: "108px 0", background: C.white }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 64px" }}>
            <span className="eyebrow">Real Results</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Real Businesses.<br /><span className="grad-blue">Real Growth.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="cols-3" style={{ display: "grid", gap: 20 }}>
          {CASES.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: C.white, borderRadius: 16, padding: 30, border: `1.5px solid ${C.cloud}`, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 46, height: 46, background: c.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <c.Icon size={21} color={c.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: C.charcoal }}>{c.title}</div>
                    <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
                      {Array.from({ length: c.stars }).map((_, si) => <Star key={si} size={11} color={C.yellow} fill={C.yellow} />)}
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontSize: 44, fontWeight: 900, color: c.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{c.metric}</span>
                  <span style={{ fontSize: 13, color: "rgba(49,57,60,.45)", fontWeight: 500, display: "block", marginTop: 2 }}>within {c.period}</span>
                </div>
                <p style={{ fontSize: 15, color: "rgba(49,57,60,.65)", lineHeight: 1.72 }}>{c.result}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 48, flexWrap: "wrap" }}>
            <button className="btn-blue" style={{ fontSize: 16, padding: "17px 36px" }} onClick={() => setPage("contact")}>
              Request a Quote <ArrowRight size={18} />
            </button>
            <button className="btn-outline-dark" onClick={() => handleNav("#portfolio")}>
              View Portfolio <ExternalLink size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
