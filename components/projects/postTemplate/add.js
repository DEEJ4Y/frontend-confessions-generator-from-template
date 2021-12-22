import { useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import selectFont from "../../../services/templates/add/selectFont";
import addTemplateAndSave from "../../../services/templates/add/addTemplateAndSave";
import FontAndHeading from "./add/FontAndHeading";
import QueryResults from "./add/QueryResults";
import FontVariantSelect from "./add/FontVariantSelect";
import ImageUpload from "./add/ImageUpload";
import FontSizeSelector from "./add/FontSizeSelector";
import FontColorSelect from "./add/FontColorSelect";

const Add = ({ projectId, onSave }) => {
  const router = useRouter();
  const [templateData, setTemplateData] = useState({
    project: projectId.id,
    fontData: {},
    fontFamily: "",
    fontVariant: "regular",
    fontFile: "",
    fontSize: "22px",
    fontColor: "black",
    fontCategory: "",
    backgroundImage: "",
  });
  const [imgData, setImageData] = useState("");

  const [fontQuery, setFontQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const [imageUploadMessage, setImageUploadMessage] = useState({
    message: "",
    type: "",
  });

  return (
    <>
      <div>
        <FontAndHeading
          fontQuery={fontQuery}
          setFontQuery={setFontQuery}
          setQueryResults={setQueryResults}
        />

        <QueryResults
          queryResults={queryResults}
          selectFont={selectFont}
          setTemplateData={setTemplateData}
          setFontQuery={setFontQuery}
          setQueryResults={setQueryResults}
        />

        <FontVariantSelect
          templateData={templateData}
          setTemplateData={setTemplateData}
        />

        <FontSizeSelector setTemplateData={setTemplateData} />

        <FontColorSelect setTemplateData={setTemplateData} />

        <ImageUpload
          setImageData={setImageData}
          setTemplateData={setTemplateData}
          setImageUploadMessage={setImageUploadMessage}
          imageUploadMessage={imageUploadMessage}
          imgData={imgData}
          templateData={templateData}
        />
        <div className="mt-4" style={{ height: "2.25rem" }}>
          <Button
            className="float-end"
            onClick={() => {
              addTemplateAndSave({
                templateData: { ...templateData },
                onSave,
                setImageUploadMessage,
                projectId,
                router,
              });
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Add;
