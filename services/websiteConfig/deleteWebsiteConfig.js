import { apiUrl } from "../../pages/_app";

export default async function deleteWebsiteConfig({
  websiteConfigId,
  redirectUrl,
  router,
  projectId,
}) {
  try {
    const res = await fetch(`${apiUrl}/websiteConfigs/${websiteConfigId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.status === 200) {
      router.push(`/projects/${projectId}`);
    } else if (res.status === 401) {
      router.push(redirectUrl);
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
