"use client";

import { useState } from "react";

const options = {
  customer: {
    label: "Customer experience",
    nodes: [
      ["Input", "Customer needs", "Requests, goals and context"],
      ["Intelligence", "Product experience", "Clear journeys and useful automation"],
      ["Action", "Connected service", "Faster, more consistent delivery"],
    ],
    result: "A digital experience people can understand and teams can improve.",
  },
  operations: {
    label: "Operational workflow",
    nodes: [
      ["Input", "Process signals", "Tasks, documents and approvals"],
      ["Intelligence", "Workflow engine", "Rules, AI support and human review"],
      ["Action", "Visible progress", "Clear ownership and reporting"],
    ],
    result: "Less manual effort, clearer accountability and better operational visibility.",
  },
  learning: {
    label: "Learning platform",
    nodes: [
      ["Input", "Learning goals", "Content, audiences and outcomes"],
      ["Intelligence", "Adaptive journey", "Accessible delivery and guided practice"],
      ["Action", "Learner progress", "Useful insight for learners and teams"],
    ],
    result: "A focused learning experience that works across devices and contexts.",
  },
} as const;

type Option = keyof typeof options;

export function SolutionLab() {
  const [selected, setSelected] = useState<Option>("customer");
  const option = options[selected];

  return (
    <div className="solution-lab">
      <div className="solution-controls">
        <p className="kicker">Architecture selector</p>
        <h3>Choose a business need</h3>
        <p>See how we connect inputs, intelligence and action.</p>
        <div className="selector-buttons">
          {(Object.keys(options) as Option[]).map((key) => (
            <button
              className={`selector-btn${selected === key ? " active" : ""}`}
              key={key}
              type="button"
              aria-pressed={selected === key}
              onClick={() => setSelected(key)}
            >
              {options[key].label}<span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
      <div className="solution-canvas" aria-live="polite">
        <div className="lab-label"><span>Solution architecture</span><span>{option.label}</span></div>
        <div className="workflow">
          {option.nodes.map(([eyebrow, title, text], index) => (
            <div className="flow-fragment" key={title}>
              <article className="flow-node"><small>{eyebrow}</small><h4>{title}</h4><p>{text}</p></article>
              {index < option.nodes.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <p className="lab-result"><i />{option.result}</p>
      </div>
    </div>
  );
}
