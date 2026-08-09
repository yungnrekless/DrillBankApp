/**
 * Thin wrapper over the server's JSON endpoints.
 *
 * Every data endpoint is scoped to a course, so the caller passes the slug in.
 * Nothing here remembers which course is selected — that lives in app.js, and
 * keeping it out of the transport is what makes switching courses a matter of
 * calling these again with a different slug.
 */

async function req(url, opts) {
  const res = await fetch(url, opts);
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`${opts?.method || 'GET'} ${url} → ${res.status} ${detail}`);
  }
  return res.json();
}

const json = (method, body) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const api = {
  courses: () => req('/api/courses'),
  questions: (course) => req(`/api/${course}/questions`),
  attempts: (course) => req(`/api/${course}/attempts`),
  schedule: (course) => req(`/api/${course}/schedule`),
  logAttempts: (course, attempts) => req(`/api/${course}/attempts`, json('POST', attempts)),
  saveSchedule: (course, state) => req(`/api/${course}/schedule`, json('PUT', state)),
};
