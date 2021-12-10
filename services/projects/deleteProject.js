import { apiUrl } from "../../pages/_app";

export default async function deleteProject({ projectId }) {
  try {
    await fetch(`${apiUrl}/projects/${projectId}`, {
      method: "DELETE",
      credentials: "include",
    });
    window.location.href = "/dashboard";
  } catch (err) {
    console.error(err);
  }
}
