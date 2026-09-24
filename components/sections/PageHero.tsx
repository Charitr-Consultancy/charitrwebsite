import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  placeholder = false,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  description: string | readonly string[];
  crumbs: Crumb[];
  placeholder?: boolean;
  image?: string;
  imageAlt?: string;
}) {
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
          <p className={placeholder ? "placeholder-hero-label" : "eyebrow"}>{eyebrow}</p>
          <h1>{title}</h1>
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
