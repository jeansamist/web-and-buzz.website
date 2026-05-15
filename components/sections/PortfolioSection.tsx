import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { C } from "@/lib/colors";
import { PageType } from "@/lib/types";

interface PortfolioSectionProps {
  setPage: (p: PageType) => void;
}

const PROJECT_IMAGES = [
  { src: "/BRIGGS-&-NINS.jpg", alt: "Portfolio project preview" },
  { src: "/IMG_20251122_105825_868.jpg", alt: "Portfolio project preview" },
  { src: "/Majestic.jpg", alt: "Portfolio project preview" },
  { src: "/OperIA-V1.jpg", alt: "Portfolio project preview" },
  { src: "/SECOND-CHANCE.jpg", alt: "Portfolio project preview" },
];

export default function PortfolioSection({ setPage }: PortfolioSectionProps) {
  return (
    <section id="portfolio" style={{ padding: "108px 0", background: C.charcoal, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <div>
              <span className="eyebrow-light">Our Work</span>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", color: C.white }}>
                Real launches.<br /><span className="grad-blue">No placeholder case studies.</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="portfolio-marquee" aria-label="Portfolio project screenshots">
            <div className="portfolio-marquee__track">
              {[0, 1].map((copy) => (
                <div className="portfolio-marquee__group" key={copy} aria-hidden={copy === 1}>
                  {PROJECT_IMAGES.map((image) => (
                    <div className="portfolio-marquee__item" key={`${copy}-${image.src}`}>
                      <Image
                        src={image.src}
                        alt={copy === 0 ? image.alt : ""}
                        fill
                        sizes="(max-width: 767px) 78vw, (max-width: 1180px) 42vw, 500px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 52 }}>
            <button className="btn-yellow" style={{ fontSize: 15, padding: "16px 36px" }} onClick={() => setPage("contact")}>
              Start Your Project <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
