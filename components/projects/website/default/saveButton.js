import Button from "react-bootstrap/Button";
import updateWebsiteConfig from "../../../../services/websiteConfig/updateWebsiteConfig";
import { useRouter } from "next/router";

export default function SaveButton({ prevState, newState, project }) {
  return (
    <>
      {newState !== prevState ? (
        <div className="mt-4" style={{ height: "2.25rem" }}>
          <Button
            className="float-end"
            onClick={() => {
              updateWebsiteConfig({
                reqBody: newState,
                websiteConfigId: prevState.id,
                project: project,
                router: router,
              });
            }}
          >
            Save
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
