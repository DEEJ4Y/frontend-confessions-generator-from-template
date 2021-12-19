import Card from "../../Card";
import Button from "react-bootstrap/Button";
import React from "react";
import PreviewConfession from "./previewConfession";
import { getWebsiteLink } from "../website/default/websiteLink";

export default function Confessions({ project }) {
  const [preview, setPreview] = React.useState(false);
  const [confession, setSelectedConfession] = React.useState(false);
  const [confessionD, setSelectedConfessionD] = React.useState(false);
  const [confessionId, setConfessionId] = React.useState(false);

  let confessions = project.confessions;
  React.useEffect(() => {
    confessions.reverse();
    project.confessions = confessions;
    // console.log(project.confessions);
  }, [confessions, project]);
  return (
    <>
      {preview ? (
        <PreviewConfession
          project={project}
          onPreviewClose={() => {
            setPreview(() => false);
          }}
          confession={confession}
          confessionName={confessionD}
          confessionId={confessionId}
        />
      ) : (
        ""
      )}
      <h5 className="mb-0">Responses</h5>
      <p className="text-secondary">
        <small>Refresh the page for new responses.</small>
      </p>
      {project.confessions.length === 0 ? (
        <h6 className="mb-0">There are no responses as yet.</h6>
      ) : (
        <div>
          <p
            className="text-primary clickable"
            onClick={() => {
              let link = document.createElement("a");
              link.href = getWebsiteLink(project);
              link.target = "_blank";
              link.click();
            }}
          >
            Add a response
          </p>

          {project.confessions.map((confessionData, idx) => {
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
                      setSelectedConfessionD(
                        () => `response-${project.confessions.length - idx}`
                      );
                      setConfessionId(() => confessionData.id);
                      setPreview(() => true);
                    }}
                  >
                    Preview
                  </Button>
                </h6>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
