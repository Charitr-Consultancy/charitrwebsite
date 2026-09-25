import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  Blocks,
  Bot,
  Braces,
  CheckCircle2,
  Compass,
  MousePointerClick,
  Network,
  PanelsTopLeft,
  Rocket,
  Route,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { Capability } from "@/types/site";

const iconSets: Record<string, ComponentType<LucideProps>[]> = {
  "engineering-excellence": [Braces, Blocks, Rocket],
  "ui-ux-product-design": [Search, PanelsTopLeft, MousePointerClick],
  "ai-intelligent-automation": [Compass, Bot, ShieldCheck],
  "technology-transformation-advisory": [Network, Route, CheckCircle2],
};

export function CapabilityInfographic({ capability }: { capability: Capability }) {
  const icons = iconSets[capability.slug] ?? [Compass, Route, CheckCircle2];

  return (
    <section className="section capability-infographic-section" data-accent={capability.accent}>
      <div className="container">
        <div className="capability-infographic__intro">
          <div>
            <p className="eyebrow">{capability.infographic.eyebrow}</p>
            <h2>{capability.infographic.title}</h2>
          </div>
          <p>{capability.infographic.description}</p>
        </div>
        <ol className="capability-flow" aria-label={`${capability.title} delivery flow`}>
          {capability.infographic.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li key={step.title}>
                <div className="capability-flow__icon"><Icon aria-hidden="true" /></div>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
