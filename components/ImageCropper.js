import Cropper from "react-easy-crop";
import Button from "react-bootstrap/Button";
import React, { useState, useCallback } from "react";

const ImageCropper = ({ image }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <Button style={{ position: "absolute", bottom: "10vh", left: "48vw" }}>
        Save
      </Button>
    </div>
  );
};

export default ImageCropper;
