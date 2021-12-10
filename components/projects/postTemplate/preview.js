import Button from "react-bootstrap/Button";
import Renderer from "./renderer";

const PreviewTemplate = ({ project }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Button></Button>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#00000066",
          overflowX: "hidden",
          overflowY: "scroll",
          padding: "5rem",
        }}
      >
        <Renderer project={project} dimensions={"720px"} />
        {/* {JSON.stringify(project.template.id)} */}
      </div>
    </div>
  );
};

export default PreviewTemplate;
