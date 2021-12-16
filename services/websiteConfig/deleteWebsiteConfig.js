import { apiUrl } from "../../pages/_app";

export default async function deleteWebsiteConfig({
  websiteConfigId,
  redirectUrl,
}) {
  try {
    const res = await fetch(`${apiUrl}/websiteConfigs/${websiteConfigId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.status === 200) {
      location.reload();
    } else if (res.status === 401) {
      window.location.href = redirectUrl;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
