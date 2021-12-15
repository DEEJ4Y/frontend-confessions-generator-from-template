import React from "react";
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
      <h5>Details about the website</h5>

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
