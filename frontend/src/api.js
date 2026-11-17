
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}

export function fetchActivities() {
  return request("/activities");
}

export function fetchActivity(id) {
  return request(`/activities/${id}`);
}

export function createActivity(activity) {
  return request("/activities", {
    method: "POST",
    body: JSON.stringify(activity),
  });
}

export function updateActivity(id, changes) {
  return request(`/activities/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteActivity(id) {
  return request(`/activities/${id}`, {
    method: "DELETE",
  });
}
