import { apiUrl } from "../../pages/_app";

const addWebsiteConfigAndSave = async ({
  websiteConfig,
  onSave,
  setImageUploadMessage,
  projectId,
  router,
}) => {
  try {
    console.log(websiteConfig);
    const res = await fetch(`${apiUrl}/websiteConfigs`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(websiteConfig),
    });
    if (res.status === 201 || res.status === 200) {
      const resData = await res.json();

      if (resData) {
        console.log(resData.data, "Saving to websiteConfig");
      }
      try {
        const projRes = await fetch(`${apiUrl}/projects/${projectId}`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            websiteConfig: resData.data.id,
          }),
        });
        // console.log("saved");
        if (Number(projRes.status) === 201 || projRes.status === 200) {
          const projData = await projRes.json();
          // console.log("Success", projData.data);
          setImageUploadMessage(() => {
            return {
              message: "Success! Your websiteConfig was saved.",
              type: "success",
            };
          });
          onSave();
        } else if (res.status == 401) {
          router.push(`/auth/sign-in?redirect=/projects/${projectId}`);
        } else {
          setImageUploadMessage(() => {
            return {
              message: projRes.status,
              type: "danger",
            };
          });
        }
      } catch {
        setImageUploadMessage(() => {
          return {
            message: "We ran into an error while saving your website config.",
            type: "danger",
          };
        });
      }

      // onSave();
    } else if (res.status === 401) {
      router.push("/auth/sign-in");
    } else {
      setImageUploadMessage(() => {
        return {
          message: "We ran into an error while saving your website config.",
          type: "danger",
        };
      });
    }
  } catch {
    setImageUploadMessage(() => {
      return {
        message: "We ran into an error while saving your website config.",
        type: "danger",
      };
    });
  }
};

export default addWebsiteConfigAndSave;
