const Spinner = ({ style, variant, size }) => {
  return (
    <div className="d-flex justify-content-center" style={style}>
      <div
        className={`spinner-border text-${variant || "primary"} ${
          size ? `spinner-border-${size}` : ""
        }`}
        role="status"
      >
        <span className="sr-only visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
