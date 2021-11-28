import { apiUrl } from "../../../pages/_app";
import getBase64 from "../../../utils/getBase64";
import uploadImageToServer from "../../../utils/uploadImage";

const uploadImage = (
  e,
  { setImageData, setTemplateData, setImageUploadMessage }
) => {
  // console.log(e.target.files[0]);
  getBase64(e.target.files[0]).then(async (data) => {
    setImageData(() => data);
    // // console.log(data);
    // const imageDoc = await uploadImageToServer({
    //   base64String: data,
    //   url: `${apiUrl}/images`,
    // });
    // if (imageDoc === "unauthorized") {
    //   window.location.href = "/auth/sign-in";
    // } else if (imageDoc) {
    //   console.log(imageDoc);
    //   setTemplateData((prev) => {
    //     return { ...prev, backgroundImage: imageDoc.id };
    //   });
    //   setImageUploadMessage(() => {
    //     return {
    //       message: "Your image was uploaded successfully.",
    //       type: "success",
    //     };
    //   });
    // } else {
    //   setImageUploadMessage(() => {
    //     return {
    //       message: "We ran into an error while uploading your image.",
    //       type: "danger",
    //     };
    //   });
    // }
  });
};

export default uploadImage;
