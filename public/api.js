/** Thin wrapper over the server's JSON endpoints. */

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
  questions: () => req('/api/questions'),
  attempts: () => req('/api/attempts'),
  schedule: () => req('/api/schedule'),
  logAttempts: (attempts) => req('/api/attempts', json('POST', attempts)),
  saveSchedule: (state) => req('/api/schedule', json('PUT', state)),
};
