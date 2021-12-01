import React from "react";
import { SketchPicker } from "react-color";

const FontColorSelect = ({ setTemplateData }) => {
  const [chosenColor, setChosenColor] = React.useState("#000000");

  const handleChangeComplete = (color) => {
    setChosenColor(() => color.hex);
    setTemplateData((prev) => {
      return { ...prev, fontColor: color.hex };
    });
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
