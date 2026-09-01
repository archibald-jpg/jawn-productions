import { useState } from "react";
import { INTEREST_OPTIONS, PROJECT_SIZE_OPTIONS } from "../../data/interests";
import { saveSubmission } from "../../utils/storage";
import { track } from "../../utils/analytics";
import { FORMSPREE_ENDPOINT } from "../../config/brand";
import "./TestList.css";

const initialForm = {
  name: "",
  email: "",
  interest: "",
  projectSize: "",
  description: "",
};

export default function TestList() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.interest) nextErrors.interest = "Please select what you're interested in.";
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);

    saveSubmission(form);
    track("join-test-list-submit");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.target),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section id="test-list" className="test-list container">
        <div className="test-list-success">
          <p className="eyebrow">You're on the list.</p>
          <h2 className="test-list-success-title">
            Thanks — your interest has been recorded as part of our early
            testing.
          </h2>
          <p className="test-list-success-body">
            We'll be in touch when the service is ready. This is a
            prototype — no payment has been taken.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="test-list" className="test-list container">
      <div className="test-list-header">
        <p className="eyebrow">We're building the next version.</p>
        <h2 className="test-list-title">
          We're testing how people want to use CNC fabrication.
        </h2>
        <p className="test-list-body">
          Join the early-access list and help shape the service before
          launch.
        </p>
      </div>

      <form className="test-list-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="form-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="form-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="interest">What are you interested in?</label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={(e) => updateField("interest", e.target.value)}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-error" : undefined}
          >
            <option value="">Select an option</option>
            {INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interest && (
            <span id="interest-error" className="form-error">
              {errors.interest}
            </span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="projectSize">
            Estimated project size <span className="form-optional">(optional)</span>
          </label>
          <select
            id="projectSize"
            name="projectSize"
            value={form.projectSize}
            onChange={(e) => updateField("projectSize", e.target.value)}
          >
            <option value="">Select an option</option>
            {PROJECT_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="description">
            Tell us about your project{" "}
            <span className="form-optional">(optional)</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary test-list-submit"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Join the Test List"}
        </button>

        {submitError && (
          <p className="form-error">
            Something went wrong sending your submission. Please try again,
            or email us directly.
          </p>
        )}

        <p className="test-list-disclaimer">
          This is a prototype. No payment is required.
        </p>
      </form>
    </section>
  );
}