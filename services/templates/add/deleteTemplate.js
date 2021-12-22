import { apiUrl } from "../../../pages/_app";

export default async function deleteTemplate({ templateId, router, project }) {
  try {
    const res = await fetch(`${apiUrl}/templates/${templateId}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.status === 401) {
      router.push("/auth/sign-in");
    } else if (res.status === 200) {
      router.push(`/projects/${project.id}?name=${project.name}`);
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}
