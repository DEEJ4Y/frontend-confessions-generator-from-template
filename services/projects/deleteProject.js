import { apiUrl } from "../../pages/_app";

export default async function deleteProject({ projectId, router }) {
  try {
    const res = await fetch(`${apiUrl}/projects/${projectId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.status == 401) {
      router.push(`/auth/sign-in?redirect=/projects/${projectId}`);
    } else {
      router.push("/dashboard");
    }
  } catch (err) {
    console.error(err);
  }
}
