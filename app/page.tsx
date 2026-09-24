import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Layers3,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { CTASection } from "@/components/sections/CTASection";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SolutionLab } from "@/components/sections/SolutionLab";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities, whyCharitr } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Intelligent Digital Solutions",
  "Custom software, premium digital design, practical AI systems and technology consulting for ambitious organisations.",
  "/",
);

const whyIcons = [ShieldCheck, Layers3, Route, CheckCircle2, BrainCircuit, ChartNoAxesCombined];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-media">
          <Image src="/site-assets/charitr-team-hero.webp" alt="Technology leaders collaborating around a digital product architecture" fill priority unoptimized sizes="100vw" />
        </div>
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />
        <div className="container hero-content">
          <p className="eyebrow">Software · Design · AI · Consulting</p>
          <h1>Empowering the future through <span className="gradient-text">intelligent digital solutions.</span></h1>
          <p className="hero-lede">We architect custom software, premium digital design and practical AI systems that accelerate business growth.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Start Your Project <ArrowRight size={18} /></Link>
            <Link className="button button--secondary" href="/solutions">Explore Solutions <ArrowRight size={18} /></Link>
          </div>
          <div className="hero-proof">
            <span><i />Strategy through delivery</span>
            <span><i />Teams across India</span>
            <span><i />Built for adoption</span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionHeader eyebrow="Core capabilities" title="One partner for every layer of digital progress." description="Engineering, design, AI and transformation expertise brought together around measurable business outcomes." />
          <div className="capability-grid">
            {capabilities.map((capability, index) => <CapabilityCard key={capability.slug} capability={capability} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container process-layout">
          <div className="process-sticky">
            <SectionHeader eyebrow="How Charitr works" title="From problem to practical progress." description="A connected process from understanding your context through implementation, adoption and continuous improvement." />
            <div className="process-image">
              <Image src="/site-assets/charitr-team-process.webp" alt="Technology team reviewing a product workflow together" fill unoptimized sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Solutions lab" title="What Charitr helps create." description="Explore how focused technology layers turn a complex operational need into a practical, adoptable system." />
          <SolutionLab />
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container section-heading-row">
          <SectionHeader eyebrow="Selected work" title="Digital solutions built around real user needs." />
          <Link className="button button--secondary" href="/work">View all work <ArrowRight size={17} /></Link>
        </div>
        <div className="container"><WorkShowcase /></div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Why Charitr" title="Technology work grounded in practical needs." description="We connect strategy, design and engineering so decisions become useful, maintainable solutions." />
          <div className="why-grid">
            {whyCharitr.map((item, index) => {
              const Icon = whyIcons[index] ?? Sparkles;
              return <article className="why-card" key={item}><Icon aria-hidden="true" /><b>0{index + 1}</b><h3>{item}</h3></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container">
          <SectionHeader eyebrow="Where we work" title="Delhi · Chennai · Kochi" description="Charitr has its registered office in Delhi and a working presence in Chennai and Kochi." />
          <LocationBlock />
        </div>
      </section>

      <CTASection title="Have a technology challenge that needs structure?" />
    </>
  );
}
