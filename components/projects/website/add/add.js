import React from "react";
import router from "next/router";
import Button from "react-bootstrap/Button";
import SetText from "./setText";
import SetFontColor from "./setFontColor";
import ImageUpload from "../../postTemplate/add/ImageUpload";
import addWebsiteConfigAndSave from "../../../../services/websiteConfig/addWebsiteConfigAndSave";

export default function Add({ project, onSave }) {
  const router = useRouter();
  const [websiteConfig, setWebsiteConfig] = React.useState({
    project: project.id,
    title: "",
    titleFontColor: "#000000",
    message: "Start typing here",
    messageFontColor: "#000000",
    backgroundImage: "",
  });

  const [imgData, setImageData] = React.useState("");
  const [imageUploadMessage, setImageUploadMessage] = React.useState({
    message: "",
    type: "",
  });

  return (
    <>
      <h5>Setup Your Website</h5>

      <SetText
        setState={setWebsiteConfig}
        property={"title"}
        propertyDisplayName={"Heading"}
        message={"This will be the heading of your page."}
        placeholder={"My Confessions page"}
      />

      <SetFontColor
        setState={setWebsiteConfig}
        property={"titleFontColor"}
        propertyDisplayName={"heading"}
      />

      <SetText
        setState={setWebsiteConfig}
        property={"message"}
        propertyDisplayName={"Message"}
        message={"This will be your message for the user."}
        placeholder={"Start typing your confession here!"}
      />

      <SetFontColor
        setState={setWebsiteConfig}
        property={"messageFontColor"}
        propertyDisplayName={"message"}
      />

      <ImageUpload
        setImageData={setImageData}
        setTemplateData={setWebsiteConfig}
        setImageUploadMessage={setImageUploadMessage}
        imageUploadMessage={imageUploadMessage}
        imgData={imgData}
        templateData={websiteConfig}
        imgAspect={16 / 9}
      />

      <div className="mt-4" style={{ height: "2.25rem" }}>
        <Button
          className="float-end"
          onClick={() => {
            addWebsiteConfigAndSave({
              websiteConfig: { ...websiteConfig },
              onSave,
              setImageUploadMessage,
              projectId: project.id,
              router: router,
            });
          }}
        >
          Save
        </Button>
      </div>
    </>
  );
}
