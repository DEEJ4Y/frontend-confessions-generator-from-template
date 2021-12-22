import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";

import HeadTags from "../../components/headTags";
import AppNavbar from "../../components/appNavbar";
import FormGroup from "../../components/FormGroup";
import Toast from "../../components/Toast";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { apiUrl, UserContext } from "../_app";

const CreateTemplate = () => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const [toast, setToast] = useState("");

  const user = useContext(UserContext);

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
      createProject();
    }
  };

  const createProject = async () => {
    setToast(() => (
      <Toast
        heading="Creating Project"
        body="Please wait while we create the project for you."
        variant={"primary"}
        loading
        onClose={() => setToast("")}
      />
    ));
    try {
      const res = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: projectName,
        }),
      });
      if (res.status == 201 || res.status == 200) {
        const resData = await res.json();
        if (resData.success === true) {
          user.setUserToken(resData.userToken);
          router.push("/dashboard");
        }
      } else if (res.status == 401) {
        router.push("/auth/signin?redirect=/projects/create");
      } else {
        setToast(
          <Toast
            heading={"Oops!"}
            body={
              "Something went wrong while creating your project. Please try again."
            }
            variant="danger"
            onClose={() => setToast("")}
          />
        );
      }
    } catch (error) {
      console.error(error);
      setToast(
        <Toast
          heading={"Oops!"}
          body={
            "Something went wrong while creating your project. Please try again."
          }
          variant="danger"
          onClose={() => setToast("")}
        />
      );
    }
  };

  return (
    <>
      <ToastContainer position="bottom-end" className="p-4">
        {toast}
      </ToastContainer>
      <HeadTags
        title={"Create a Project"}
        description={"Make and manage your templates."}
        robots="nofollow"
      />

      <AppNavbar />
      <Container className="p-4" fluid>
        <div
          className="shadow border border-primary rounded mt-4 mx-auto p-4"
          style={{ maxWidth: "32rem" }}
        >
          <h1 className="mb-4">Create Project</h1>
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
          <Button onClick={validateForm}>Create project</Button>
        </div>
      </Container>
    </>
  );
};

export default CreateTemplate;
