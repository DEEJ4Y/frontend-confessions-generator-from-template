import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import slugify from "../../../../utils/slugify";
import React from "react";
import copyToClipboard from "../../../../utils/copyToClipboard";

export default function WebsiteLink({ project }) {
  const [copiedLink, setCopiedLink] = React.useState(false);
  let projectLink = `http://localhost:3000/anonymous/${slugify(project.name)}/${
    project.websiteConfig.id
  }`;
  return (
    <>
      <h6 className="mt-4 mb-1">
        Link to your website{" "}
        <span className="float-end text-small text-success">
          {copiedLink ? "Copied!" : ""}
        </span>
      </h6>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          disabled
          value={projectLink}
          // style={{ zIndex: -1 }}
        />
        <Button
          variant="outline-primary"
          id="button-addon2"
          onClick={() => {
            copyToClipboard(projectLink);
            setCopiedLink(() => true);
            setTimeout(() => {
              setCopiedLink(() => false);
            }, 3000);
          }}
          // style={{ zIndex: 1 }}
        >
          Copy{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-link-45deg"
            viewBox="0 0 16 16"
          >
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
        </Button>
      </InputGroup>
    </>
  );
}
