import { useScrollReveal } from "../../hooks/useScrollReveal";
import { PROJECTS } from "../../data/projects";
import { track } from "../../utils/analytics";
import "./Work.css";

function ProjectPlaceholder({ number }) {
  return (
    <svg
      className="project-placeholder"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="400" height="500" fill="#EFEBE4" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="500"
          stroke="rgba(23,24,26,0.06)"
          strokeWidth="1"
        />
      ))}
      <text
        x="24"
        y="460"
        fontFamily="Fraunces, serif"
        fontSize="72"
        fill="rgba(23,24,26,0.12)"
      >
        {number}
      </text>
    </svg>
  );
}

export default function Work() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="work"
      className={`work container reveal ${isVisible ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <div className="work-header">
        <p className="eyebrow">Selected Work</p>
        <h2 className="work-title">Recent fabrication projects.</h2>
      </div>

      <div className="work-grid">
        {PROJECTS.map((project) => (
          <article
            className="work-card"
            key={project.id}
            tabIndex={0}
            role="button"
            onClick={() => track(`project-${project.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                track(`project-${project.id}`);
              }
            }}
          >
            <div className="work-card-image">
              <ProjectPlaceholder number={project.number} />
            </div>
            <div className="work-card-meta">
              <span className="work-card-number">{project.number}</span>
              <div>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-category">{project.category}</p>
                <p className="work-card-description">
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}