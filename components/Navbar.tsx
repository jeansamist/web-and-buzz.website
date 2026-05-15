'use client';
import { useState } from "react";
import { ArrowRight, Menu, X as CloseIcon } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const solidNav = scrolled || page === "contact";
  const navTextColor = solidNav ? C.charcoal : C.white;
  const navLinkColor = solidNav ? C.charcoal : "rgba(255,255,255,.8)";

  const close = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all .3s",
        background: solidNav ? "rgba(255,255,255,.97)" : "transparent",
        backdropFilter: solidNav ? "blur(16px)" : "none",
        borderBottom: solidNav ? `1px solid ${C.cloud}` : "none",
        padding: solidNav ? "12px 0" : "18px 0",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button
          aria-label="Go to Web and Buzz home"
          onClick={() => { setPage("home"); close(); }}
          style={{ display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 156,
              height: 27,
              backgroundColor: navTextColor,
              WebkitMaskImage: "url('/logo-wb-w2.webp')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url('/logo-wb-w2.webp')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              transition: "background-color .3s ease",
            }}
          />
        </button>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_LINKS.map(([label, href]) => {
            const isActive = page === "contact" && label === "Contact Us";
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="nav-a"
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: isActive ? C.blue : navLinkColor,
                  fontWeight: isActive ? 700 : 600,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.blue)}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? C.blue : navLinkColor)}
              >
                {label}
              </button>
            );
          })}
          <button className="btn-blue" style={{ padding: "10px 22px", fontSize: 13 }} onClick={() => handleNav("#contact")}>
            Get Free Audit <ArrowRight size={14} />
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: navTextColor }}
        >
          {menuOpen ? <CloseIcon size={24} color={navTextColor} /> : <Menu size={24} color={navTextColor} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: solidNav ? "rgba(255,255,255,.97)" : "rgba(15,25,35,.97)",
          backdropFilter: "blur(16px)",
          borderTop: `1px solid ${solidNav ? C.cloud : "rgba(255,255,255,.1)"}`,
          padding: "12px 28px 24px",
        }}>
          {NAV_LINKS.map(([label, href]) => {
            const isActive = page === "contact" && label === "Contact Us";
            return (
              <button
                key={label}
                onClick={() => { handleNav(href); close(); }}
                style={{
                  display: "block", width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "13px 0", textAlign: "left",
                  color: isActive ? C.blue : navLinkColor,
                  fontWeight: isActive ? 700 : 600, fontSize: 15,
                  borderBottom: `1px solid ${solidNav ? C.cloud : "rgba(255,255,255,.07)"}`,
                  fontFamily: "'Outfit',sans-serif", letterSpacing: "-.01em",
                }}
              >
                {label}
              </button>
            );
          })}
          <button className="btn-blue" style={{ marginTop: 18, width: "100%", justifyContent: "center", fontSize: 14 }} onClick={() => { handleNav("#contact"); close(); }}>
            Get Free Audit <ArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
}
