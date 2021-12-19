import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";

import HeadTags from "../../../components/headTags";
import AppNavbar from "../../../components/appNavbar";
import FormGroup from "../../../components/FormGroup";
import Toast from "../../../components/Toast";
import React, { useContext, useState } from "react";
import { apiUrl, UserContext } from "../../_app";

import { useRouter } from "next/router";
import getProjectById from "../../../services/projects/getProjectById";
import editProjectById from "../../../services/projects/editProject";

const EditTemplate = () => {
  const router = useRouter();
  const [project, setProject] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");
  const [formErrorMessage, setFormErrorMessage] = React.useState("");

  const [toast, setToast] = React.useState("");

  const user = React.useContext(UserContext);

  const validateForm = () => {
    let errorMessage = "";
    let isValid = true;

    if (projectName.length < 1) {
      isValid = false;
      errorMessage += "Please add a name for your project. ";
    }

    if (!isValid) {
      setFormErrorMessage(errorMessage);
    } else {
      editProjectById(project.id, { name: projectName }, () => {
        window.location.href = `/projects/${project.id}`;
      });
    }
  };

  const getProject = React.useRef(() => {});

  React.useEffect(() => {
    if (router && router.query) {
      const { projectId } = router.query;
      getProject.current(projectId);
    }
  }, [router, router.query]);

  getProject.current = async (projectId) => {
    if (projectId) {
      getProjectById(projectId, (data) => {
        setProject(() => data.data);
        setProjectName(() => data.data.name);
      });
    }
  };

  return (
    <>
      <ToastContainer position="bottom-end" className="p-4">
        {toast}
      </ToastContainer>
      <HeadTags
        title={"Edit a Project"}
        description={"Make and manage your templates."}
        robots="nofollow"
      />

      <AppNavbar />
      <Container className="p-4" fluid>
        <div
          className="shadow border border-primary rounded mt-4 mx-auto p-4"
          style={{ maxWidth: "32rem" }}
        >
          <h1 className="mb-4">Edit Project</h1>
          <p className="text-secondary">
            Editing your project will update your website link. Be sure to
            update your links after editing.
          </p>
          <FormGroup
            label="Name"
            placeholder="My Confessions Page"
            name="name"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
          <p className="text-danger">{formErrorMessage}</p>
          <Button onClick={validateForm}>Edit project</Button>
        </div>
      </Container>
    </>
  );
};

export default EditTemplate;
