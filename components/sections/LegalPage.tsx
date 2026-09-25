import { PageHero } from "@/components/sections/PageHero";

export function LegalPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} crumbs={[{ label: title }]} />
      <section className="section section--white">
        <article className="container legal-copy">
          {children}
        </article>
      </section>
    </>
  );
}
