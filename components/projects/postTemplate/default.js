/* eslint-disable @next/next/no-img-element */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useRef } from "react";
import { apiUrl } from "../../../pages/_app";
import Modale from "../../Modal";
import PreviewTemplate from "./preview";

const Default = ({ project, onAdd, onDelete }) => {
  const projectD = project;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {showPreview ? (
        <PreviewTemplate
          project={project}
          onPreviewClose={() => {
            setShowPreview(false);
          }}
        />
      ) : (
        ""
      )}
      <div id="default-template-container">
        {projectD.template ? (
          <div>
            <h5 className="d-inline m-0">Post Template</h5>
            <span className="float-end" style={{ marginTop: "-5px" }}>
              <Button
                className="mobile-hidden"
                variant="danger"
                onClick={onDelete}
              >
                Delete
              </Button>
            </span>
            <span
              className="float-end"
              style={{ marginTop: "-5px", marginRight: "0.5rem" }}
            >
              <Button
                className="mobile-hidden"
                variant="primary"
                onClick={() => {
                  // document.body.style.overflow = "hidden";
                  setShowPreview(() => true);
                }}
              >
                Preview
              </Button>
            </span>
            {projectD.template.fontFamily ? (
              <h6 className="mb-0 mt-4">
                Selected Font: {projectD.template.fontFamily || ""}
              </h6>
            ) : (
              ""
            )}

            {projectD.template.fontVariant ? (
              <p className="text-secondary small mb-0">
                Variant: {projectD.template.fontVariant || ""}
              </p>
            ) : (
              ""
            )}
            {projectD.template.fontColor ? (
              <p className="text-secondary small mb-0">
                Color:{" "}
                <span style={{ color: projectD.template.fontColor || "" }}>
                  {projectD.template.fontColor || ""}
                </span>
              </p>
            ) : (
              ""
            )}
            {projectD.template.fontSize ? (
              <p className="text-secondary small mb-0">
                Size:{" "}
                <span
                //  style={{ fontSize: projectD.template.fontSize || "" }}
                >
                  {projectD.template.fontSize || ""}
                </span>
              </p>
            ) : (
              ""
            )}
            <div className="text-center">
              <h6 className="mt-4">Uploaded Image</h6>
              <Container fluid className="mt-4">
                {projectD.template.backgroundImage.imageData ? (
                  <img
                    id="template-bg-get"
                    className="img-fluid"
                    src={projectD.template.backgroundImage.imageData}
                    alt="background-image"
                    style={{
                      maxHeight: "16.65rem",
                    }}
                  />
                ) : (
                  ""
                )}
              </Container>
            </div>
          </div>
        ) : (
          <div>
            <h5 className="d-inline m-0">Post Template</h5>
            <span className="float-end" style={{ marginTop: "-5px" }}>
              <Button onClick={onAdd}>Add</Button>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Default;
