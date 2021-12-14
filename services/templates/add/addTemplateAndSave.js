import { apiUrl } from "../../../pages/_app";

const addTemplateAndSave = async ({
  templateData,
  onSave,
  setImageUploadMessage,
  projectId,
}) => {
  try {
    const res = await fetch(`${apiUrl}/templates`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(templateData),
    });
    if (res.status === 201 || res.status === 200) {
      const resData = await res.json();

      if (resData) {
        // console.log(resData.data, "Saving to template");
      }
      try {
        const projRes = await fetch(`${apiUrl}/projects/${projectId.id}`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            template: resData.data.id,
          }),
        });
        console.log("saved");
        if (Number(projRes.status) === 201 || projRes.status === 200) {
          const projData = await projRes.json();
          // console.log("Success", projData.data);
          setImageUploadMessage(() => {
            return {
              message: "Success! Your template was saved.",
              type: "success",
            };
          });
          onSave();
        } else if (res.status == 401) {
          window.location.href = `/auth/sign-in?redirect=/projects/${projectId}`;
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
            message:
              "We ran into an error while saving your template. Please ensure you have chosen a font and uploaded an image.",
            type: "danger",
          };
        });
      }

      // onSave();
    } else if (res.status === 401) {
      window.location.href = "/auth/sign-in";
    } else {
      setImageUploadMessage(() => {
        return {
          message:
            "We ran into an error while saving your template. Please ensure you have chosen a font and uploaded an image.",
          type: "danger",
        };
      });
    }
  } catch {
    setImageUploadMessage(() => {
      return {
        message:
          "We ran into an error while saving your template. Please ensure you have chosen a font and uploaded an image.",
        type: "danger",
      };
    });
  }
};

export default addTemplateAndSave;
