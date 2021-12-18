import React from "react";
import FormGroup from "../../../FormGroup";

const FontSizeSelector = ({ setTemplateData, prevData }) => {
  const [fontSize, setFontSize] = React.useState(
    prevData ? prevData.slice(0, 2) : 22
  );

  const updateFontSize = (e) => {
    let value = e.target.value;

    if (value < 99 && value > 12) {
      setFontSize(() => value);
      setTemplateData((prev) => {
        return {
          ...prev,
          template: {
            ...prev.template,
            fontSize: `${value}px`,
          },
          fontSize: `${value}px`,
        };
      });
    }
  };

  return (
    <>
      <FormGroup
        type={"number"}
        label={
          <>
            <h6 className="mb-0">
              Font Size{" "}
              <small
                className="position-relative"
                style={{ top: "2.15rem", right: "2rem" }}
              >
                <code>pixels</code>
              </small>
            </h6>
          </>
        }
        value={fontSize}
        onChange={updateFontSize}
      />
      <p className="text-secondary small" style={{ marginTop: "-1rem" }}>
        We recommend a font size of <code>22 pixels</code> for confessions that
        are <code>650 characters</code> long.
      </p>
    </>
  );
};

export default FontSizeSelector;
