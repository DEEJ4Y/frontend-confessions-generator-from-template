import Toast from "react-bootstrap/Toast";
import Spinner from "./Spinner";

const Toasty = ({ body, heading, loading, onClose, variant }) => {
  return (
    <Toast bg={"light"} onClose={onClose ? onClose : () => {}}>
      <Toast.Header>
        <strong className="me-auto">{heading || ""}</strong>
        {loading ? <Spinner variant={"secondary"} size="sm" /> : ""}
      </Toast.Header>
      <Toast.Body>
        <p className={`text-${variant} mb-0`}>{body || ""}</p>
      </Toast.Body>
    </Toast>
  );
};

export default Toasty;
