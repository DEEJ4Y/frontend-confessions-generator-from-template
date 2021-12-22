import React from "react";
import { useRouter } from "next/router";
import Add from "./add/add";
import Default from "./default/default";

const Website = ({ project }) => {
  const router = useRouter();
  const [viewState, setViewState] = React.useState("def");
  // console.log(project);

  React.useEffect(() => {
    if (project.websiteConfig) {
      setViewState("def");
    } else {
      setViewState("add");
    }
  }, [project.websiteConfig]);

  return (
    <>
      {viewState === "def" && project.websiteConfig ? (
        <Default project={project} />
      ) : (
        ""
      )}
      {viewState === "add" && !project.websiteConfig ? (
        <Add
          project={project}
          onSave={() => {
            router.push(`/projects/${project.id}?name=${project.name}`);
            // setViewState("def");
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Website;
