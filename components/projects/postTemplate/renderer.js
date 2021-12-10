/* eslint-disable @next/next/no-img-element */

const Renderer = ({ project, dimensions }) => {
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
          fontSize: `${project.template.fontSize || "22px"}`,
          color: `${project.template.fontColor || "black"}`,
          padding: `4rem`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        posuere dapibus sodales. In eu nibh sed enim ultrices tincidunt. Ut
        porta, tortor id pharetra aliquet, dui enim gravida quam, at venenatis
        ante diam et eros. Proin pharetra fringilla cursus. Nunc iaculis
        interdum eros. Phasellus quis elementum lacus. Ut vitae leo dictum,
        euismod neque vitae, tincidunt arcu. Morbi tincidunt lobortis eros eu
        finibus. Vestibulum at mauris cursus, luctus purus ut, hendrerit sapien.
        Praesent iaculis id neque nec vestibulum. Nam vel felis velit. Mauris
        quis lorem euismod, bibendum tellus consectetur, placerat urna. Nulla
        vel ornare ligula. Nam nunc magna, molestie eget volutpat pretium,
        finibus vitae eros. Phasellus ac metus eu tortor porttitor tristique vel
        a dolor.
      </p>
    </div>
  );
};

export default Renderer;
