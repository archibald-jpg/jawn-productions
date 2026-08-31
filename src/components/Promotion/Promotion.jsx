import { track } from "../../utils/analytics";
import "./Promotion.css";

const CAMPAIGN = {
  label: "Early Access",
  headline: "First 50 projects",
  body: "We're testing a new CNC fabrication service. Join the test list to receive early access when bookings open.",
  ctaLabel: "Get Early Access",
  ctaHref: "#test-list",
};

export default function Promotion() {
  return (
    <section className="promotion container">
      <div className="promotion-card">
        <p className="eyebrow promotion-label">{CAMPAIGN.label}</p>
        <h2 className="promotion-headline">{CAMPAIGN.headline}</h2>
        <p className="promotion-body">{CAMPAIGN.body}</p>
        <a
          href={CAMPAIGN.ctaHref}
          className="btn btn-primary"
          onClick={() => track("promotion-cta")}
        >
          {CAMPAIGN.ctaLabel}
        </a>
      </div>
    </section>
  );
}