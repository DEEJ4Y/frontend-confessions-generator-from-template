import fonts from "../../../fonts";

const searchFonts = (e, { setFontQuery, setQueryResults }) => {
  const { value } = e.target;
  setFontQuery(value);
  if (value.length > 0) {
    const results = fonts.filter((fontData) =>
      fontData.family.toLowerCase().includes(value.toLowerCase())
    );
    setQueryResults(() => results);
  } else {
    setQueryResults([]);
  }
};

export default searchFonts;
