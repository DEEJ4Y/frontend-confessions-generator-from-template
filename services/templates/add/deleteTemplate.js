import { apiUrl } from "../../../pages/_app";

export default async function deleteTemplate({ templateId }) {
  try {
    const res = await fetch(`${apiUrl}/templates/${templateId}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.status === 401) {
      window.location.href = "/auth/sign-in";
    } else if (res.status === 200) {
      location.reload();
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}
