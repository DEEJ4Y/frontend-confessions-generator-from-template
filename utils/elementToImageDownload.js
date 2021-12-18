// import * as htmlToImage from "html-to-image";

function getCssRules(styleSheets) {
  var cssRules = [];
  styleSheets.forEach(function (sheet) {
    if (sheet.hasOwnProperty("cssRules")) {
      try {
        util
          .asArray(sheet.cssRules || [])
          .forEach(cssRules.push.bind(cssRules));
      } catch (e) {
        console.log(
          "Error while reading CSS rules from " + sheet.href,
          e.toString()
        );
      }
    }
  });
  return cssRules;
}

export default async function elementToImageDownload({ elementId, fileName }) {
  try {
    console.log(document.getElementById(elementId));
  } catch {
    return false;
  }
}
