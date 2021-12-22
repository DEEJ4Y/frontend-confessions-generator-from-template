import Button from "react-bootstrap/Button";
import deleteWebsiteConfig from "../../../../services/websiteConfig/deleteWebsiteConfig";
import { useRouter } from "next/router";

export default function DeleteButton({ websiteConfigId, projectId }) {
  const router = useRouter();
  return (
    <span className="float-end">
      <Button
        variant="danger"
        style={{ marginTop: "-4px" }}
        onClick={() => {
          deleteWebsiteConfig({
            websiteConfigId,
            projectId,
            router: router,
            projectId: projectId,
          });
        }}
      >
        Delete
      </Button>
    </span>
  );
}
