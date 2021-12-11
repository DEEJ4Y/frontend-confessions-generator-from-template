import Button from "react-bootstrap/Button";
import Renderer from "./renderer";

const PreviewTemplate = ({ project, onPreviewClose }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#00000066",
          overflow: "scroll",
          padding: "5rem",
        }}
      >
        <Renderer project={project} dimensions={"720px"} />

        <Button
          size="lg"
          className="mt-4"
          onClick={() => {
            onPreviewClose();
          }}
        >
          Go back
        </Button>

        {/* {JSON.stringify(project.template.id)} */}
      </div>
    </div>
  );
};

export default PreviewTemplate;
