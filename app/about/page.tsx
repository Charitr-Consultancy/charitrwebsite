import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About",
  "Learn about Charitr Consultancy Private Limited, our purpose, principles and presence in Delhi, Chennai and Kochi.",
  "/about",
);

const audiences = [
  ["01 · GROW", "SMEs & ambitious teams", "Digital products and connected systems that help growing organisations scale with confidence."],
  ["02 · IMPACT", "Social enterprises", "Technology that improves service delivery, operational visibility, and measurable social value."],
  ["03 · ENABLE", "NGOs", "Programme platforms, reporting tools, and workflows that reduce administrative effort."],
  ["04 · LEARN", "Education & learning", "Accessible experiences for learners, educators, administrators, and programme teams."],
];

const workingPrinciples = [
  ["Ask better questions", "We learn what should change before deciding what to build."],
  ["Make the complex clear", "Architecture, journeys, priorities, and trade-offs become visible and discussable."],
  ["Design with delivery in mind", "Product thinking and engineering constraints shape the solution together."],
  ["Measure what matters", "Success is defined through adoption, performance, and business outcomes."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Charitr" title="Clarity first. Technology with purpose." highlight="with purpose." description="A connected team helping organisations turn complex digital work into clear, useful and maintainable solutions." crumbs={[{ label: "About" }]} image="/site-assets/headers/about.webp" imageAlt="Charitr team collaborating on a digital initiative" />
      <section className="section section--blue-grey">
        <div className="container about-split">
          <div className="about-media-frame">
            <Image src="/site-assets/charitr-team-process.webp" alt="Charitr team collaborating on a digital workflow" fill unoptimized sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">Who we are</p>
            <h2>A connected team for complex digital work.</h2>
            <p>Charitr Consultancy Private Limited brings engineering, experience design, applied AI, and transformation advisory together. That connected approach keeps strategy close to execution—and business outcomes close to every product decision.</p>
            <p>We work with growing businesses, social enterprises, NGOs, and learning organisations that need technology to be useful, reliable, and ready to evolve.</p>
            <div className="about-stat-grid">
              <div><strong>5</strong><span>Capability pillars</span></div>
              <div><strong>3</strong><span>Indian locations</span></div>
              <div><strong>1</strong><span>Connected delivery team</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="about-section-head">
            <div>
              <p className="eyebrow">Who we work with</p>
              <h2>Built around the realities of <span className="gradient-text">your organisation.</span></h2>
            </div>
            <p>Every engagement starts with context: your people, constraints, goals, and existing systems.</p>
          </header>
          <div className="about-detail-grid">
            {audiences.map(([number, title, text]) => (
              <article className="about-detail-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container process-layout">
          <div className="process-sticky">
            <p className="eyebrow">Our way of working</p>
            <h2>Thoughtful at the start. <span className="gradient-text">Practical throughout.</span></h2>
            <p>We reduce ambiguity early, create together, and keep delivery transparent from first workshop to continuous improvement.</p>
          </div>
          <div className="about-process-list">
            {workingPrinciples.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mission-grid">
          <article><p className="eyebrow">Mission</p><h2>Help organisations use software and digital tools to work better and serve their users.</h2></article>
          <article><p className="eyebrow">Vision</p><h2>Useful technology that is clear, dependable and easy to maintain.</h2></article>
        </div>
      </section>
      <section className="section section--navy name-section">
        <div className="container">
          <p className="name-word">charitr</p>
          <div><p className="eyebrow">The meaning of our name</p><h2>A name connected to character and responsible work.</h2><p>Charitr draws from the Sanskrit concept of character. It reflects our aim to work responsibly, communicate honestly and build technology that is useful over time.</p></div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container"><SectionHeader eyebrow="Our presence" title="Delhi · Chennai · Kochi" description="Registered in Delhi, with a working presence in Chennai and Kochi." /><LocationBlock /></div>
      </section>
      <CTASection title="Need help with a software or digital project?" />
    </>
  );
}
