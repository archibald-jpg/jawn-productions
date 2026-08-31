import { MATERIALS, PROCESSES } from "../../data/capabilities";
import "./Capabilities.css";

export default function Capabilities() {
  return (
    <section id="capabilities" className="capabilities container">
      <div className="capabilities-header">
        <p className="eyebrow">Capabilities</p>
        <h2 className="capabilities-title">
          What we work with, and how we work.
        </h2>
        <p className="capabilities-note">
          Exact specifications — machine tolerances, materials and
          production capacity — are being finalised as this prototype
          develops.
        </p>
      </div>

      <div className="capabilities-materials">
        <span className="capabilities-label">Materials</span>
        <ul className="materials-list">
          {MATERIALS.map((material) => (
            <li key={material}>{material}</li>
          ))}
        </ul>
      </div>

      <div className="capabilities-grid">
        {PROCESSES.map((process) => (
          <div className="capability-card" key={process.title}>
            <h3 className="capability-card-title">{process.title}</h3>
            <p className="capability-card-desc">{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}