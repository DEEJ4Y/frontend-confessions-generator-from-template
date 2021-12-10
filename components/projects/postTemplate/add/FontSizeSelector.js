import React from "react";
import FormGroup from "../../../FormGroup";

const FontSizeSelector = ({ setTemplateData }) => {
  const [fontSize, setFontSize] = React.useState(16);

  const updateFontSize = (e) => {
    let value = e.target.value;

    if (value < 22 && value > 12) {
      setFontSize(() => value);
      setTemplateData((prev) => {
        return {
          ...prev,
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
          <h6 className="mb-0">
            Font Size{" "}
            <small
              className="position-relative"
              style={{ top: "2.15rem", right: "1.5rem" }}
            >
              <code>pixels</code>
            </small>
          </h6>
        }
        value={fontSize}
        onChange={updateFontSize}
      />
    </>
  );
};

export default FontSizeSelector;
