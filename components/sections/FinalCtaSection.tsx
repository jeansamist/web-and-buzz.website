import { MoveRight, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface FinalCtaSectionProps {
  setPage: (p: PageType) => void;
}

export default function FinalCtaSection({ setPage }: FinalCtaSectionProps) {
  return (
    <section style={{ padding: "108px 0", background: "linear-gradient(145deg,#0f1923 0%,#1a2535 50%,#0d1520 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle,rgba(33,118,255,.16) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-25%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,rgba(253,202,64,.07) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <span className="eyebrow-light">Take the Next Step</span>
            <h2 style={{ fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 900, lineHeight: 1.08, color: C.white, marginBottom: 18, letterSpacing: "-0.03em" }}>
              Ready To Turn Your Website<br /><span className="grad-blue">Into a Growth Engine?</span>
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.52)", lineHeight: 1.75, marginBottom: 14, fontWeight: 400 }}>
              We take on a limited number of projects to ensure quality and results.
            </p>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.52)", lineHeight: 1.75, marginBottom: 44, fontWeight: 400 }}>
              If you're ready to attract better leads and close more clients — this is your next step.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-yellow" style={{ fontSize: 17, padding: "19px 44px" }} onClick={() => setPage("contact")}>
                Request a Quote <MoveRight size={18} />
              </button>
              <button className="btn-ghost" style={{ fontSize: 15 }} onClick={() => setPage("contact")}>
                Get My Free Website Audit <ArrowUpRight size={16} />
              </button>
            </div>
            <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,.22)" }}>Limited spots available. No pressure. Just a real conversation about your growth.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
