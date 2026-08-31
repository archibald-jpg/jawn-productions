import { AUDIENCE } from "../../data/audience";
import "./Audience.css";

export default function Audience() {
  return (
    <section className="audience container">
      <p className="eyebrow">Who It's For</p>

      <ul className="audience-list">
        {AUDIENCE.map((item, index) => (
          <li className="audience-item" key={item.title}>
            <span className="audience-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="audience-title">{item.title}</h3>
            <p className="audience-desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}