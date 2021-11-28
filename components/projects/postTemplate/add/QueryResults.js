import Card from "../../../Card";

const QueryResults = ({
  queryResults,
  selectFont,
  setTemplateData,
  setFontQuery,
  setQueryResults,
}) => {
  return (
    <div
      className="row px-1"
      style={{ marginTop: "-1rem", marginBottom: "0.25rem" }}
    >
      {queryResults.slice(0, 4).map((fontData) => {
        let variants = "";
        if (fontData.variants.length > 1) {
          fontData.variants.forEach((variant) => {
            variants += ` ${variant}  `;
          });
        } else {
          variants = fontData.variants[0];
        }
        return (
          <div
            key={`template-font-select-${fontData.family}`}
            className="col-lg-12 mb-1"
          >
            <Card
              onClick={() => {
                selectFont({
                  fontData,
                  setTemplateData,
                  setFontQuery,
                  setQueryResults,
                });
              }}
              clickable
            >
              <h6 className="mb-0">{fontData.family}</h6>
              <p className="mb-0 text-secondary small">{variants}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default QueryResults;
