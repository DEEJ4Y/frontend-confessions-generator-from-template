import React from "react";
import Button from "react-bootstrap/Button";
import downloadConfession from "../../../services/confessionsPage/downloadConfession";
import Renderer from "../postTemplate/renderer";
import slugify from "../../../utils/slugify";
import Card from "../../Card";
import deleteConfession from "../../../services/confessionsPage/deleteConfession";
import { useRouter } from "next/router";

const PreviewConfession = ({
  project,
  onPreviewClose,
  confession,
  confessionName,
  confessionId,
}) => {
  const router = useRouter();
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
        <Card
          className="bg-light text-center mt-4 mx-auto"
          style={{ maxWidth: "1080px" }}
        >
          <Button
            onClick={() => {
              downloadConfession(
                slugify(`${project.name + " " + confessionName}`)
              );
            }}
          >
            Download
          </Button>
          <Button
            variant="danger"
            className="m-4"
            onClick={() => {
              deleteConfession({
                confessionId: confessionId,
                callback: () => {
                  onPreviewClose();
                  router.push(`/projects/${project.id}?name=${project.name}`);
                },
              });
            }}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              onPreviewClose();
            }}
          >
            Close
          </Button>
        </Card>
        {/* {JSON.stringify(project.name)} */}
      </div>
    </div>
  );
};

export default PreviewConfession;
