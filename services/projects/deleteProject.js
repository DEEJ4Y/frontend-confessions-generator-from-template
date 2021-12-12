import { apiUrl } from "../../pages/_app";

export default async function deleteProject({ projectId }) {
  try {
    const res = await fetch(`${apiUrl}/projects/${projectId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.status == 401) {
      window.location.href = `/auth/sign-in?redirect=/projects/${projectId}`;
    } else {
      window.location.href = "/dashboard";
    }
  } catch (err) {
    console.error(err);
  }
}
