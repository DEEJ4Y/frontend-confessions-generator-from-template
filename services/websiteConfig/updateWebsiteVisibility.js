import { apiUrl } from "../../pages/_app";

export default async function updateWebsiteVisibility({
  newVisibility,
  websiteConfigId,
  project,
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
      location.reload();
    } else if (res.status === 401) {
      window.location.href = `/auth/sign-in?redirect=/projects/${project.id}?name=${project.name}`;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}
