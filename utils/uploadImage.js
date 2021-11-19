const uploadImageToServer = async ({ base64String, url }) => {
  try {
    let formData = new FormData();
    formData.append("imageData", base64String);
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        // "Content-Type": "application/jsonrequest",
        // "Content-Type": "multipart/form-data; charset=binary",
        // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
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
