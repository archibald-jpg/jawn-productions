import { PROCESS_STEPS } from "../../data/process";
import "./Process.css";

export default function Process() {
  return (
    <section id="process" className="process container">
      <div className="process-header">
        <p className="eyebrow">How It Works</p>
        <h2 className="process-title">A provisional process — this is a research prototype.</h2>
      </div>

      <ol className="process-list">
        {PROCESS_STEPS.map((item) => (
          <li className="process-step" key={item.step}>
            <span className="process-step-number">{item.step}</span>
            <div>
              <h3 className="process-step-title">{item.title}</h3>
              <p className="process-step-desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}