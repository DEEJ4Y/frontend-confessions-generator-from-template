import { apiUrl } from "../../pages/_app";

export default async function getProjectById(projectId, callback) {
  try {
    const res = await fetch(`${apiUrl}/projects/${projectId}`, {
      method: "GET",
      credentials: "include",
    });

    if (res.status == 401) {
      window.location.href = `/auth/sign-in?redirect=/projects/${projectId}/edit`;
    } else if (res.status === 200) {
      // window.location.href = `/projects/${projectId}/edit`;

      callback(await res.json());
    }
  } catch (err) {
    console.error(err);
  }
}
