const selectFont = ({
  fontData,
  setTemplateData,
  setFontQuery,
  setQueryResults,
}) => {
  setTemplateData((prev) => {
    if (fontData.variants.length < 2) {
      return {
        ...prev,
        fontData: fontData,
        fontFamily: fontData.family,
        fontVariant: fontData.variants[0],
        fontFile: fontData.files["regular"],
        fontCategory: fontData.category,
      };
    } else {
      return {
        ...prev,
        fontData: fontData,
        fontFamily: fontData.family,
        fontCategory: fontData.category,
      };
    }
  });
  setFontQuery(() => fontData.family);
  setQueryResults([]);
};

export default selectFont;
