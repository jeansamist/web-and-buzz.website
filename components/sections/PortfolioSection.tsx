import { ArrowRight, ExternalLink, TrendingUp, Monitor, Smartphone } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface PortfolioSectionProps {
  activeTab: string;
  setActiveTab: (t: string) => void;
  setPage: (p: PageType) => void;
  handleNav: (href: string) => void;
}

const TABS = ["All", "Websites", "Automations", "Brand"];

const PROJECTS = [
  {
    tag: "Website + Automation", tagColor: C.blue,   tagBg: "rgba(33,118,255,.15)",
    title: "Apex Roofing Solutions",  category: "Home Services",
    metric: "+15%", metricLabel: "Quote Requests",       metricColor: C.blue,
    desc: "Full acquisition system with instant lead capture and 24/7 AI follow-up. Replaced a brochure site that was generating zero leads.",
    DeviceIcon: Monitor, palette: [C.blue, "#1a3a6e", "#f4f7ff"],
    tags: ["Landing Page","Lead Capture","AI Follow-Up"],
  },
  {
    tag: "Website + Brand",      tagColor: C.orange, tagBg: "rgba(247,152,36,.15)",
    title: "Luminary Wellness Clinics",category: "Healthcare",
    metric: "2×",  metricLabel: "Inbound Inquiries",     metricColor: C.orange,
    desc: "Brand identity overhaul paired with a conversion-focused website. New patient inquiries doubled within six weeks of launch.",
    DeviceIcon: Smartphone, palette: [C.orange, "#7c2d12", "#fff8f0"],
    tags: ["Brand Guide","Website","Booking Flow"],
  },
  {
    tag: "Full System Build",    tagColor: C.yellow, tagBg: "rgba(253,202,64,.15)",
    title: "Bridgepoint Financial",   category: "Finance & Consulting",
    metric: "+54%",metricLabel: "Lower CPA",             metricColor: C.yellow,
    desc: "End-to-end client acquisition system — from paid traffic to automated qualification and calendar booking. CPA dropped 54% in 60 days.",
    DeviceIcon: Monitor, palette: [C.yellow, C.charcoal, "#fffbeb"],
    tags: ["Automation","Lead Qualify","CRO"],
  },
  {
    tag: "Landing Page + Automation",tagColor: C.sky,   tagBg: "rgba(51,161,253,.15)",
    title: "Nexus Real Estate Group", category: "Real Estate",
    metric: "+25%",metricLabel: "Showing Requests",      metricColor: C.sky,
    desc: "High-converting property showcase with smart lead capture. Automated SMS and email sequences nurture prospects to booked showings.",
    DeviceIcon: Monitor, palette: [C.sky, "#0c2d4a", "#f0f8ff"],
    tags: ["Landing Page","SMS Automation","CRO"],
  },
  {
    tag: "Brand + Website",      tagColor: C.orange, tagBg: "rgba(247,152,36,.15)",
    title: "Clearview Legal Partners", category: "Legal Services",
    metric: "3.8×",metricLabel: "Consultation Bookings", metricColor: C.orange,
    desc: "Transformed a dated law firm site into a trust-building client acquisition system with embedded scheduling and automated intake.",
    DeviceIcon: Smartphone, palette: [C.orange, "#1c1408", "#fdf8f0"],
    tags: ["Brand Identity","Website","Intake Automation"],
  },
  {
    tag: "AI Automation Build",  tagColor: C.blue,   tagBg: "rgba(33,118,255,.15)",
    title: "Summit Growth Consulting", category: "B2B Consulting",
    metric: "2×",  metricLabel: "Qualified Leads / Month",metricColor: C.blue,
    desc: "AI-powered lead qualification and follow-up system layered on top of existing website. Results in 30 days without a full redesign.",
    DeviceIcon: Monitor, palette: [C.blue, C.sky, "#eef4ff"],
    tags: ["AI Automation","Lead Scoring","Email Sequences"],
  },
];

export default function PortfolioSection({ activeTab, setActiveTab, setPage, handleNav }: PortfolioSectionProps) {
  return (
    <section id="portfolio" style={{ padding: "108px 0", background: C.charcoal, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,rgba(33,118,255,.12) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,rgba(253,202,64,.06) 0%,transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
            <div>
              <span className="eyebrow-light">Our Work</span>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: C.white }}>
                Systems We've Built.<br /><span className="grad-blue">Results They're Seeing.</span>
              </h2>
            </div>
            <button className="btn-ghost" style={{ flexShrink: 0 }} onClick={() => handleNav("#portfolio")}>
              View Full Portfolio <ExternalLink size={15} />
            </button>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.05}>
          <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ padding: "8px 20px", borderRadius: 20, border: `1.5px solid ${activeTab === tab ? C.blue : "rgba(255,255,255,.15)"}`, background: activeTab === tab ? C.blue : "transparent", color: activeTab === tab ? C.white : "rgba(255,255,255,.55)", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s", fontFamily: "'Outfit',sans-serif" }}>
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, overflow: "hidden", transition: "transform .3s ease,box-shadow .3s ease,border-color .3s ease", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 52px rgba(0,0,0,.3)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,.08)"; }}
              >
                {/* Preview */}
                <div style={{ height: 180, background: `linear-gradient(135deg, ${p.palette[0]}22 0%, ${p.palette[1]}33 100%)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <div style={{ width: 120, height: 80, background: "rgba(255,255,255,.07)", borderRadius: 8, border: "1px solid rgba(255,255,255,.12)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div style={{ height: 12, background: "rgba(255,255,255,.08)", display: "flex", alignItems: "center", gap: 4, padding: "0 8px" }}>
                      {[C.orange, C.yellow, C.blue].map((col, ci) => <div key={ci} style={{ width: 5, height: 5, borderRadius: "50%", background: col, opacity: .6 }} />)}
                    </div>
                    <div style={{ flex: 1, padding: 6, display: "flex", flexDirection: "column", gap: 4 }}>
                      <div style={{ height: 6, background: p.palette[0], borderRadius: 2, width: "70%", opacity: .5 }} />
                      <div style={{ height: 4, background: "rgba(255,255,255,.12)", borderRadius: 2, width: "90%" }} />
                      <div style={{ height: 4, background: "rgba(255,255,255,.12)", borderRadius: 2, width: "60%" }} />
                      <div style={{ height: 16, background: p.palette[0], borderRadius: 4, width: "45%", marginTop: 4, opacity: .7 }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,.5)", backdropFilter: "blur(8px)", border: `1px solid ${p.metricColor}33`, borderRadius: 10, padding: "6px 12px", display: "flex", alignItems: "center", gap: 6 }}>
                    <TrendingUp size={12} color={p.metricColor} />
                    <span style={{ fontSize: 13, fontWeight: 800, color: p.metricColor }}>{p.metric}</span>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,.45)", fontWeight: 500 }}>{p.metricLabel}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(0,0,0,.4)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "5px 10px", display: "flex", alignItems: "center", gap: 5 }}>
                    <p.DeviceIcon size={12} color="rgba(255,255,255,.5)" />
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,.45)", fontWeight: 600 }}>{p.DeviceIcon === Monitor ? "Web" : "Mobile"}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 22 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", background: p.tagBg, color: p.tagColor, padding: "4px 10px", borderRadius: 20 }}>{p.tag}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,.35)", fontWeight: 500 }}>{p.category}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: C.white, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.48)", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t, ti) => (
                      <span key={ti} style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.45)", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", padding: "3px 9px", borderRadius: 12 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.45}>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 52, flexWrap: "wrap" }}>
            <button className="btn-yellow" style={{ fontSize: 15, padding: "16px 36px" }} onClick={() => setPage("contact")}>
              Start Your Project <ArrowRight size={16} />
            </button>
            <button className="btn-ghost" onClick={() => handleNav("#portfolio")}>
              View All Projects <ExternalLink size={15} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
