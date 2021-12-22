import { apiUrl } from "../../pages/_app";

export default async function updateWebsiteVisibility({
  newVisibility,
  websiteConfigId,
  project,
  router,
}) {
  try {
    const res = await fetch(`${apiUrl}/websiteConfigs/${websiteConfigId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visibility: newVisibility }),
    });

    if (res.status === 200) {
      router.push(`/projects/${project.id}?name=${project.name}`);
    } else if (res.status === 401) {
      router.push(
        `/auth/sign-in?redirect=/projects/${project.id}?name=${project.name}`
      );
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}
