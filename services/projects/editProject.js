import { apiUrl } from "../../pages/_app";

export default async function editProjectById(
  projectId,
  reqBody,
  router,
  callback
) {
  try {
    const res = await fetch(`${apiUrl}/projects/${projectId}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });

    if (res.status == 401) {
      router.push(`/auth/sign-in?redirect=/projects/${projectId}/edit`);
    } else if (res.status === 200) {
      callback();
    }
  } catch (err) {
    console.error(err);
  }
}
