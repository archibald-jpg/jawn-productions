const EVENTS_KEY = "formcnc_events";

export function track(eventName) {
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    const events = raw ? JSON.parse(raw) : {};
    events[eventName] = (events[eventName] || 0) + 1;
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch (error) {
    console.error("Failed to track event:", error);
  }

  // Swap this file's internals later to send to a real analytics
  // provider (Plausible, PostHog, GA) — components calling track()
  // never need to change.
}

export function getEvents() {
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("Failed to read events:", error);
    return {};
  }
}

export function clearEvents() {
  localStorage.removeItem(EVENTS_KEY);
}