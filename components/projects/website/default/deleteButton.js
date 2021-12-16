import Button from "react-bootstrap/Button";
import deleteWebsiteConfig from "../../../../services/websiteConfig/deleteWebsiteConfig";

export default function DeleteButton({ websiteConfigId, projectId }) {
  return (
    <span className="float-end">
      <Button
        variant="danger"
        style={{ marginTop: "-4px" }}
        onClick={() => {
          deleteWebsiteConfig({ websiteConfigId, projectId });
        }}
      >
        Delete
      </Button>
    </span>
  );
}
