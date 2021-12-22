import { useState } from "react";
import { useRouter } from "next/router";
import deleteTemplate from "../../../services/templates/add/deleteTemplate";
import Add from "./add";
import Default from "./default";

const PostTemplate = ({ project }) => {
  const router = useRouter();
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
            deleteTemplate({
              templateId: project.template.id,
              router: router,
              project: project,
            });
          }}
        />
      ) : (
        ""
      )}
      {viewState === "add" ? (
        <Add
          projectId={project}
          onSave={() => {
            router.push(`/projects/${project.id}?name=${project.name}`);
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
