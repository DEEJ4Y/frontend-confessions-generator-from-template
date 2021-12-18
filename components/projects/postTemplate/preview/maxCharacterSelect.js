import React from "react";
import FormGroup from "../../../FormGroup";

export default function MaxCharactersSelect({ prevData, setValue }) {
  const [maxCharacters, setMaxCharacters] = React.useState(prevData || 650);
  return (
    <>
      <FormGroup
        type={"number"}
        label={<h6 className="mb-0">Maximum character count</h6>}
        onChange={({ target }) => {
          const { value } = target;
          if (value > 0 && value < 651) {
            setMaxCharacters(() => value);
            setValue((prev) => {
              return {
                ...prev,
                template: {
                  ...prev.template,
                  maxCharacters: value,
                },
                maxCharacters: value,
              };
            });
          }
        }}
        value={maxCharacters}
      />
    </>
  );
}
