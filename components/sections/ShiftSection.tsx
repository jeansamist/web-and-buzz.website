import { ArrowRight, Globe, Zap, BadgeCheck, Bot, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface ShiftSectionProps {
  setPage: (p: PageType) => void;
}

const BENEFITS = [
  { Icon: Globe,      color: C.sky,    text: "Instead of just a website — you have a system that works for you."         },
  { Icon: Zap,        color: C.blue,   text: "It engages visitors instantly and guides them toward action."               },
  { Icon: BadgeCheck, color: C.yellow, text: "It qualifies serious prospects so you focus only on serious buyers."        },
  { Icon: Bot,        color: C.orange, text: "It keeps conversations going even when you are offline."                    },
];

const AFTER_ROWS = [
  { label: "Monthly Visitors",    val: "1,240",   note: "↑ same traffic",         color: C.white  },
  { label: "Leads Captured",      val: "186",     note: "↑ automated capture",    color: C.sky    },
  { label: "Response Time",       val: "< 5 min", note: "↑ AI follow-up",         color: C.blue   },
  { label: "Conversion Rate",     val: "3.8%",    note: "↑ optimized experience", color: C.yellow },
  { label: "New Clients / Month", val: "+18",     note: "↑ from same traffic",    color: C.orange },
];

export default function ShiftSection({ setPage }: ShiftSectionProps) {
  return (
    <section style={{ padding: "108px 0", background: C.charcoal, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,rgba(33,118,255,.14) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          <FadeIn direction="left">
            <span className="eyebrow-light">The Shift</span>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em", color: C.white }}>
              What If Every Visitor<br /><span className="grad-blue">Became A Real Opportunity?</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.58)", lineHeight: 1.8, marginBottom: 32, fontWeight: 400 }}>
              Imagine a system where every visitor is guided, captured, and followed up with — automatically.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {BENEFITS.map(({ Icon, color, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 16px", background: "rgba(255,255,255,.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,.07)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} color={color} />
                  </div>
                  <span style={{ fontSize: 15, color: "rgba(255,255,255,.75)", fontWeight: 500, lineHeight: 1.55, paddingTop: 6 }}>{text}</span>
                </div>
              ))}
            </div>
            <button className="btn-yellow" style={{ fontSize: 15 }} onClick={() => setPage("contact")}>
              Get My Free Website Audit <ArrowRight size={16} />
            </button>
          </FadeIn>

          <FadeIn direction="right" delay={0.12}>
            <div style={{ background: "rgba(255,255,255,.05)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.38)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 18 }}>With a Client Acquisition System</div>
              {AFTER_ROWS.map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,.07)" : "none" }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,.52)", fontWeight: 500 }}>{row.label}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: row.color }}>{row.val}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,.3)", display: "block" }}>{row.note}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 20, background: "rgba(33,118,255,.15)", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <TrendingUp size={16} color={C.sky} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: C.white, fontWeight: 500, lineHeight: 1.6 }}>This is what changes when your website becomes a system.</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
