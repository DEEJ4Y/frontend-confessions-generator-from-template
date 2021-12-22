import { apiUrl } from "../../../pages/_app";
import getBase64 from "../../../utils/getBase64";
import uploadImageToServer from "../../../utils/uploadImage";

const uploadImage = (
  e,
  { setImageData, setTemplateData, setImageUploadMessage }
) => {
  getBase64(e.target.files[0]).then(async (data) => {
    setImageData(() => data);
  });
};

export default uploadImage;
