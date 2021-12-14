import SelectWebsiteState from "./selectWebsiteState";
import WebsiteLink from "./websiteLink";

const Default = ({ project }) => {
  console.log(project.websiteConfig);

  return (
    <>
      <h5>Details about the website</h5>

      <SelectWebsiteState project={project} />

      <WebsiteLink project={project} />

      {/* <p>{JSON.stringify(project.websiteConfig)}</p> */}
    </>
  );
};

export default Default;
