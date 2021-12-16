import React from "react";
import Button from "react-bootstrap/Button";
import { SketchPicker } from "react-color";

export default function SetFontColor({
  setState,
  property,
  propertyDisplayName,
  prevState,
}) {
  let chosenColorVal = prevState || "#000000";
  const [chosenColor, setChosenColor] = React.useState(chosenColorVal);
  const [viewState, setViewState] = React.useState(prevState);

  const handleChangeComplete = (color) => {
    setChosenColor(() => color.hex);
    setState((prev) => {
      return { ...prev, [property]: color.hex };
    });
  };

  return (
    <>
      {viewState ? (
        <h6 style={{ marginTop: "2rem" }}>
          Chosen color:{" "}
          <span
            style={{
              color: chosenColor === "#ffffff" ? "#000000" : chosenColor,
            }}
          >
            {chosenColor === "#ffffff" ? "white" : chosenColor}
          </span>
          <Button
            size={"sm"}
            className="float-end"
            style={{ marginTop: "-8px" }}
            onClick={() => {
              setViewState(() => false);
            }}
          >
            Edit
          </Button>
        </h6>
      ) : (
        <>
          <h6>Choose a color for your {propertyDisplayName}.</h6>
          <SketchPicker
            className="w-90"
            color={chosenColor}
            onChangeComplete={handleChangeComplete}
          />
        </>
      )}
      <br />
    </>
  );
}
