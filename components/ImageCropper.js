import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage";
import Button from "react-bootstrap/Button";
import React, { useState, useCallback } from "react";
import uploadImageToServer from "../utils/uploadImage";

const ImageCropper = ({
  image,
  setImageData,
  setImageUploadMessage,
  setTemplateData,
  setImageCropComplete,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
      // console.log(croppedArea);
      // console.log(croppedAreaPixels);
      showCroppedImage({ croppedAreaPixels });
    },
    [showCroppedImage]
  );

  const showCroppedImage = useCallback(
    async ({ croppedAreaPixels }) => {
      try {
        console.log(croppedAreaPixels);
        const newCroppedImage = await getCroppedImg(
          image,
          croppedAreaPixels,
          0
        );
        setCroppedImage(newCroppedImage);
        // console.log("done", croppedImage);
      } catch (e) {
        console.error(e);
      }
    },
    [image]
  );

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const saveImage = async () => {
    // console.log("Saving", croppedImage);
    const data = await uploadImageToServer({
      base64String: croppedImage,
    });
    console.log(data);

    if (data === "unauthorized") {
      window.location.href = "/auth/sign-in";
    } else if (data === false) {
      setImageUploadMessage(() => {
        return {
          message: "Failed to upload your image. Please try again.",
          type: "danger",
        };
      });
    } else {
      setImageData(() => {
        return croppedImage;
      });
      setTemplateData((prev) => {
        return { ...prev, backgroundImage: data.id };
      });
      setImageUploadMessage(() => {
        return {
          message: "Success! Your image was uploaded.",
          type: "success",
        };
      });
      onClose();
      setImageCropComplete(true);
    }
  };

  return (
    <div id="image-cropper">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <Button
        size={"lg"}
        style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        onClick={saveImage}
      >
        Save
      </Button>
    </div>
  );
};

export default ImageCropper;
