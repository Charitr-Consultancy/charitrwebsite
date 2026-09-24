type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  inverse = false,
}: SectionHeaderProps) {
  const highlightedTitle = highlight && title.endsWith(highlight)
    ? <>{title.slice(0, -highlight.length)}<span className="gradient-text">{highlight}</span></>
    : title;

  return (
    <header className={`section-header section-header--${align}${inverse ? " section-header--inverse" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{highlightedTitle}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
