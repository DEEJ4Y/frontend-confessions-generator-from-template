export default function Cta() {
  return (
    <div className="container-fluid">
      <div className="padded-content p-lg-4 p-md-2 p-sm-1">
        <h2 className="h1 fw-bolder text-center">
          <span
            onClick={() => {
              let link = document.createElement("a");
              link.href = "/auth/create-account";
              link.click();
            }}
            className="text-primary clickable"
          >
            Create an account{" "}
          </span>
          and stop copy-pasting today.
        </h2>
      </div>
    </div>
  );
}
