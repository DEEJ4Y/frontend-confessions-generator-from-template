import React from "react";
import Button from "react-bootstrap/Button";
import elementToImageDownload from "../../../utils/elementToImageDownload";
import Renderer from "../postTemplate/renderer";

const PreviewConfession = ({
  project,
  onPreviewClose,
  confession,
  confessionName,
}) => {
  const [projectPreview, setProjectPreview] = React.useState(project);
  let postDimensions = "1080px";
  var body = document.body,
    html = document.documentElement;
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: `${Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
          )}px`,
          backgroundColor: "#00000066",
          overflowY: "scroll",
          overflowX: "hidden",
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
          confession={confession}
        />
        <Button
          variant="secondary"
          className="mt-4 me-2"
          onClick={() => {
            onPreviewClose();
          }}
        >
          Close
        </Button>
        <Button
          className="mt-4"
          onClick={() => {
            elementToImageDownload({
              elementId: "confession-renderer",
              fileName: `${confessionName}`,
            });
          }}
        >
          Download
        </Button>
        {/* {JSON.stringify(project.name)} */}
      </div>
    </div>
  );
};

export default PreviewConfession;
