import Link from "next/link";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useState } from "react";
import { apiUrl } from "../pages/_app";
import Toast from "./Toast";

const AppNavbar = () => {
  const [toast, setToast] = useState("");

  const logout = async () => {
    setToast(() => (
      <Toast
        heading={"Logging you out"}
        body={"Please wait while we create an account for you."}
        variant="primary"
        loading
        onClose={() => setToast("")}
      />
    ));
    try {
      const res = await fetch(`${apiUrl}/auth/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await res.json();
      if (resData.success === true) {
        window.location.href = "/auth/sign-in";
      }
    } catch (error) {
      console.error(error);
      setToast(() => (
        <Toast
          heading={"Error!"}
          body={
            "Something went wrong while logging you out. Please try again later."
          }
          variant="danger"
          onClose={() => setToast("")}
        />
      ));
    }
  };
  return (
    <>
      <ToastContainer position="bottom-end" className="p-4">
        {toast}
      </ToastContainer>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">socialautopost</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link passHref href="/dashboard">
                <Nav.Link>My Projects</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Button variant="outline-primary" onClick={logout}>
                  Log out
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
