import { apiUrl } from "../../pages/_app";

export default async function getWebsiteConfigService({ websiteConfigId }) {
  try {
    const res = await fetch(`${apiUrl}/websiteConfigs/${websiteConfigId}`);
    if (res.status === 200) {
      return res.json();
    } else {
      window.location.href = "/page-not-found";
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
