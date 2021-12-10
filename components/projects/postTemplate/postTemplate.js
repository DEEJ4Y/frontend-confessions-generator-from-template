import { useState, useEffect } from "react";
import deleteTemplate from "../../../services/templates/add/deleteTemplate";
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
          onDelete={() => {
            deleteTemplate({ templateId: project.template.id });
          }}
        />
      ) : (
        ""
      )}
      {viewState === "add" ? (
        <Add
          projectId={project}
          onSave={() => {
            location.reload();
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
