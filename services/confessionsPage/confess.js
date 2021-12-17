import { apiUrl } from "../../pages/_app";

export default async function confess({ confession, projectId, callback }) {
  try {
    const res = await fetch(`${apiUrl}/confessions`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        confession,
        project: projectId,
      }),
    });

    if (res.status === 201) {
      callback();
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
