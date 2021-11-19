import Link from "next/link";
import React, { useContext, useState, useEffect, useRef } from "react";
import { apiUrl, UserContext, ProjectContext } from "./_app";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";

import AppNavbar from "../components/appNavbar";
import Card from "../components/Card";
import HeadTags from "../components/headTags";
import Spinner from "../components/Spinner";
import Toasty from "../components/Toast";

const Dashboard = () => {
  const user = useContext(UserContext);
  const project = useContext(ProjectContext);

  const [projects, setProjects] = useState([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const [toast, setToast] = useState("");

  const getProjects = useRef(() => {});

  useEffect(() => {
    getProjects.current();
  }, []);

  getProjects.current = async () => {
    try {
      setToast(() => {
        return (
          <Toasty
            heading={"Just a sec"}
            body={"Please wait while we fetch your projects."}
            loading
            onClose={() => {
              setToast(() => {
                return "";
              });
            }}
          ></Toasty>
        );
      });
      const res = await fetch(`${apiUrl}/projects`, {
        method: "GET",
        credentials: "include",
      });
      if (res.status == 200) {
        const resData = await res.json();
        // console.log(resData);
        if (resData.success === true) {
          setProjects(() => {
            return resData.data;
          });
          setProjectsLoaded(true);
          setToast("");
          user.setUserToken(resData.userToken);
        }
      } else if (res.status == 401) {
        window.location.href = "/auth/sign-in?redirect=/dashboard";
      }
    } catch (error) {
      setProjectsLoaded(true);

      setToast(() => {
        return (
          <Toasty
            variant={"danger"}
            heading={"Oops!"}
            body={
              "We couldn't fetch your projects. Please refresh the page and we'll try again."
            }
            onClose={() => {
              setToast(() => {
                return "";
              });
            }}
          ></Toasty>
        );
      });
    }
  };

  return (
    <>
      <HeadTags
        title={"Dashboard"}
        description={"Make and manage your templates."}
        robots="nofollow"
      />
      <AppNavbar />
      <Container className="p-4" fluid>
        <ToastContainer position="bottom-end" className="p-4">
          {toast}
        </ToastContainer>
        {projectsLoaded ? (
          projects.length === 0 ? (
            <div className="text-center pt-4">
              <h1 className="mb-4">My Projects</h1>
              <p className="text-secondary">
                Start out by creating a new project.
              </p>
              <Link passHref href={"/projects/create"}>
                <Button size="lg" variant="primary">
                  Create a Project
                </Button>
              </Link>
            </div>
          ) : (
            <div className="pt-4">
              <div className="mb-4">
                <h1 className="mb-4 d-inline">My Projects</h1>
                <span className="float-end">
                  <Link passHref href={"/projects/create"}>
                    <Button>Add</Button>
                  </Link>
                </span>
              </div>
              <div className="row">
                {projects.map((project, idx) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 col-sm-12"
                      key={`dash-project-${idx}`}
                    >
                      <Link
                        passHref
                        href={`/projects/${project.id}/?name=${project.name}`}
                      >
                        <Card
                          className={`my-2`}
                          title={project.name}
                          clickable
                          dataid={project.id}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ) : (
          <Spinner style={{ marginTop: "40vh" }} />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
