import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { WorkItemCard } from "@/components/sections/WorkItemCard";
import { workItems } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Selected Work",
  "Mobile learning applications, websites and digital experience work designed and developed by Charitr.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Digital experiences designed around real users."
        highlight="real users."
        description="Selected learning and web experiences designed to make information, services and everyday tasks clearer."
        crumbs={[{ label: "Work" }]}
        image="/site-assets/headers/work.webp"
        imageAlt="Digital product work presented across devices"
      />
      <section className="section section--white">
        <div className="container work-list">
          {workItems.map((item, index) => <WorkItemCard key={item.slug} item={item} index={index} />)}
        </div>
      </section>
      <CTASection
        title="What could the right product unlock for you?"
        button="Start Your Project"
      />
    </>
  );
}
