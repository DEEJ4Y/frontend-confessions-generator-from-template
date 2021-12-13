import Card from "../Card";
import PostTemplate from "./postTemplate/postTemplate";
import Website from "./website/website";

export default function Create({ project }) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 my-2">
        <Card>
          {project.id.length > 0 ? <PostTemplate project={project} /> : ""}
        </Card>
      </div>
      {project.template ? (
        <div className="col-lg-6 col-md-6 col-sm-12 my-2">
          <Card>
            <Website project={project} />
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
