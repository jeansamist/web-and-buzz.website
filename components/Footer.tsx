import { ArrowRight, Zap, Briefcase, X as XIcon, Camera } from "lucide-react";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface FooterProps {
  setPage: (p: PageType) => void;
  handleNav: (href: string) => void;
}

export default function Footer({ setPage, handleNav }: FooterProps) {
  return (
    <footer style={{ background: "#0a0f15", padding: "64px 0 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <div className="cols-footer" style={{ display: "grid", gap: 48, marginBottom: 52 }}>

          {/* Brand */}
          <div>
            <button onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 9, background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, background: C.blue, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={18} color={C.white} fill={C.white} />
              </div>
              <span style={{ fontWeight: 900, fontSize: 19, color: C.white, letterSpacing: "-0.03em" }}>
                Web<span style={{ color: C.yellow }}>&</span>Buzz
              </span>
            </button>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.32)", lineHeight: 1.77, maxWidth: 240, marginBottom: 22 }}>
              We build client acquisition systems for service businesses ready to grow — not just websites that look nice.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              {[
                { Icon: Briefcase, color: C.blue,   bg: "rgba(33,118,255,.15)" },
                { Icon: XIcon,     color: C.sky,    bg: "rgba(51,161,253,.15)" },
                { Icon: Camera,    color: C.orange, bg: "rgba(247,152,36,.15)" },
              ].map(({ Icon, color, bg }, i) => (
                <button key={i} style={{ width: 38, height: 38, borderRadius: 10, background: bg, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "transform .2s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}>
                  <Icon size={17} color={color} />
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {[C.blue, C.yellow, C.orange, C.sky].map(col => (
                <div key={col} style={{ width: 16, height: 16, borderRadius: "50%", background: col }} />
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterCol
            title="Services"
            links={[
              ["Website Design",      "#services"],
              ["Automation System",   "#services"],
              ["Automated Follow-Up", "#services"],
              ["Search Visibility",   "#services"],
              ["Post-Launch Support", "#services"],
            ]}
            hoverColor={C.sky}
            handleNav={handleNav}
          />

          {/* Company */}
          <FooterCol
            title="Company"
            links={[
              ["About Us",  "#results"],
              ["Portfolio", "#portfolio"],
              ["Blog",      "#blog"],
              ["Careers",   "#contact"],
            ]}
            hoverColor={C.sky}
            handleNav={handleNav}
          />

          {/* Get Started */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: C.white, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 18 }}>Get Started</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 24 }}>
              {[["Free Website Audit","#contact"],["Request a Quote","#contact"],["Contact Us","#contact"],["FAQ","#faq"]].map(([label, href]) => (
                <button key={label} onClick={() => handleNav(href)}
                  style={{ fontSize: 14, color: "rgba(255,255,255,.32)", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, transition: "color .18s", fontFamily: "'Outfit',sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.yellow)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}>
                  {label}
                </button>
              ))}
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(33,118,255,.1)", border: "1px solid rgba(33,118,255,.25)", borderRadius: 12 }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginBottom: 10, lineHeight: 1.5 }}>Ready to grow your business?</p>
              <button className="btn-yellow" style={{ padding: "9px 18px", fontSize: 12, width: "100%", justifyContent: "center" }} onClick={() => setPage("contact")}>
                Start Today <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.18)" }}>© 2025 Web & Buzz. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {[["Privacy Policy","#contact"],["Terms of Service","#contact"],["Sitemap","#contact"]].map(([label, href]) => (
              <button key={label} onClick={() => handleNav(href)}
                style={{ fontSize: 13, color: "rgba(255,255,255,.18)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color .18s", fontFamily: "'Outfit',sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.45)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.18)")}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, hoverColor, handleNav }: { title: string; links: [string, string][]; hoverColor: string; handleNav: (href: string) => void }) {
  return (
    <div>
      <h4 style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 18 }}>{title}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {links.map(([label, href]) => (
          <button key={label} onClick={() => handleNav(href)}
            style={{ fontSize: 14, color: "rgba(255,255,255,.32)", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, transition: "color .18s", fontFamily: "'Outfit',sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
