import { ArrowRight, ArrowUpRight, Globe, Bot, Mail, Search, Settings, HeartHandshake } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface ServicesSectionProps {
  setPage: (p: PageType) => void;
  handleNav: (href: string) => void;
}

const SERVICES = [
  { Icon: Globe,         color: C.blue,   bg: "rgba(33,118,255,.1)",  title: "Conversion-Focused Website Design", desc: "Built to guide visitors toward action and trust — every element has a purpose.",                      tag: "Foundation" },
  { Icon: Bot,           color: C.orange, bg: "rgba(247,152,36,.1)",  title: "Smart Automation System",           desc: "Captures and qualifies leads instantly — so you only talk to serious prospects.",                  tag: "The Engine" },
  { Icon: Mail,          color: C.sky,    bg: "rgba(51,161,253,.1)",  title: "Automated Follow-Up",               desc: "Ensures every lead gets a response at the right time — even while you sleep.",                     tag: "The Closer" },
  { Icon: Search,        color: C.yellow, bg: "rgba(253,202,64,.12)", title: "Search Visibility Foundation",      desc: "Helps the right people find your business organically and through paid channels.",                  tag: "Traffic"    },
  { Icon: Settings,      color: C.blue,   bg: "rgba(33,118,255,.1)",  title: "Ongoing Optimization",              desc: "We don't just launch and leave. Continuous improvement is built into the process.",                  tag: "Growth"     },
  { Icon: HeartHandshake,color: C.orange, bg: "rgba(247,152,36,.1)",  title: "3-Month Support Included",          desc: "Real support after launch — so you're never left managing a new system alone.",                     tag: "Support"    },
];

export default function ServicesSection({ setPage, handleNav }: ServicesSectionProps) {
  return (
    <section id="services" style={{ padding: "108px 0", background: C.mist }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
            <span className="eyebrow">What We Build</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 14, letterSpacing: "-0.03em" }}>
              We Build Complete<br /><span className="grad-warm">Client Acquisition Systems.</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(49,57,60,.58)", lineHeight: 1.75, fontWeight: 400 }}>
              We don't just design websites. We build systems designed to turn traffic into real business results.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="hover-lift" style={{ background: C.white, borderRadius: 16, padding: 28, border: `1.5px solid ${C.cloud}`, cursor: "default" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 46, height: 46, background: s.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <s.Icon size={21} color={s.color} />
                  </div>
                  <span className="tag" style={{ background: s.bg, color: s.color }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: C.charcoal, marginBottom: 8, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(49,57,60,.58)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 48, flexWrap: "wrap" }}>
            <button className="btn-blue" style={{ fontSize: 16, padding: "17px 36px" }} onClick={() => setPage("contact")}>
              Get My Free Website Audit <ArrowRight size={18} />
            </button>
            <button className="btn-outline-dark" style={{ fontSize: 15 }} onClick={() => setPage("contact")}>
              Request a Quote <ArrowUpRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
