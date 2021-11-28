import { apiUrl } from "../pages/_app";

const uploadImageToServer = async ({ base64String }) => {
  try {
    let formData = new FormData();
    formData.append("imageData", base64String);
    const res = await fetch(`${apiUrl}/images`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    if (res.status === 201 || res.status === 200) {
      const resData = await res.json();
      return resData.data;
    } else if (res.status === 401) {
      return "unauthorized";
    }
  } catch {
    return false;
  }
};

export default uploadImageToServer;
