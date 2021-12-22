import { apiUrl } from "../../pages/_app";

export default async function getProjectById(projectId, router, callback) {
  try {
    const res = await fetch(`${apiUrl}/projects/${projectId}`, {
      method: "GET",
      credentials: "include",
    });

    if (res.status == 401) {
      router.push(`/auth/sign-in?redirect=/projects/${projectId}/edit`);
    } else if (res.status === 200) {
      callback(await res.json());
    }
  } catch (err) {
    console.error(err);
  }
}
