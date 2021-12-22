import React from "react";
import Button from "react-bootstrap/Button";
import updateWebsiteVisibility from "../../../../services/websiteConfig/updateWebsiteVisibility";
import { useRouter } from "next/router";

export default function SelectWebsiteState({ project }) {
  const router = useRouter();
  const [websiteState, setWebsiteState] = React.useState(
    project.websiteConfig.visibility || false
  );

  const handleClick = () => {
    setWebsiteState((prev) => {
      updateWebsiteVisibility({
        newVisibility: !websiteState,
        websiteConfigId: project.websiteConfig.id,
        project: project,
        router: router,
      });
      return !prev;
    });
  };

  return (
    <>
      <h6 className="mt-4">
        Website visibility: <em>{websiteState ? "visible" : "not visible"}</em>
        <span className="float-end">
          <Button size="sm" onClick={handleClick} style={{ marginTop: "-8px" }}>
            Turn {websiteState ? "off" : "on"}
          </Button>
        </span>
      </h6>
    </>
  );
}
