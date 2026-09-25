import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string | readonly string[];
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
}) {
  const highlightedTitle = highlight && title.endsWith(highlight)
    ? <>{title.slice(0, -highlight.length)}<span className="gradient-text">{highlight}</span></>
    : title;

  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero-media" aria-hidden={imageAlt ? undefined : true}>
          <Image src={image} alt={imageAlt} fill priority unoptimized sizes="100vw" />
        </div>
      )}
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{highlightedTitle}</h1>
          <div className="page-hero__description">
            {typeof description === "string"
              ? <p>{description}</p>
              : description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
