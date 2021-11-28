import Link from "next/link";
import searchFonts from "../../../../services/templates/add/searchFonts";
import FormGroup from "../../../FormGroup";

const FontAndHeading = ({ fontQuery, setFontQuery, setQueryResults }) => {
  return (
    <div>
      <h5 className="mb-4">Create Post Template</h5>
      <h6 className="mb-0">Choose a font</h6>
      <p style={{ marginBottom: "-1rem" }}>
        We support all{" "}
        <Link passHref href="https://fonts.google.com/">
          Google Fonts
        </Link>
        . You can search for the font of your choice{" "}
        <Link passHref href="https://fonts.google.com/">
          here
        </Link>
        .
      </p>
      <FormGroup
        name={"fontSearchField"}
        type={"text"}
        placeholder={"Search for fonts"}
        value={fontQuery}
        onChange={(e) => {
          searchFonts(e, { setFontQuery, setQueryResults });
        }}
      />
    </div>
  );
};

export default FontAndHeading;
