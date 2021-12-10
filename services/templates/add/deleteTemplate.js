import { apiUrl } from "../../../pages/_app";

export default async function deleteTemplate({ templateId }) {
  try {
    await fetch(`${apiUrl}/templates/${templateId}`, {
      method: "DELETE",
      credentials: "include",
    });
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
