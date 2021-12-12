/* eslint-disable @next/next/no-img-element */

const Renderer = ({
  project,
  dimensions,
  fontSize,
  fontColor,
  lineHeight,
  maxCharacters,
  confession,
}) => {
  const fontVariant = project.template.fontVariant;
  let fontFamily = project.template.fontFamily;
  fontFamily = fontFamily.replace(/\s/g, "+");
  // console.log(fontFamily);
  let fontItalic = false;
  let fontWeight;
  if (fontVariant.includes("italic")) {
    fontItalic = true;

    fontWeight = fontVariant.substring(0, fontVariant.length - 6);
  } else if (fontVariant === "regular") {
    fontWeight = "400";
  } else {
    fontWeight = String(fontVariant);
  }
  // console.log("Font Weight", fontWeight);
  let fontUrl;

  if (fontItalic) {
    fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:ital,wght%40${fontWeight}&display=swap`;
  } else {
    fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght%40${fontWeight}&display=swap`;
  }

  let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean. Amet nisl purus in mollis nunc sed id semper. Scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices gravida. Nunc non blandit massa enim. Purus in mollis nunc sed id semper risus in. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Morbi tempus iaculis urna id volutpat lacus laoreet non. Netus et malesuada fames ac turpis egestas maecenas. At consectetur lorem donec massa sapien faucibus et molestie ac. Cras tincidunt lobortis feugiat viva.`;
  lorem = maxCharacters ? lorem.slice(0, maxCharacters) : lorem.slice(0, 650);

  return (
    <div
      style={{
        background: `no-repeat url(${project.template.backgroundImage.imageData}) 50% / 100%`,
        margin: "0 auto",
        textAlign: "center",
        height: dimensions || "1080px",
        width: dimensions || "1080px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>@import url({"" + fontUrl});</style>
      <img
        src={`${project.template.backgroundImage.imageData}`}
        alt="template background"
        height={dimensions || "1080px"}
        width={dimensions || "1080px"}
        style={{ opacity: "0", position: "absolute" }}
      />
      <p
        className="mb-0"
        style={{
          fontFamily: `"${project.template.fontFamily}", ${
            project.template.fontCategory !== "handwriting"
              ? project.template.fontCategory
              : "cursive"
          }`,
          fontSize: `${fontSize || project.template.fontSize || "22px"}`,
          color: `${fontColor || project.template.fontColor || "black"}`,
          padding: `4rem`,
          lineHeight: lineHeight || project.template.lineHeight || 1.5,
        }}
      >
        {confession || lorem.slice(0, maxCharacters) || lorem.slice(0, 650)}
      </p>
      {/* {JSON.stringify(project.template.id)} */}
    </div>
  );
};

export default Renderer;
