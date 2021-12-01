/* eslint-disable @next/next/no-img-element */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useRef } from "react";
import { apiUrl } from "../../../pages/_app";

const Default = ({ project, onAdd, onDelete }) => {
  const [projectD, setProject] = useState(false);
  const getProject = useRef(() => {});
  let templateContainer = {};

  useEffect(() => {
    getProject.current();
  }, [project]);

  getProject.current = async () => {
    try {
      templateContainer = document
        .getElementById("default-template-container")
        .getBoundingClientRect();
      // console.log(projectId);
      const res = await fetch(`${apiUrl}/projects/${project.id}`, {
        credentials: "include",
      });

      if (res.status === 200 || res.status === 201) {
        const resData = await res.json();
        setProject(() => resData.data);
        // console.log(projectD);
        // console.log(resData.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id="default-template-container">
      {projectD.template ? (
        <div>
          <h5 className="d-inline m-0">Post Template</h5>
          <span className="float-end" style={{ marginTop: "-5px" }}>
            <Button variant="danger" onClick={onDelete}>
              Delete
            </Button>
          </span>
          <span
            className="float-end"
            style={{ marginTop: "-5px", marginRight: "0.5rem" }}
          >
            <Button variant="primary" onClick={onDelete}>
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
          <h6 className="mt-4">Uploaded Image:</h6>
          <Container fluid className="mt-4">
            {projectD.template.backgroundImage.imageData ? (
              <img
                id="template-bg-get"
                className="img-fluid"
                src={projectD.template.backgroundImage.imageData}
                alt="background-image"
                style={{
                  width: templateContainer.offsetWidth,
                  height: templateContainer.offsetHeight,
                }}
              />
            ) : (
              ""
            )}
          </Container>
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
  );
};

export default Default;
