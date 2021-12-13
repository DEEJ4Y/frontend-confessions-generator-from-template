import React from "react";
import Add from "./add/add";
import Default from "./default/default";

const Website = ({ project }) => {
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
      {viewState === "def" ? <Default /> : ""}
      {viewState === "add" ? (
        <Add
          project={project}
          onSave={() => {
            setViewState("def");
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Website;
