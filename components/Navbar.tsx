import { ArrowRight, Zap } from "lucide-react";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface NavbarProps {
  scrolled: boolean;
  page: PageType;
  setPage: (p: PageType) => void;
  handleNav: (href: string) => void;
}

const NAV_LINKS: [string, string][] = [
  ["Services",    "#services"],
  ["How It Works","#how"],
  ["Portfolio",   "#portfolio"],
  ["Results",     "#results"],
  ["Pricing",     "#pricing"],
  ["FAQ",         "#faq"],
  ["Contact Us",  "#contact"],
];

export default function Navbar({ scrolled, page, setPage, handleNav }: NavbarProps) {
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all .3s",
        background: scrolled ? "rgba(255,255,255,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.cloud}` : "none",
        padding: scrolled ? "12px 0" : "18px 0",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 9, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <div style={{ width: 34, height: 34, background: C.blue, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px rgba(33,118,255,.4)` }}>
            <Zap size={18} color={C.white} fill={C.white} />
          </div>
          <span style={{ fontWeight: 900, fontSize: 19, color: scrolled ? C.charcoal : C.white, letterSpacing: "-0.03em" }}>
            Web<span style={{ color: C.yellow }}>&</span>Buzz
          </span>
        </button>

        {/* Links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map(([label, href]) => {
            const isActive = page === "contact" && label === "Contact Us";
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="nav-a"
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: isActive ? C.blue : scrolled ? C.charcoal : "rgba(255,255,255,.8)",
                  fontWeight: isActive ? 700 : 600,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.blue)}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? C.blue : scrolled ? C.charcoal : "rgba(255,255,255,.8)")}
              >
                {label}
              </button>
            );
          })}
          <button className="btn-blue" style={{ padding: "10px 22px", fontSize: 13 }} onClick={() => handleNav("#contact")}>
            Get Free Audit <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
