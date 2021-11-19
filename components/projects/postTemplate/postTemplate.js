import { useState, useEffect } from "react";
import Add from "./add";
import Default from "./default";

const PostTemplate = ({ project }) => {
  const [viewState, setViewState] = useState("def");

  return (
    <>
      {viewState === "def" ? (
        <Default
          project={project}
          onAdd={() => {
            setViewState(() => "add");
          }}
        />
      ) : (
        ""
      )}
      {viewState === "add" ? (
        <Add
          projectId={project}
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

export default PostTemplate;
