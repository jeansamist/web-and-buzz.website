import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Clock, Briefcase, X as XIcon, Camera, Send } from "lucide-react";
import { C } from "@/lib/colors";
import { FormState } from "@/lib/types";

interface ContactPageProps {
  url: string;
  setUrl: (v: string) => void;
  form: FormState;
  setForm: (f: FormState) => void;
  formSent: boolean;
  setFormSent: (v: boolean) => void;
  handleFormSubmit: () => void;
}

const INFO_CARDS = [
  { Icon: Mail,   color: C.blue,   bg: "rgba(33,118,255,.08)",  label: "Email Us",     value: "hello@webandbuzz.com", sub: "We reply within 24 hours"  },
  { Icon: Phone,  color: C.orange, bg: "rgba(247,152,36,.08)",  label: "Call Us",      value: "+1 (800) 123-4567",    sub: "Mon–Fri, 9am–6pm EST"      },
  { Icon: MapPin, color: C.sky,    bg: "rgba(51,161,253,.08)",  label: "Based In",     value: "United States",        sub: "Serving clients globally"  },
  { Icon: Clock,  color: C.yellow, bg: "rgba(253,202,64,.1)",   label: "Response Time",value: "Under 24 Hours",       sub: "Usually much faster"        },
];

const STEPS = [
  { n: "01", text: "We review your message and website within 24 hours."      },
  { n: "02", text: "We schedule a free 30-min discovery call at your convenience." },
  { n: "03", text: "We present a clear plan — no fluff, no pressure."         },
  { n: "04", text: "If it's a fit, we get to work. Fast."                     },
];

const CONTACT_FAQS = [
  { q: "How quickly can you start?",        a: "We can typically begin within one week of your project being confirmed. We keep our intake process lean and fast." },
  { q: "Do you require a full deposit?",    a: "No. We work with flexible payment structures — typically split between kickoff and launch, with options for monthly arrangements." },
  { q: "What if I already have a website?", a: "No problem. We can audit what you have, keep what works, and rebuild what isn't converting — or start fresh if that's better." },
  { q: "How do I know if it's working?",    a: "We set up clear tracking and reporting so you can see leads captured, follow-ups sent, and conversion data — not just traffic numbers." },
];

export default function ContactPage({ url, setUrl, form, setForm, formSent, setFormSent, handleFormSubmit }: ContactPageProps) {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(145deg,#0f1923 0%,#1a2535 55%,#0d1520 100%)", padding: "80px 0 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,rgba(33,118,255,.18) 0%,transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .03, backgroundImage: `linear-gradient(${C.sky} 1px,transparent 1px),linear-gradient(90deg,${C.sky} 1px,transparent 1px)`, backgroundSize: "52px 52px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1, textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C.yellow, display: "block", marginBottom: 12 }}>Let's Talk</span>
          <h1 style={{ fontSize: "clamp(36px,5vw,62px)", fontWeight: 900, lineHeight: 1.1, color: C.white, letterSpacing: "-0.03em", marginBottom: 18 }}>
            Ready To Build Your<br /><span className="grad-blue">Client Acquisition System?</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.56)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto", fontWeight: 400 }}>
            Whether you're starting fresh or upgrading what you have — we'd love to hear about your business and show you exactly what's possible.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 28px" }}>
        <div className="cols-contact" style={{ display: "grid", gap: 60, alignItems: "flex-start" }}>

          {/* Left — info */}
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: C.charcoal, letterSpacing: "-0.02em", marginBottom: 8 }}>Get in Touch</h2>
            <p style={{ fontSize: 16, color: "rgba(49,57,60,.58)", lineHeight: 1.78, marginBottom: 40 }}>
              We respond to every inquiry within 24 hours. Fill in the form, or reach out directly through any of the channels below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
              {INFO_CARDS.map((item, i) => (
                <div key={i} className="contact-info-card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", background: C.mist, borderRadius: 14, border: `1.5px solid ${C.cloud}` }}>
                  <div style={{ width: 48, height: 48, background: item.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.Icon size={21} color={item.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(49,57,60,.4)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: C.charcoal, letterSpacing: "-0.01em" }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: "rgba(49,57,60,.45)", marginTop: 1 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(49,57,60,.4)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 14 }}>Follow Us</div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { Icon: Briefcase, color: C.blue,   bg: "rgba(33,118,255,.1)"  },
                  { Icon: XIcon,     color: C.sky,    bg: "rgba(51,161,253,.1)"  },
                  { Icon: Camera,    color: C.orange, bg: "rgba(247,152,36,.1)"  },
                ].map(({ Icon, color, bg }, i) => (
                  <button key={i} style={{ width: 44, height: 44, borderRadius: 12, background: bg, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "transform .2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "none")}>
                    <Icon size={20} color={color} />
                  </button>
                ))}
              </div>
            </div>

            {/* Next steps */}
            <div style={{ background: `linear-gradient(135deg,${C.blue}12 0%,${C.sky}18 100%)`, border: `1.5px solid ${C.blue}22`, borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: C.charcoal, marginBottom: 14, letterSpacing: "-0.01em" }}>What Happens After You Reach Out?</h3>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: i < 3 ? 14 : 0 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: 10, fontWeight: 900, color: C.white }}>{step.n}</span>
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(49,57,60,.65)", lineHeight: 1.65, paddingTop: 3 }}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: C.white, border: `1.5px solid ${C.cloud}`, borderRadius: 20, padding: 40, boxShadow: "0 8px 40px rgba(33,118,255,.07)" }}>
            {!formSent ? (
              <>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: C.charcoal, marginBottom: 6, letterSpacing: "-0.02em" }}>Send Us a Message</h3>
                <p style={{ fontSize: 14, color: "rgba(49,57,60,.5)", marginBottom: 28 }}>Tell us about your business and what you're looking to achieve.</p>

                <div className="cols-2" style={{ display: "grid", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Full Name <span style={{ color: C.orange }}>*</span></label>
                    <input className="form-input" type="text" placeholder="Jane Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Email Address <span style={{ color: C.orange }}>*</span></label>
                    <input className="form-input" type="email" placeholder="jane@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>

                <div className="cols-2" style={{ display: "grid", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Phone Number</label>
                    <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Service Interested In</label>
                    <select className="form-select" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service...</option>
                      <option value="website">Website & Landing Page Design</option>
                      <option value="brand">Brand Guide Design</option>
                      <option value="automation">AI Automations</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="social">Social Media Management</option>
                      <option value="full">Full Client Acquisition System</option>
                      <option value="audit">Free Website Audit</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Website URL</label>
                  <input className="form-input" type="url" placeholder="https://yourbusiness.com" value={url} onChange={e => setUrl(e.target.value)} />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: C.charcoal, display: "block", marginBottom: 6 }}>Your Message <span style={{ color: C.orange }}>*</span></label>
                  <textarea className="form-textarea" placeholder="Tell us about your business, your goals, and what's not working right now..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <button className="btn-blue" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "17px" }} onClick={handleFormSubmit}>
                  Send Message <Send size={17} />
                </button>
                <p style={{ fontSize: 12, color: "rgba(49,57,60,.38)", textAlign: "center", marginTop: 14 }}>We'll respond within 24 hours. Your information is never shared.</p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ width: 72, height: 72, background: "rgba(33,118,255,.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <CheckCircle2 size={36} color={C.blue} />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: C.charcoal, marginBottom: 10, letterSpacing: "-0.02em" }}>Message Sent!</h3>
                <p style={{ fontSize: 16, color: "rgba(49,57,60,.58)", lineHeight: 1.72, marginBottom: 24 }}>Thanks for reaching out. We'll review your message and get back to you within 24 hours.</p>
                <button className="btn-blue" style={{ margin: "0 auto", justifyContent: "center" }} onClick={() => { setFormSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}>
                  Send Another Message <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ strip */}
      <div style={{ background: C.mist, borderTop: `1px solid ${C.cloud}`, borderBottom: `1px solid ${C.cloud}`, padding: "72px 0" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C.blue, display: "block", marginBottom: 10 }}>Quick Answers</span>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: C.charcoal, letterSpacing: "-0.02em" }}>Common Questions</h2>
          </div>
          <div className="cols-2" style={{ display: "grid", gap: 20 }}>
            {CONTACT_FAQS.map((faq, i) => (
              <div key={i} style={{ background: C.white, border: `1.5px solid ${C.cloud}`, borderRadius: 14, padding: 22 }}>
                <h4 style={{ fontSize: 15, fontWeight: 800, color: C.charcoal, marginBottom: 8, letterSpacing: "-0.01em" }}>{faq.q}</h4>
                <p style={{ fontSize: 14, color: "rgba(49,57,60,.58)", lineHeight: 1.72 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
