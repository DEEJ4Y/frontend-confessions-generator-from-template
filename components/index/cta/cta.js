import Link from "next/link";

export default function Cta() {
  return (
    <div className="container-fluid">
      <div className="padded-content p-lg-4 p-md-2 p-sm-1">
        <h2 className="h1 fw-bolder text-center">
          <Link passHref href="/auth/create-account">
            <span className="text-primary clickable">Create an account </span>
          </Link>
          and stop copy-pasting today.
        </h2>
      </div>
    </div>
  );
}
