import { useRouter } from "next/router";
import { useRef, useState, useEffect, useContext } from "react";
import Toast from "../../components/Toast";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";
import { apiUrl, ProjectContext } from "../_app";
import HeadTags from "../../components/headTags";
import Spinner from "../../components/spinner";
import AppNavbar from "../../components/appNavbar";
import Card from "../../components/Card";
import PostTemplate from "../../components/projects/postTemplate/postTemplate";

const GetProject = () => {
  const router = useRouter();

  const projectContext = useContext(ProjectContext);

  const [project, setProject] = useState(false);

  const [toast, setToast] = useState("");

  const getProject = useRef(() => {});

  useEffect(() => {
    if (router && router.query) {
      const { projectId } = router.query;
      getProject.current(projectId);
    }
  }, [router, router.query]);

  getProject.current = async (projectId) => {
    setToast(() => {
      return (
        <Toast
          heading={"Just a sec"}
          body={"Please wait while we fetch your project."}
          loading
          onClose={setToast("")}
        />
      );
    });
    try {
      const res = await fetch(`${apiUrl}/projects/${projectId}`, {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 200) {
        const resData = await res.json();
        if (resData.success === true) {
          console.log(resData);
          projectContext.setProjectId(resData.data.id);
          setProject(() => resData.data);
          setToast("");
        }
      } else if (res.status == 401) {
        window.location.href = `/auth/sign-in?redirect=/dashboard`;
      } else {
        setToast(() => {
          return (
            <Toast
              variant={"danger"}
              heading={"Oops!"}
              body={
                "We couldn't fetch your project. Please refresh the page and we'll try again."
              }
              onClose={() => {
                setToast(() => {
                  return "";
                });
              }}
            />
          );
        });
      }
    } catch (err) {
      setToast(() => {
        return (
          <Toast
            variant={"danger"}
            heading={"Oops!"}
            body={
              "We couldn't fetch your project. Please refresh the page and we'll try again."
            }
            onClose={() => {
              setToast(() => {
                return "";
              });
            }}
          />
        );
      });
    }
  };

  return (
    <>
      <AppNavbar />
      <ToastContainer position="bottom-end" className="p-4">
        {toast}
      </ToastContainer>
      <HeadTags
        title={"My Project"}
        description={"Manage your automatic post generator."}
        robots={"nofollow"}
      />
      <Container fluid className="p-4">
        {project ? (
          <div>
            <h1>{project.name}</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                <Card>
                  {project.id.length > 0 ? (
                    <PostTemplate project={project} />
                  ) : (
                    ""
                  )}
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                <Card>
                  <div>
                    <h5 className="d-inline m-0">Website</h5>
                    <span className="float-end" style={{ marginTop: "-5px" }}>
                      <Button>Add</Button>
                    </span>
                  </div>
                </Card>
              </div>
            </div>
            {/* <p>{JSON.stringify(project)}</p> */}
          </div>
        ) : (
          <Spinner style={{ marginTop: "40vh" }} />
        )}
      </Container>
    </>
  );
};

export default GetProject;
