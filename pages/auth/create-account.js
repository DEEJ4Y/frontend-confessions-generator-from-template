import { useContext, useState } from "react";

import HeadTags from "../../components/headTags";
import FormGroup from "../../components/FormGroup";
import Toast from "../../components/Toast";
import SiteNavbar from "../../components/siteNavbar";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";

import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/validatePassword";
import { apiUrl, UserContext } from "../_app";

const CreateAccount = () => {
  const [createAccountState, setCreateAccountState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrorMessage, setFormErrorMessage] = useState("");

  const [toast, setToast] = useState("");

  let user = useContext(UserContext);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setCreateAccountState((prev) => {
      switch (name) {
        case "name":
          return {
            ...prev,
            name: value,
          };
        case "email":
          return {
            ...prev,
            email: value,
          };
        case "password":
          return {
            ...prev,
            password: value,
          };
        case "confirmPassword":
          return {
            ...prev,
            confirmPassword: value,
          };
        default:
          return prev;
      }
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessage = "";

    if (!createAccountState.name.length > 0) {
      isValid = false;
      errorMessage += "Please fill in your name. ";
    }

    if (!validateEmail(createAccountState.email)) {
      isValid = false;
      errorMessage += "Please use a valid email id. ";
    }

    if (!validatePassword(createAccountState.password)) {
      isValid = false;
      errorMessage += "Password must be at least 8 characters long. ";
    }

    if (createAccountState.confirmPassword !== createAccountState.password) {
      isValid = false;
      errorMessage += "Confirm password must match your password. ";
    }

    if (!isValid) {
      setFormErrorMessage(() => errorMessage);
    } else {
      createAccount();
    }
  };

  const createAccount = async () => {
    setToast(() => (
      <Toast
        heading={"Creating Account"}
        body={"Please wait while we create an account for you."}
        variant="primary"
        onClose={() => setToast("")}
        loading
      />
    ));
    try {
      const res = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: createAccountState.name,
          email: createAccountState.email,
          password: createAccountState.password,
        }),
      });
      if (res.status == 201 || res.status == 200) {
        const resData = await res.json();
        if (resData.success === true) {
          user.setUserToken(resData.token);
          window.location.href = "/dashboard";
        }
      } else {
        <Toast
          heading={"Error!"}
          body={
            "Something went wrong while creating your account. Please try later."
          }
          variant="danger"
          onClose={() => setToast("")}
        />;
      }
    } catch (error) {
      console.error(error);
      setToast(() => (
        <Toast bg="danger" onClose={() => setToast("")}>
          <Toast.Header>
            <strong className="me-auto">Error!</strong>
          </Toast.Header>
          <Toast.Body className="text-light">
            Something went wrong while creating your account. Please try later.
          </Toast.Body>
        </Toast>
      ));
    }
  };

  return (
    <>
      <HeadTags
        title={"Create an Account"}
        description={"Create an account and start making templates!"}
      />
      <SiteNavbar />
      <ToastContainer position="bottom-end" className="p-4">
        {toast}
      </ToastContainer>
      <Container fluid>
        <div
          className="shadow border border-primary rounded mt-4 mx-auto p-4"
          style={{ maxWidth: "32rem" }}
        >
          <h1 className="mb-4">Create Account</h1>
          <FormGroup
            label="Full Name"
            placeholder="John Doe"
            name="name"
            value={createAccountState.name}
            onChange={handleFormChange}
          />
          <FormGroup
            label="Email"
            placeholder="abc@example.com"
            name="email"
            value={createAccountState.email}
            onChange={handleFormChange}
          />
          <FormGroup
            label="Password"
            placeholder="must be at least 8 characters long"
            name="password"
            type="password"
            value={createAccountState.password}
            showButton
            onChange={handleFormChange}
          />
          <FormGroup
            label="Confirm Password"
            placeholder="must match your password"
            name="confirmPassword"
            type="password"
            value={createAccountState.confirmPassword}
            showButton
            onChange={handleFormChange}
          />
          <p className="text-danger">{formErrorMessage}</p>
          <Button onClick={validateForm}>Create my account</Button>
        </div>
      </Container>
    </>
  );
};

export default CreateAccount;
