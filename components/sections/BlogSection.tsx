import { ArrowRight, ChevronRight, TrendingUp, Bot, Palette, Search, Target, Clock, Calendar, BookOpen } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface BlogSectionProps {
  setPage: (p: PageType) => void;
  handleNav: (href: string) => void;
}

interface SmallPostData {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  iconColor: string;
  iconBg: string;
  tags: string[];
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const SIDE_POSTS_LEFT: SmallPostData[] = [
  {
    Icon: Bot, iconColor: C.orange, iconBg: "rgba(247,152,36,.1)", tags: ["AI", "Automation"], tagColor: C.orange,
    title: "How AI Follow-Up Systems Are Closing Deals While You Sleep",
    excerpt: "The 5-minute follow-up window is the single most critical factor in lead conversion. Here's how automation makes it automatic.",
    date: "May 28, 2025", readTime: "5 min read",
  },
  {
    Icon: Palette, iconColor: C.yellow, iconBg: "rgba(253,202,64,.1)", tags: ["Brand", "Trust"], tagColor: C.yellow,
    title: "Your Brand Identity Is Either Building Trust or Destroying It — Here's How to Tell",
    excerpt: "First impressions form in 0.05 seconds. We walk through the brand signals that make clients choose you — or close the tab.",
    date: "May 14, 2025", readTime: "4 min read",
  },
];

const SIDE_POSTS_RIGHT: SmallPostData[] = [
  {
    Icon: Search, iconColor: C.sky, iconBg: "rgba(51,161,253,.1)", tags: ["SEO", "Visibility"], tagColor: C.sky,
    title: "The 3 Search Foundations Every Local Service Business Needs in 2025",
    excerpt: "Before you spend another dollar on ads, make sure your organic foundation is in place. Here's the checklist we use with every client.",
    date: "April 30, 2025", readTime: "6 min read",
  },
  {
    Icon: Target, iconColor: C.blue, iconBg: "rgba(33,118,255,.1)", tags: ["CRO", "Strategy"], tagColor: C.blue,
    title: "The 5-Second Test: Is Your Homepage Passing or Failing Your Visitors?",
    excerpt: "Visitors decide in seconds whether to stay or leave. We break down the five elements your homepage must communicate immediately.",
    date: "April 15, 2025", readTime: "4 min read",
  },
];

function SmallPost({ post, handleNav }: { post: SmallPostData; handleNav: (href: string) => void }) {
  return (
    <div
      style={{ background: C.white, border: `1.5px solid ${C.cloud}`, borderRadius: 16, padding: 22, display: "flex", gap: 16, alignItems: "flex-start", transition: "transform .28s ease,box-shadow .28s ease,border-color .28s ease", cursor: "pointer" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(49,57,60,.08)"; e.currentTarget.style.borderColor = post.tagColor + "44"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = C.cloud; }}
    >
      <div style={{ width: 48, height: 48, background: post.iconBg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <post.Icon size={22} color={post.iconColor} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
          {post.tags.map((tag, ti) => (
            <span key={ti} style={{ fontSize: 9, fontWeight: 700, color: post.tagColor, background: `${post.tagColor}15`, padding: "3px 8px", borderRadius: 20, letterSpacing: ".06em", textTransform: "uppercase" }}>{tag}</span>
          ))}
        </div>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: C.charcoal, lineHeight: 1.3, marginBottom: 8, letterSpacing: "-0.01em" }}>{post.title}</h3>
        <p style={{ fontSize: 13, color: "rgba(49,57,60,.55)", lineHeight: 1.65, marginBottom: 12 }}>{post.excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Calendar size={11} color="rgba(49,57,60,.4)" />
            <span style={{ fontSize: 11, color: "rgba(49,57,60,.4)", fontWeight: 500 }}>{post.date}</span>
            <span style={{ fontSize: 11, color: "rgba(49,57,60,.25)" }}>·</span>
            <Clock size={11} color="rgba(49,57,60,.4)" />
            <span style={{ fontSize: 11, color: "rgba(49,57,60,.4)", fontWeight: 500 }}>{post.readTime}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: C.blue, fontSize: 12, fontWeight: 700 }}>
            Read <ChevronRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection({ setPage, handleNav }: BlogSectionProps) {
  return (
    <section id="blog" style={{ padding: "108px 0", background: C.mist }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
            <div>
              <span className="eyebrow">From the Blog</span>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Insights on Growth,<br /><span className="grad-blue">Systems & Conversion.</span>
              </h2>
            </div>
            <button className="btn-outline-dark" style={{ flexShrink: 0 }} onClick={() => handleNav("#blog")}>
              View All Posts <ChevronRight size={15} />
            </button>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 20 }}>
          {/* Featured */}
          <FadeIn delay={0.05}>
            <div
              style={{ background: C.white, border: `1.5px solid ${C.cloud}`, borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", transition: "transform .28s ease,box-shadow .28s ease", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 18px 48px rgba(33,118,255,.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ height: 220, background: `linear-gradient(135deg,${C.blue}20 0%,${C.sky}30 100%)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 72, height: 72, background: `rgba(33,118,255,.15)`, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <TrendingUp size={32} color={C.blue} />
                </div>
                <div style={{ position: "absolute", top: 16, left: 16, background: C.blue, color: C.white, fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 20 }}>Featured</div>
                <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(255,255,255,.9)", borderRadius: 10, padding: "5px 12px", display: "flex", alignItems: "center", gap: 5 }}>
                  <Clock size={11} color={C.charcoal} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: C.charcoal }}>7 min read</span>
                </div>
              </div>
              <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                  {["Conversion", "Lead Generation"].map((tag, ti) => (
                    <span key={ti} style={{ fontSize: 10, fontWeight: 700, color: C.blue, background: "rgba(33,118,255,.08)", padding: "4px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 900, color: C.charcoal, lineHeight: 1.25, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  Why 97% of Small Business Websites Fail to Convert — And How to Fix Yours in 30 Days
                </h3>
                <p style={{ fontSize: 15, color: "rgba(49,57,60,.58)", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
                  Most business websites are built for aesthetics, not outcomes. We break down the five conversion gaps that cost service businesses thousands in missed revenue every month.
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 13, fontWeight: 900, color: C.white }}>W</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.charcoal }}>Web & Buzz Team</div>
                      <div style={{ fontSize: 11, color: "rgba(49,57,60,.4)" }}>June 12, 2025</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: C.blue, fontSize: 13, fontWeight: 700 }}>
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SIDE_POSTS_LEFT.map((post, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <SmallPost post={post} handleNav={handleNav} />
              </FadeIn>
            ))}
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SIDE_POSTS_RIGHT.map((post, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1}>
                <SmallPost post={post} handleNav={handleNav} />
              </FadeIn>
            ))}
            <FadeIn delay={0.35}>
              <div style={{ background: `linear-gradient(135deg,${C.blue}15 0%,${C.sky}20 100%)`, border: `1.5px solid ${C.blue}33`, borderRadius: 16, padding: 22 }}>
                <BookOpen size={24} color={C.blue} style={{ marginBottom: 10 }} />
                <h4 style={{ fontSize: 15, fontWeight: 800, color: C.charcoal, marginBottom: 6, letterSpacing: "-0.01em" }}>Get Growth Tips Weekly</h4>
                <p style={{ fontSize: 13, color: "rgba(49,57,60,.55)", lineHeight: 1.65, marginBottom: 14 }}>Conversion tactics, automation ideas, and SME growth insights — straight to your inbox.</p>
                <button className="btn-blue" style={{ width: "100%", justifyContent: "center", padding: "12px 16px", fontSize: 13 }} onClick={() => setPage("contact")}>
                  Subscribe Free <ArrowRight size={14} />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
