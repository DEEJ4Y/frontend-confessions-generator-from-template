import React from "react";

const Website = ({ project }) => {
  const [viewState, setViewState] = React.useState("def");
  console.log(project);

  React.useEffect(() => {
    if (project.websiteConfig) {
      setViewState("def");
    } else {
      setViewState("add");
    }
  }, [project.websiteConfig]);

  return (
    <>
      {viewState === "def" ? <h2>Details about the website</h2> : ""}
      {viewState === "add" ? <h2>Add</h2> : ""}
    </>
  );
};

export default Website;
