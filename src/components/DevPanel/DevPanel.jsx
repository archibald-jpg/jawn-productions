import { useEffect, useState } from "react";
import { getSubmissions, clearSubmissions } from "../../utils/storage";
import { getEvents, clearEvents } from "../../utils/analytics";
import "./DevPanel.css";

export default function DevPanel() {
  const [open, setOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [events, setEvents] = useState({});

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.metaKey && e.shiftKey && e.key.toLowerCase() === "d") {
        setSubmissions(getSubmissions());
        setEvents(getEvents());
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div className="dev-panel">
      <div className="dev-panel-header">
        <span>Dev Panel — research data (local only)</span>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>

      <div className="dev-panel-section">
        <h4>CTA / Interaction events</h4>
        {Object.keys(events).length === 0 ? (
          <p>No events tracked yet.</p>
        ) : (
          <ul>
            {Object.entries(events).map(([name, count]) => (
              <li key={name}>
                {name}: {count}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => { clearEvents(); setEvents({}); }}>
          Clear events
        </button>
      </div>

      <div className="dev-panel-section">
        <h4>Waiting list submissions ({submissions.length})</h4>
        <pre>{JSON.stringify(submissions, null, 2)}</pre>
        <button onClick={() => { clearSubmissions(); setSubmissions([]); }}>
          Clear submissions
        </button>
      </div>
    </div>
  );
}