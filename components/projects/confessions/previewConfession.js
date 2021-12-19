import React from "react";
import Button from "react-bootstrap/Button";
import downloadConfession from "../../../services/confessionsPage/downloadConfession";
import Renderer from "../postTemplate/renderer";
import slugify from "../../../utils/slugify";

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
          overflow: "scroll",
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
          className="mt-4"
          onClick={() => {
            downloadConfession(
              slugify(`${project.name + " " + confessionName}`)
            );
          }}
        >
          Download
        </Button>
        <Button
          variant="secondary"
          className="mt-4 ms-2"
          onClick={() => {
            onPreviewClose();
          }}
        >
          Close
        </Button>
        {/* {JSON.stringify(project.name)} */}
      </div>
    </div>
  );
};

export default PreviewConfession;
