export default function Footer() {
  let now = new Date();
  return (
    <div className="container-fluid text-center">
      <p className="mb-0 small text-secondary">
        &#169; David Joseph {now.getFullYear()}
      </p>
    </div>
  );
}
