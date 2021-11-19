/* eslint-disable @next/next/no-img-element */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useRef } from "react";
import { apiUrl } from "../../../pages/_app";

const Default = ({ project, onAdd, onEdit }) => {
  const [projectD, setProject] = useState(false);
  const getProject = useRef(() => {});
  let imgWidth, imgHeight;

  useEffect(() => {
    getProject.current();
  }, [project]);

  getProject.current = async () => {
    try {
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
    <>
      {projectD.template ? (
        <div>
          <h5 className="d-inline m-0">Post Template</h5>
          <span className="float-end" style={{ marginTop: "-5px" }}>
            <Button onClick={onEdit}>Edit</Button>
          </span>
          {projectD.template.fontFamily ? (
            <h6 className="mb-0 mt-4">
              Selected Font: {projectD.template.fontFamily || ""}
            </h6>
          ) : (
            ""
          )}

          {projectD.template.fontVariant ? (
            <p className="text-secondary small mb-0 ">
              Variant: {projectD.template.fontVariant || ""}
            </p>
          ) : (
            ""
          )}
          <Container fluid className="mt-4">
            {projectD.template.backgroundImage.imageData ? (
              <img
                id="template-bg-get"
                className="img-fluid"
                src={projectD.template.backgroundImage.imageData}
                alt="background-image"
                style={{
                  width: { imgWidth },
                  height: { imgHeight },
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
    </>
  );
};

export default Default;
