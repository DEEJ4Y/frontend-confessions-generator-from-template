import { apiUrl } from "../../pages/_app";

export default async function getWebsiteConfigService({
  websiteConfigId,
  router,
}) {
  try {
    const res = await fetch(`${apiUrl}/websiteConfigs/${websiteConfigId}`);
    if (res.status === 200) {
      return res.json();
    } else {
      router.push("/page-not-found");
    }
  } catch (error) {
    console.error(error);
    router.push("/page-not-found");

    // return false;
  }
}
