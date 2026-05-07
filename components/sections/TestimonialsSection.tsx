import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";

const TESTIMONIALS = [
  { initial: "P", name: "Priya K.",   role: "Founder — Luminary Wellness Clinics", accentColor: C.orange, metric: "2×",    metricLabel: "Inbound Inquiries",     stars: 5, quote: "The AI follow-up system alone paid for our entire engagement in the first month. We stopped losing leads to slow response time. I wish we had done this sooner." },
  { initial: "D", name: "Daniel R.",  role: "CEO — Bridgepoint Financial",          accentColor: C.sky,    metric: "−54%",  metricLabel: "Cost Per Acquisition",   stars: 5, quote: "Finally an agency that speaks ROI instead of impressions. Our cost-per-acquisition dropped 54% in 60 days. They know what they're doing."                         },
  { initial: "S", name: "Sarah M.",   role: "Principal — Clearview Legal Partners", accentColor: C.yellow, metric: "3.8×",  metricLabel: "Consultation Bookings",  stars: 5, quote: "From the strategy session to launch, the process was seamless. Our consultation bookings nearly quadrupled and the intake automation saves us hours every week." },
  { initial: "J", name: "James O.",   role: "Director — Nexus Real Estate Group",   accentColor: C.blue,   metric: "+25%",  metricLabel: "Showing Requests",       stars: 5, quote: "We had leads falling through the cracks every single day. Their system fixed that overnight. Showing requests are up 25% and we haven't increased ad spend at all." },
  { initial: "A", name: "Amanda C.",  role: "Owner — Peak Home Services",           accentColor: C.orange, metric: "2 hrs", metricLabel: "Saved Daily",            stars: 5, quote: "I was skeptical about automations but the results don't lie. Our team used to spend two hours a day on follow-up. Now that's handled and we focus on closing."   },
  { initial: "R", name: "Ryan T.",    role: "Founder — Summit Growth Consulting",   accentColor: C.sky,    metric: "2×",    metricLabel: "Qualified Leads",        stars: 5, quote: "Doubled our qualified leads in 30 days without touching our ad spend. The system they built just works. Professional, fast, and genuinely invested in our results." },
];

const STATS = [
  { val: "5.0",   label: "Average Rating",   sub: "across all clients"   },
  { val: "100%",  label: "Would Recommend",  sub: "us to a colleague"    },
  { val: "92%",   label: "Client Retention", sub: "after first project"  },
  { val: "48hrs", label: "Avg. Response",    sub: "to client requests"   },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "108px 0", background: C.white, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,rgba(33,118,255,.05) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 64px" }}>
            <span className="eyebrow">Client Testimonials</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              What Our Clients<br /><span className="grad-blue">Say About Working With Us.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Featured */}
        <FadeIn delay={0.05}>
          <div style={{ background: `linear-gradient(135deg,${C.blue} 0%,#1255cc 100%)`, borderRadius: 20, padding: "44px 48px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div className="cols-feat-tst" style={{ display: "grid", gap: 40, alignItems: "center", position: "relative", zIndex: 1 }}>
              <div>
                <Quote size={36} color="rgba(255,255,255,.25)" style={{ marginBottom: 16 }} />
                <p style={{ fontSize: "clamp(18px,2.2vw,24px)", color: C.white, lineHeight: 1.65, fontWeight: 500, fontStyle: "italic", marginBottom: 28, letterSpacing: "-0.01em" }}>
                  "Web & Buzz didn't just build us a website — they built us a machine. Within 30 days we had more qualified leads coming in than we'd seen all of last quarter. The automated follow-up alone changed our business."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,.15)", border: "2px solid rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 18, fontWeight: 900, color: C.white }}>M</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: C.white }}>Marcus T.</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}>Owner — Apex Roofing Solutions</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 3 }}>
                    {Array.from({ length: 5 }).map((_, si) => <Star key={si} size={16} color={C.yellow} fill={C.yellow} />)}
                  </div>
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,.08)", borderRadius: 16, padding: 24, minWidth: 200, textAlign: "center", flexShrink: 0 }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: C.yellow, letterSpacing: "-0.04em", lineHeight: 1 }}>+15%</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.65)", marginTop: 6, fontWeight: 500 }}>Quote Requests</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.38)", marginTop: 3 }}>in the first month</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="cols-3" style={{ display: "grid", gap: 18, marginBottom: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                style={{ background: C.white, border: `1.5px solid ${C.cloud}`, borderRadius: 16, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", transition: "transform .28s ease,box-shadow .28s ease,border-color .28s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(49,57,60,.08)"; e.currentTarget.style.borderColor = t.accentColor + "55"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = C.cloud; }}
              >
                <div>
                  <div style={{ width: 30, height: 3, background: t.accentColor, borderRadius: 2, marginBottom: 16 }} />
                  <Quote size={20} color={t.accentColor} style={{ opacity: .3, marginBottom: 10 }} />
                  <p style={{ fontSize: 14, color: C.charcoal, lineHeight: 1.78, marginBottom: 20, fontStyle: "italic" }}>"{t.quote}"</p>
                </div>
                <div>
                  <div style={{ height: 1, background: C.cloud, marginBottom: 16 }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 38, height: 38, background: t.accentColor, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: 15, fontWeight: 900, color: C.white }}>{t.initial}</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 13, color: C.charcoal }}>{t.name}</div>
                        <div style={{ fontSize: 11, color: "rgba(49,57,60,.45)", lineHeight: 1.4 }}>{t.role}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 18, fontWeight: 900, color: t.accentColor, letterSpacing: "-0.02em" }}>{t.metric}</div>
                      <div style={{ fontSize: 10, color: "rgba(49,57,60,.4)", fontWeight: 500 }}>{t.metricLabel}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 2, marginTop: 10 }}>
                    {Array.from({ length: t.stars }).map((_, si) => <Star key={si} size={11} color={C.yellow} fill={C.yellow} />)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rating strip */}
        <FadeIn delay={0.4}>
          <div style={{ background: C.mist, border: `1.5px solid ${C.cloud}`, borderRadius: 14, padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "0 20px", borderLeft: i > 0 ? `1px solid ${C.cloud}` : "none" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: C.blue, letterSpacing: "-0.03em" }}>{s.val}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, marginTop: 2 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "rgba(49,57,60,.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
