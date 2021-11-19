import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormGroup = ({
  controlClass,
  controlId,
  groupClass,
  isInvalid,
  labelClass,
  label,
  name,
  onChange,
  placeholder,
  showButton,
  size,
  type,
  value,
}) => {
  const [showState, setShowState] = useState(false);
  return (
    <Form.Group controlId={controlId} className={groupClass ? groupClass : ""}>
      <Form.Label className={labelClass ? labelClass : ""}>{label}</Form.Label>
      <div>
        <Form.Control
          className={controlClass ? controlClass : "mb-4"}
          type={showButton ? (showState ? "text" : "password") : type || "text"}
          placeholder={placeholder}
          name={name}
          isInvalid={isInvalid || false}
          value={value}
          onChange={onChange}
          size={size || "md"}
        />
        {showButton ? (
          <Button
            size="sm"
            variant="outline-primary"
            className="float-end"
            style={{
              position: "relative",
              bottom: "58px",
              right: "4px",
              width: "3.5rem",
            }}
            onClick={() => {
              setShowState((prev) => {
                return !prev;
              });
            }}
          >
            {showState ? "hide" : "show"}
          </Button>
        ) : (
          ""
        )}
      </div>
    </Form.Group>
  );
};

export default FormGroup;
