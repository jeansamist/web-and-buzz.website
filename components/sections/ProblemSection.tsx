import { ArrowRight, X, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface ProblemSectionProps {
  setPage: (p: PageType) => void;
}

export default function ProblemSection({ setPage }: ProblemSectionProps) {
  return (
    <section style={{ padding: "108px 0", background: C.white }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <div className="cols-2" style={{ display: "grid", gap: 80, alignItems: "center" }}>

          <FadeIn direction="left">
            <span className="eyebrow">The Problem</span>
            <h2 style={{ fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em" }}>
              Your Website Might Be<br /><span className="grad-blue">Costing You Clients.</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(49,57,60,.65)", lineHeight: 1.8, marginBottom: 28, fontWeight: 400 }}>
              You invested in a website — but results aren't where they should be.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                "Visitors come but don't take action",
                "Leads drop off without follow-up",
                "You rely on manual replies and lose time",
                "Opportunities slip through the cracks every day",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(247,152,36,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <X size={13} color={C.orange} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 16, color: C.charcoal, fontWeight: 500, lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 16, color: "rgba(49,57,60,.55)", lineHeight: 1.75, marginBottom: 28, fontStyle: "italic", borderLeft: `3px solid ${C.blue}`, paddingLeft: 16 }}>
              Most websites are not built to convert or support real business growth.
            </p>
            <button className="btn-blue" onClick={() => setPage("contact")}>
              Get My Free Website Audit <ArrowRight size={16} />
            </button>
          </FadeIn>

          <FadeIn direction="right" delay={0.12}>
            <div style={{ background: C.mist, border: `1.5px solid ${C.cloud}`, borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(49,57,60,.4)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 18 }}>Typical Business Website</div>
              {[
                { label: "Monthly Visitors",    val: "1,240",  note: "↓ mostly bouncing"           },
                { label: "Leads Captured",      val: "12",     note: "↓ no follow-up system"       },
                { label: "Response Time",       val: "18 hrs", note: "↓ leads go cold"             },
                { label: "Conversion Rate",     val: "0.9%",   note: "↓ industry avg. 2–5%"        },
                { label: "Missed Opportunities",val: "~1,228", note: "↓ every single month"        },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: i < 4 ? `1px solid ${C.cloud}` : "none" }}>
                  <span style={{ fontSize: 14, color: "rgba(49,57,60,.6)", fontWeight: 500 }}>{row.label}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: i === 4 ? C.orange : C.charcoal }}>{row.val}</span>
                    <span style={{ fontSize: 11, color: "rgba(49,57,60,.38)", display: "block" }}>{row.note}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 20, background: "rgba(247,152,36,.1)", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Target size={16} color={C.orange} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: C.charcoal, fontWeight: 500, lineHeight: 1.6 }}>This is the gap between a website and a client acquisition system.</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
