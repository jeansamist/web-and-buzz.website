import { ArrowRight, ArrowUpRight, BarChart3, Zap, TrendingUp, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface HeroSectionProps {
  setPage: (p: PageType) => void;
}

export default function HeroSection({ setPage }: HeroSectionProps) {
  return (
    <section className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 90 }}>
      <div className="hero-grid" />
      <div className="hero-blob1" />
      <div className="hero-blob2" />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 28px", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="cols-hero" style={{ display: "grid", gap: 64, alignItems: "center" }}>

          {/* Left */}
          <div>
            <h1 style={{ fontSize: "clamp(38px,5vw,68px)", color: C.white, lineHeight: 1.08, marginBottom: 22, fontWeight: 900, letterSpacing: "-0.03em" }}>
              Turn Your Website Into a<br />
              <span className="grad-blue">Client Acquisition System</span><br />
              That Works Every Day.
            </h1>
            <p style={{ fontSize: "clamp(16px,1.8vw,19px)", color: "rgba(255,255,255,.6)", lineHeight: 1.75, maxWidth: 520, marginBottom: 38, fontWeight: 400 }}>
              Most business websites look good but fail to convert. We build conversion-focused websites with built-in automation that captures, qualifies, and follows up with every lead — so you never miss an opportunity again.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn-yellow" style={{ fontSize: 16, padding: "17px 36px" }} onClick={() => setPage("contact")}>
                Get My Free Website Audit <ArrowRight size={18} />
              </button>
              <button className="btn-ghost" style={{ fontSize: 15 }} onClick={() => setPage("contact")}>
                Request a Quote <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Stat strip */}
            <div style={{ display: "flex", gap: 36, marginTop: 52, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,.08)", flexWrap: "wrap" }}>
              {[{ n: "100+", l: "Service Businesses" }, { n: "3.2x", l: "Avg. Lead Increase" }, { n: "24/7", l: "Automated Follow-Up" }].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: C.white, letterSpacing: "-0.04em" }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.38)", marginTop: 2, fontWeight: 400 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard card */}
          <div className="float">
            <div style={{ background: "rgba(255,255,255,.05)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: 28, position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ width: 40, height: 40, background: "rgba(33,118,255,.22)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BarChart3 size={20} color={C.sky} />
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.38)", textTransform: "uppercase", letterSpacing: ".07em" }}>Client Acquisition System</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: C.white }}>Live Pipeline View</div>
                </div>
              </div>
              {[
                { label: "Website Visitors",   val: "4,820", pct: 100, color: C.sky    },
                { label: "Leads Captured",     val: "1,206", pct: 62,  color: C.blue   },
                { label: "Prospects Qualified",val: "389",   pct: 38,  color: C.orange },
                { label: "Closed Clients",     val: "94",    pct: 22,  color: C.yellow },
              ].map((row, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{row.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.white }}>{row.val}</span>
                  </div>
                  <div style={{ height: 5, background: "rgba(255,255,255,.07)", borderRadius: 3 }}>
                    <div style={{ height: "100%", width: `${row.pct}%`, background: row.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
              <div style={{ position: "absolute", bottom: -18, left: -18, background: C.yellow, borderRadius: 12, padding: "10px 15px", display: "flex", alignItems: "center", gap: 7, boxShadow: `0 8px 22px rgba(253,202,64,.42)` }}>
                <TrendingUp size={15} color={C.charcoal} />
                <span style={{ fontSize: 13, fontWeight: 800, color: C.charcoal }}>+284 New Leads This Month</span>
              </div>
              <div style={{ position: "absolute", top: -14, right: -14, background: C.charcoal, border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "9px 14px", display: "flex", alignItems: "center", gap: 7 }}>
                <Zap size={13} color={C.sky} fill={C.sky} />
                <span style={{ fontSize: 12, fontWeight: 600, color: C.white }}>AI Follow-Up Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)" }}>
        <ChevronDown size={22} color="rgba(255,255,255,.2)" />
      </div>
    </section>
  );
}
