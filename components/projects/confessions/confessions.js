import Card from "../../Card";
import Button from "react-bootstrap/Button";
import React from "react";
import PreviewConfession from "./previewConfession";

export default function Confessions({ project }) {
  const [preview, setPreview] = React.useState(false);
  const [confession, setSelectedConfession] = React.useState(false);

  let confessions = project.confessions;
  React.useEffect(() => {
    confessions.reverse();
    project.confessions = confessions;
    console.log(project.confessions);
  }, [confessions, project]);
  return (
    <>
      {preview ? (
        <PreviewConfession
          project={project}
          onPreviewClose={() => {
            document.body.style.overflowY = "scroll";

            setPreview(() => false);
          }}
          confession={confession}
        />
      ) : (
        ""
      )}
      <h5>Responses</h5>
      {project.confessions.length === 0 ? (
        <h6 className="mb-0">There are no responses as yet.</h6>
      ) : (
        project.confessions.map((confessionData, idx) => {
          return (
            <Card
              key={`confession-${project.confessions.length - idx}`}
              className={"mb-2"}
            >
              <h6 className="mb-0">
                Response {project.confessions.length - idx}
                <Button
                  size="sm"
                  className="float-end mobile-hidden"
                  style={{ marginTop: "-6px" }}
                  onClick={() => {
                    setSelectedConfession(() => confessionData.confession);
                    setPreview(() => true);
                    // document.body.style.overflow = "hidden";
                  }}
                >
                  Preview
                </Button>
              </h6>
            </Card>
          );
        })
      )}
    </>
  );
}
