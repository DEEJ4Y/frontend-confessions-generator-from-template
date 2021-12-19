import { useState, useContext } from "react";

import HeadTags from "../../components/headTags";
import FormGroup from "../../components/FormGroup";
import SiteNavbar from "../../components/index/siteNavbar";
import Toast from "../../components/Toast";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";

import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/validatePassword";
import { apiUrl, UserContext } from "../_app";
import getParam from "../../utils/getParam";

const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });

  const [formErrorMessage, setFormErrorMessage] = useState("");

  const [toast, setToast] = useState("");

  let user = useContext(UserContext);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setSignInState((prev) => {
      switch (name) {
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
        default:
          return prev;
      }
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessage = "";

    if (!validateEmail(signInState.email)) {
      isValid = false;
      errorMessage += "Please use a valid email id. ";
    }

    if (!validatePassword(signInState.password)) {
      isValid = false;
      errorMessage += "Password must be at least 8 characters long. ";
    }

    if (!isValid) {
      setFormErrorMessage(() => errorMessage);
    } else {
      signIn();
    }
  };

  const signIn = async () => {
    setToast(() => (
      <Toast
        heading={"Signing you in"}
        body={"Please wait while we sign you in."}
        variant="primary"
        loading
        onClose={() => setToast("")}
      />
    ));
    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signInState.email,
          password: signInState.password,
        }),
      });
      if (res.status == 200) {
        const resData = await res.json();
        if (resData.success === true) {
          user.setUserToken(resData.token);

          let redirectUrl = getParam("redirect");
          window.location.href = redirectUrl || "/dashboard";
        } else {
          setToast(() => (
            <Toast
              heading={"Error!"}
              body={
                "Something went wrong while logging you in. Please try later."
              }
              variant="danger"
              onClose={() => setToast("")}
            />
          ));
        }
      } else if (res.status === 401) {
        setFormErrorMessage(() => "Invalid Credentials");
        setToast(() => <></>);
      }
    } catch (error) {
      console.error(error);
      setToast(() => (
        <Toast
          heading={"Error!"}
          body={"Something went wrong while logging you in. Please try later."}
          variant="danger"
          onClose={() => setToast("")}
        />
      ));
    }
  };

  return (
    <UserContext.Provider value={user}>
      <HeadTags
        title={"Sign In"}
        description={"Sign in and start making templates!"}
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
          <h1 className="mb-4">Sign In</h1>
          <FormGroup
            label="Email"
            placeholder="abc@example.com"
            name="email"
            value={signInState.email}
            onChange={handleFormChange}
          />
          <FormGroup
            label="Password"
            placeholder="must be at least 8 characters long"
            name="password"
            type="password"
            value={signInState.password}
            showButton
            onChange={handleFormChange}
          />
          <p className="text-danger">{formErrorMessage}</p>
          <Button onClick={validateForm}>Sign me in</Button>
        </div>
      </Container>
    </UserContext.Provider>
  );
};

export default SignIn;
