import { C } from "@/lib/colors";

const INDUSTRIES = ["Insurance","Real Estate","Consulting","Home Services","Finance","Healthcare","Legal"];

export default function ProofBar() {
  return (
    <section style={{ background: C.charcoal, padding: "15px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginRight: 22 }}>Trusted across</span>
        {INDUSTRIES.map((item, i) => (
          <span key={i} style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", padding: "0 14px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
