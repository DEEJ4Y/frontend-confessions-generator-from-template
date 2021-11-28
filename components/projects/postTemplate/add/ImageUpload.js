import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import ImageCropper from "../../../ImageCropper";
import uploadImage from "../../../../services/templates/add/uploadImage";

const ImageUpload = ({
  templateData,
  setImageData,
  setTemplateData,
  setImageUploadMessage,
  imageUploadMessage,
  imgData,
}) => {
  const [imageCropComplete, setImageCropComplete] = React.useState(false);
  return (
    <div className="mt-4">
      <h6 className="mb-0">Upload an image</h6>
      <p className="mb-2">Upload the background image for your post here.</p>

      <Form.Group controlId="formFile" className="mb-2">
        <Form.Control
          name="image"
          type="file"
          accept="image/jpeg"
          onChange={(e) => {
            uploadImage(e, {
              setImageData,
              setTemplateData,
              setImageUploadMessage,
            });
          }}
        />
      </Form.Group>
      <p className="mb-2 text-secondary small">
        Only <code>.jpeg</code> format images are supported.
      </p>
      {imageUploadMessage.message.length > 0 ? (
        <Alert variant={imageUploadMessage.type}>
          {imageUploadMessage.message}
        </Alert>
      ) : (
        ""
      )}
      {imgData ? (
        !imageCropComplete ? (
          <ImageCropper
            image={imgData}
            setTemplateData={setTemplateData}
            setImageUploadMessage={setImageUploadMessage}
            setImageData={setImageData}
            setImageCropComplete={setImageCropComplete}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageUpload;
