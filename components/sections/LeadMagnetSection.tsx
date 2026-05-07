import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface LeadMagnetSectionProps {
  url: string;
  setUrl: (v: string) => void;
  setPage: (p: PageType) => void;
}

export default function LeadMagnetSection({ url, setUrl, setPage }: LeadMagnetSectionProps) {
  return (
    <section style={{ padding: "108px 0", background: `linear-gradient(135deg,${C.blue} 0%,#1255cc 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <div className="cols-lead" style={{ display: "grid", gap: 72, alignItems: "center" }}>

          <FadeIn direction="left">
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", display: "block", marginBottom: 10 }}>Free Offer</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-0.03em", color: C.white }}>
              Not Sure If Your Website Is<br /><span style={{ color: C.yellow }}>Helping or Hurting Your Business?</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.78, marginBottom: 16, fontWeight: 400 }}>
              Your homepage is the first impression most clients get — and often the reason they choose to stay or leave.
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.78, fontWeight: 400 }}>
              We'll review your homepage and redesign it for free — so you can clearly see what's missing and how to improve it.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
              {["No cost, no obligation", "Actionable feedback", "Delivered in 48 hrs"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircle2 size={16} color={C.yellow} />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,.8)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.12}>
            <div style={{ background: C.white, borderRadius: 20, padding: 36, boxShadow: "0 24px 60px rgba(0,0,0,.2)" }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: C.charcoal, marginBottom: 6, letterSpacing: "-0.02em" }}>Get My Free Website Audit</h3>
              <p style={{ fontSize: 14, color: "rgba(49,57,60,.5)", marginBottom: 24 }}>Enter your website URL and we'll get started.</p>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Your Website URL</label>
                <input
                  className="url-input"
                  type="url"
                  placeholder="https://yourbusiness.com"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </div>
              <button className="btn-blue" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px" }} onClick={() => setPage("contact")}>
                Audit My Website Free <ArrowRight size={18} />
              </button>
              <p style={{ fontSize: 12, color: "rgba(49,57,60,.38)", textAlign: "center", marginTop: 14 }}>We review your homepage within 48 hours. No spam, ever.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
