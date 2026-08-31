import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Intro.css";

const CAPABILITIES = [
  { title: "Furniture", description: "CNC-cut furniture and flat-pack structures." },
  { title: "Objects", description: "Small-batch products, installations and experimental objects." },
  { title: "Components", description: "Precisely fabricated components for larger projects." },
  { title: "Prototyping", description: "Rapid iterations from digital files to physical prototypes." },
];

export default function Intro() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="about"
      className={`intro container reveal ${isVisible ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <div className="intro-statement">
        <p className="eyebrow">Designed digitally. Made precisely.</p>
        <h2 className="intro-heading">
          We work with designers, architects, makers, businesses and
          individuals to turn digital concepts into accurately fabricated
          physical objects.
        </h2>
      </div>

      <div className="intro-grid">
        {CAPABILITIES.map((item) => (
          <div className="intro-item" key={item.title}>
            <h3 className="intro-item-title">{item.title}</h3>
            <p className="intro-item-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}