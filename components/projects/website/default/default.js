import React from "react";
import DeleteButton from "./deleteButton";
import SaveButton from "./saveButton";
import SelectWebsiteState from "./selectWebsiteState";
import TitleAndMessage from "./titleAndMessage";
import WebsiteLink from "./websiteLink";

const Default = ({ project }) => {
  const [websiteConfig, setWebsiteConfig] = React.useState(
    project.websiteConfig
  );

  const [originalWebsiteConfig, setOriginalWebsiteConfig] = React.useState(
    project.websiteConfig
  );

  // console.log(websiteConfig);
  return (
    <>
      <h5 className="pb-4">
        Details about the website{" "}
        <DeleteButton
          websiteConfigId={originalWebsiteConfig.id}
          projectId={project.id}
        />
      </h5>

      <SelectWebsiteState project={project} />

      <WebsiteLink project={project} />

      <TitleAndMessage
        websiteConfig={websiteConfig}
        setWebsiteConfig={setWebsiteConfig}
      />

      <SaveButton
        prevState={originalWebsiteConfig}
        newState={websiteConfig}
        project={project}
      />

      {/* <p>{JSON.stringify(project.websiteConfig)}</p> */}
    </>
  );
};

export default Default;
