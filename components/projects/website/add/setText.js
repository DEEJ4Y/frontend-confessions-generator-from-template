import React from "react";
import FormGroup from "../../../FormGroup";

export default function SetText({
  setState,
  property,
  propertyDisplayName,
  message,
  placeholder,
  prevState,
}) {
  let textVal = prevState || "";
  const [text, setText] = React.useState(textVal);
  return (
    <>
      <FormGroup
        label={<h6 className="mb-0">{propertyDisplayName}</h6>}
        placeholder={placeholder}
        type={"text"}
        value={text}
        onChange={({ target }) => {
          const { value } = target;
          setText(() => value);
          setState((prev) => {
            return { ...prev, [property]: value };
          });
        }}
      />
      <p className="small text-secondary" style={{ marginTop: "-1rem" }}>
        {message}
      </p>
    </>
  );
}
