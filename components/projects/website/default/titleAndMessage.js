import SetFontColor from "../add/setFontColor";
import SetText from "../add/setText";

export default function TitleAndMessage({ websiteConfig, setWebsiteConfig }) {
  return (
    <>
      <SetText
        setState={setWebsiteConfig}
        property={"title"}
        propertyDisplayName={"Website Title"}
        prevState={websiteConfig.title}
      />

      <SetFontColor
        setState={setWebsiteConfig}
        property={"titleFontColor"}
        propertyDisplayName={"Website Title Font"}
        prevState={websiteConfig.titleFontColor}
      />

      <SetText
        setState={setWebsiteConfig}
        property={"message"}
        propertyDisplayName={"Website Message"}
        prevState={websiteConfig.message}
      />

      <SetFontColor
        setState={setWebsiteConfig}
        property={"messageFontColor"}
        propertyDisplayName={"Website Message Font"}
        prevState={websiteConfig.messageFontColor}
      />
    </>
  );
}
