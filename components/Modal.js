import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modale = ({
  body,
  button1,
  button2,
  button1Callback,
  button2Callback,
  button1Variant,
  button2Variant,
  handleClose,
  heading,
  show,
}) => {
  return (
    <>
      <Modal show={show || false} onHide={handleClose || ""}>
        <Modal.Header closeButton>
          <Modal.Title>{heading || ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body || ""}</Modal.Body>
        <Modal.Footer>
          <Button
            variant={button1Variant || "secondary"}
            onClick={button1Callback || ""}
          >
            {button1}
          </Button>
          <Button
            variant={button2Variant || "primary"}
            onClick={button2Callback || ""}
          >
            {button2}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modale;
