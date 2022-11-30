export const BASE_URL = "http://localhost:5000";

export function uploadVideo(formData) {
  return fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });
}
