import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import editTemplate from "../../../services/templates/edit/editTemplate";
import Card from "../../Card";
// import FormGroup from "../../FormGroup";
import FontColorSelect from "./add/FontColorSelect";
import FontSizeSelector from "./add/FontSizeSelector";
import LineHeightSelect from "./preview/lineHeightSelect";
import MaxCharactersSelect from "./preview/maxCharacterSelect";
import Renderer from "./renderer";

const PreviewTemplate = ({ project, onPreviewClose }) => {
  const [projectPreview, setProjectPreview] = React.useState(project);

  let postDimensions = "1080px";

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#00000066",
          overflowY: "scroll",
          padding: "5rem",
          zIndex: 10,
        }}
      >
        <Renderer
          project={projectPreview}
          dimensions={postDimensions}
          fontSize={projectPreview.template.fontSize}
          fontColor={projectPreview.template.fontColor}
          lineHeight={projectPreview.template.lineHeight}
          maxCharacters={
            projectPreview.maxCharacters ||
            projectPreview.template.maxCharacters
          }
        />

        <Container fluid style={{ maxWidth: postDimensions, padding: "0" }}>
          <Card className={"bg-light mt-4"}>
            <FontSizeSelector
              prevData={projectPreview.template.fontSize}
              setTemplateData={setProjectPreview}
            />

            <LineHeightSelect
              prevData={projectPreview.template.lineHeight}
              setValue={setProjectPreview}
            />

            <MaxCharactersSelect
              prevData={projectPreview.template.maxCharacters}
              setValue={setProjectPreview}
            />

            <FontColorSelect
              prevData={projectPreview.template.fontColor}
              setTemplateData={setProjectPreview}
            />

            <Button
              className="mt-4"
              onClick={() => {
                editTemplate({
                  templateId: projectPreview.template.id,
                  reqBody: {
                    fontSize:
                      projectPreview.fontSize ||
                      projectPreview.template.fontSize,
                    fontColor:
                      projectPreview.fontColor ||
                      projectPreview.template.fontColor,
                    lineHeight:
                      projectPreview.lineHeight ||
                      projectPreview.template.lineHeight,
                    maxCharacters:
                      projectPreview.maxCharacters ||
                      projectPreview.template.maxCharacters,
                  },
                });
                onPreviewClose();
              }}
            >
              Save
            </Button>
            <Button
              variant="outline-primary"
              className="mt-4 ms-2"
              onClick={() => {
                onPreviewClose();
              }}
            >
              Cancel
            </Button>
          </Card>
        </Container>

        {/* {JSON.stringify(project.name)} */}
      </div>
    </div>
  );
};

export default PreviewTemplate;
