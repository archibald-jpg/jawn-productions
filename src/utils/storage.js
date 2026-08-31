const SUBMISSIONS_KEY = "formcnc_submissions";

export function saveSubmission(submission) {
  const entry = {
    ...submission,
    timestamp: new Date().toISOString(),
  };

  const existing = getSubmissions();
  const updated = [...existing, entry];

  try {
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error("Failed to save submission:", error);
    return false;
  }
}

export function getSubmissions() {
  try {
    const raw = localStorage.getItem(SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Failed to read submissions:", error);
    return [];
  }
}

export function clearSubmissions() {
  localStorage.removeItem(SUBMISSIONS_KEY);
}