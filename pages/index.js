import Cta from "../components/index/cta/cta";
import Footer from "../components/index/footer/footer";
import SiteNavbar from "../components/index/siteNavbar";
import ThreeStepSetup from "../components/index/three-step-setup/three-step-setup";
import Title from "../components/index/title/title";
import HeadTags from "../components/headTags";

export default function Home() {
  return (
    <>
      <HeadTags
        title={"socialautopost"}
        description={
          "Tired of copy-pasting text into photoshop and exporting the image? socialautopost is for you! Automatically generate post images from follower created content."
        }
        url={"deej4y.github.io"}
        image={"https://socialautopost.herokuapp.com/socialautopost.png"}
      />
      <SiteNavbar />
      <Title />
      <ThreeStepSetup />
      <Cta />
      <Footer />
    </>
  );
}
