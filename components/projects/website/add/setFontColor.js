import React from "react";
import { SketchPicker } from "react-color";

export default function SetFontColor({
  setState,
  property,
  propertyDisplayName,
}) {
  const [chosenColor, setChosenColor] = React.useState("#000000");

  const handleChangeComplete = (color) => {
    setChosenColor(() => color.hex);
    setState((prev) => {
      return { ...prev, [property]: color.hex };
    });
  };

  return (
    <>
      <h6>Choose a color for your {propertyDisplayName}.</h6>
      <SketchPicker
        className="w-90"
        color={chosenColor}
        onChangeComplete={handleChangeComplete}
      />
      <br />
    </>
  );
}
