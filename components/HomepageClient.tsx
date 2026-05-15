"use client";

import { useState, useEffect } from "react";
import { PageType, FormState } from "@/lib/types";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProofBar from "@/components/sections/ProofBar";
import ProblemSection from "@/components/sections/ProblemSection";
import ShiftSection from "@/components/sections/ShiftSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ResultsSection from "@/components/sections/ResultsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import ContactPage from "@/components/ContactPage";

export default function HomepageClient() {
  const [scrolled, setScrolled]   = useState(false);
  const [openFaq, setOpenFaq]     = useState<number | null>(null);
  const [url, setUrl]             = useState("");
  const [page, setPage]           = useState<PageType>("home");
  const [form, setForm]           = useState<FormState>({ name: "", email: "", phone: "", service: "", message: "" });
  const [formSent, setFormSent]   = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const handleNav = (href: string) => {
    if (href === "#contact") { setPage("contact"); return; }
    if (page !== "home") {
      setPage("home");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setFormSent(true);
  };

  return (
    <div style={{ fontFamily: "var(--font-outfit,'Outfit',system-ui,sans-serif)", backgroundColor: "#FFFFFF", color: "#31393C", overflowX: "hidden" }}>
      <Navbar scrolled={scrolled} page={page} setPage={setPage} handleNav={handleNav} />

      {page === "home" && (
        <>
          <HeroSection setPage={setPage} />
          <ProofBar />
          <ProblemSection setPage={setPage} />
          <ShiftSection setPage={setPage} />
          <ServicesSection setPage={setPage} handleNav={handleNav} />
          <HowItWorksSection setPage={setPage} />
          <ResultsSection setPage={setPage} handleNav={handleNav} />
          <PortfolioSection setPage={setPage} />
          <TestimonialsSection />
          <BlogSection setPage={setPage} handleNav={handleNav} />
          <LeadMagnetSection url={url} setUrl={setUrl} setPage={setPage} />
          <WhyUsSection setPage={setPage} />
          <ProcessSection setPage={setPage} />
          <PricingSection setPage={setPage} />
          <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} setPage={setPage} />
          <FinalCtaSection setPage={setPage} />
        </>
      )}

      {page === "contact" && (
        <ContactPage
          url={url}
          setUrl={setUrl}
          form={form}
          setForm={setForm}
          formSent={formSent}
          setFormSent={setFormSent}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <Footer setPage={setPage} handleNav={handleNav} />
    </div>
  );
}
