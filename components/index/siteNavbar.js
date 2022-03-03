/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const SiteNavbar = () => {
  return (
    <div className="shadow-sm">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Link passHref href="/">
            <Navbar.Brand>
              <img
                src="/socialautopost.png"
                alt="logo"
                className="img-fluid"
                style={{ mixBlendMode: "multiply" }}
              ></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/dashboard">My Templates</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Link passHref href="/auth/create-account">
                <Nav.Link>
                  <Button variant="primary">Sign Up</Button>
                </Nav.Link>
              </Link>
              <Link passHref href="/auth/sign-in">
                <Nav.Link>
                  <Button variant="outline-primary">Sign In</Button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default SiteNavbar;
