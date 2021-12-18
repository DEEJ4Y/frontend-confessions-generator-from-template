import React from "react";
import FormGroup from "../../../FormGroup";

export default function LineHeightSelect({ prevData, setValue }) {
  const [lineHeight, setLineHeight] = React.useState(prevData || 1.5);
  return (
    <>
      <FormGroup
        type={"number"}
        label={<h6 className="mb-0">Line Height</h6>}
        onChange={({ target }) => {
          const { value } = target;
          if (value > 0) {
            setLineHeight(() => value);
            setValue((prev) => {
              return {
                ...prev,
                template: {
                  ...prev.template,
                  lineHeight: value,
                },
                lineHeight: value,
              };
            });
          }
        }}
        value={lineHeight}
      />
    </>
  );
}
