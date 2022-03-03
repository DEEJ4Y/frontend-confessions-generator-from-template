/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function Title() {
  return (
    <div className="container-fluid">
      <div className="padded-content p-lg-4 p-md-2 p-sm-1 row h-100 justify-content-center align-items-center">
        <div className="col-lg-7 col-md-7 col-sm-12 p-2">
          <h1 className="fw-bolder mb-0">Automate your</h1>{" "}
          <h1 className="fw-bolder">social media page</h1>
          <p className="h5">
            Tired of copy-pasting text into photoshop and exporting the image?
            socialautopost is for you!
          </p>
          <p className="text-secondary">
            Automatically generate post images from follower created content.
          </p>
          <Link passHref href="/auth/create-account">
            <Button size="lg" className="my-2 px-4">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            className="img-fluid"
            src="/website/title-img.png"
            alt="logo"
          ></img>
        </div>
      </div>
    </div>
  );
}
