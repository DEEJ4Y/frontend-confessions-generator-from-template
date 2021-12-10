import Button from "react-bootstrap/Button";
import Card from "../../components/Card";
import PostTemplate from "../../components/projects/postTemplate/postTemplate";

export default function Create({ project }) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 my-2">
        <Card>
          {project.id.length > 0 ? <PostTemplate project={project} /> : ""}
        </Card>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 my-2">
        <Card>
          <div>
            <h5 className="d-inline m-0">Website</h5>
            <span className="float-end" style={{ marginTop: "-5px" }}>
              <Button>Add</Button>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}
