import React from "react";
import Button from "react-bootstrap/Button";
import Website from "./website";

export default function Wrapper({ project }) {
  let websiteConfig = project.websiteConfig || false;
  const [showWebsiteSetup, setShowWebsiteSetup] = React.useState(websiteConfig);
  return (
    <>
      {showWebsiteSetup ? (
        <Website project={project} />
      ) : (
        <h5 className="mb-0">
          Setup your website
          <Button
            className="float-end"
            style={{ marginTop: "-7px" }}
            onClick={() => {
              setShowWebsiteSetup(() => true);
            }}
          >
            Start
          </Button>
        </h5>
      )}
    </>
  );
}
