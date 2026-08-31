import { BRAND, NAV_LINKS, PRIMARY_CTA } from "../../config/brand";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-wordmark">{BRAND.name}</p>
          <p className="footer-tagline">{BRAND.tagline}</p>
        </div>

        <div className="footer-links">
          <a href={BRAND.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={`mailto:${BRAND.email}`}>Email</a>
          {NAV_LINKS.slice(0, 2).map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</a>
        </div>
      </div>

      <div className="container footer-meta">
        <p>Prototype site — research version.</p>
      </div>
    </footer>
  );
}