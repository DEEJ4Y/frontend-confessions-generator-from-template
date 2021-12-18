import React from "react";
import { SketchPicker } from "react-color";

const FontColorSelect = ({ setTemplateData, prevData }) => {
  const [chosenColor, setChosenColor] = React.useState(prevData || "#000000");

  const handleChangeComplete = (color) => {
    setTemplateData((prev) => {
      return {
        ...prev,
        template: {
          ...prev.template,
          fontColor: color.hex,
        },
        fontColor: color.hex,
      };
    });
    setChosenColor(() => color.hex);
  };
  return (
    <div>
      <h6>Choose a color for your font</h6>
      <SketchPicker
        className="w-90"
        color={chosenColor}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default FontColorSelect;
