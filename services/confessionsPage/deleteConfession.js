import { apiUrl } from "../../pages/_app";

export default async function deleteConfession({ confessionId, callback }) {
  try {
    const res = await fetch(`${apiUrl}/confessions/${confessionId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (res.status === 200) {
      callback();
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
