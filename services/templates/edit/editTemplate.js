import { apiUrl } from "../../../pages/_app";

export default async function editTemplate({ templateId, reqBody, callback }) {
  try {
    console.log(templateId, reqBody);
    const res = await fetch(`${apiUrl}/templates/${templateId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    if (res.status === 401) {
      window.location.href = "/auth/sign-in";
    } else if (res.status === 200) {
      const template = res.json();
      console.log(template);
    } else {
      return false;
    }

    if (callback) {
      callback();
    }
    location.reload();
  } catch (error) {
    console.error(error);
  }
}
