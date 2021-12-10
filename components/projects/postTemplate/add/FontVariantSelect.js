import Dropdown from "react-bootstrap/Dropdown";

const FontVariantSelect = ({ templateData, setTemplateData }) => {
  return (
    <>
      {templateData.fontData.family &&
      templateData.fontData.variants.length > 1 ? (
        <div>
          Choose font variant:{" "}
          <Dropdown className="float-end">
            <Dropdown.Toggle size="sm">
              {templateData.fontVariant || "Variant"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {templateData.fontData.variants.map((variant, idx) => {
                return (
                  <Dropdown.Item
                    key={`font-variant-${idx}`}
                    onClick={() => {
                      setTemplateData((prev) => {
                        return {
                          ...prev,
                          fontVariant: variant,
                          fontFile: templateData.fontData.files[variant],
                        };
                      });
                    }}
                  >
                    {variant}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        ""
      )}

      {templateData.fontData.family ? (
        <h6 className="mb-0 mt-4">
          Selected Font: {templateData.fontData.family}
        </h6>
      ) : (
        ""
      )}

      {templateData.fontVariant ? (
        <p className="text-secondary small mb-0 ">
          Variant: {templateData.fontVariant}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default FontVariantSelect;
