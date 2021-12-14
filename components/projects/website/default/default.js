import WebsiteLink from "./websiteLink";

const Default = ({ project }) => {
  return (
    <>
      <h5>Details about the website</h5>

      <WebsiteLink project={project} />
      <p>{JSON.stringify(project.websiteConfig)}</p>
    </>
  );
};

export default Default;
