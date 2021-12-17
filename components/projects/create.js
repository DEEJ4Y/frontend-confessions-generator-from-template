import Card from "../Card";
import PostTemplate from "./postTemplate/postTemplate";
import Wrapper from "./website/wrapper";

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
          <Wrapper project={project} />
        </Card>
      </div>
    </div>
  );
}
