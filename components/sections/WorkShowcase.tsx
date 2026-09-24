"use client";

import Image from "next/image";
import { useState } from "react";
import { workItems } from "@/data/site";

const images = ["/site-assets/mobile-learning-app.webp", "/site-assets/website-design.webp"];

export function WorkShowcase() {
  const featured = workItems.slice(0, 2);
  const [active, setActive] = useState(0);
  const move = (step: number) => setActive((active + step + featured.length) % featured.length);

  return (
    <div className="work-stage">
      {featured.map((item, index) => (
        <article className={`showcase-card${active === index ? " active" : ""}`} key={item.slug} aria-hidden={active !== index}>
          <div className="showcase-visual">
            {active === index && <Image src={images[index]} alt="" fill unoptimized sizes="(max-width: 900px) calc(100vw - 32px), 50vw" />}
          </div>
          <div className="showcase-copy">
            <span className="index">0{index + 1} · {item.tags[2]}</span>
            <h3>{item.title}</h3>
            <p>{item.homeDescription}</p>
            <ul className="tag-row" aria-label={`${item.title} capabilities`}>{item.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}</ul>
          </div>
        </article>
      ))}
      <div className="carousel-controls">
        <button className="icon-btn" type="button" onClick={() => move(-1)} aria-label="Previous project">←</button>
        <button className="icon-btn" type="button" onClick={() => move(1)} aria-label="Next project">→</button>
      </div>
    </div>
  );
}
