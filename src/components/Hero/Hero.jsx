import { PRIMARY_CTA } from "../../config/brand";
import { track } from "../../utils/analytics";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">CNC Fabrication Studio</p>
        <h1 className="hero-headline">
          CNC fabrication for furniture, objects and ideas.
        </h1>
        <p className="hero-supporting">
          We turn digital designs into precise physical objects using CNC
          manufacturing.
        </p>
        <div className="hero-actions">
          <a href={PRIMARY_CTA.href}
            className="btn btn-primary"
            onClick={() => track("hero-join-test-list")}
          >
            {PRIMARY_CTA.label}
          </a>
          <a href="#process"
            className="btn btn-secondary"
            onClick={() => track("hero-explore-process")}
          >
            Explore Our Process
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-frame">
          <svg
            className="hero-visual-svg"
            viewBox="0 0 600 720"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="materialGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2A2B28" />
                <stop offset="100%" stopColor="#17181A" />
              </linearGradient>
            </defs>
            <rect width="600" height="720" fill="url(#materialGrad)" />
            {Array.from({ length: 14 }).map((_, i) => (
              <line
                key={i}
                x1={i * 44}
                y1="0"
                x2={i * 44}
                y2="720"
                stroke="rgba(247,245,241,0.06)"
                strokeWidth="1"
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 80}
                x2="600"
                y2={i * 80}
                stroke="rgba(247,245,241,0.05)"
                strokeWidth="1"
              />
            ))}
            <rect
              x="80"
              y="220"
              width="440"
              height="280"
              fill="none"
              stroke="rgba(166,81,46,0.55)"
              strokeWidth="1.5"
            />
          </svg>
          <span className="hero-visual-label">
            Placeholder — replace with product photography
          </span>
        </div>
      </div>
    </section>
  );
}