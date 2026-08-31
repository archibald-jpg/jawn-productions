import { useState } from "react";
import { BRAND, NAV_LINKS, PRIMARY_CTA } from "../../config/brand";
import { track } from "../../utils/analytics";
import "./Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a href="#top" className="nav-wordmark">
          {BRAND.name}
        </a>

        <nav
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => {
                track(`nav-${link.label.toLowerCase()}`);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a href={PRIMARY_CTA.href}
            className="btn btn-primary nav-cta"
            onClick={() => {
              track("nav-join-test-list");
              setMenuOpen(false);
            }}
          >
            {PRIMARY_CTA.label}
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}