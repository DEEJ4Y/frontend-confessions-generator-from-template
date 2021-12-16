import { useRouter } from "next/router";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getWebsiteConfigService from "../../../services/confessionsPage/getWebsiteConfig";

export default function ConfessAnonymously() {
  const router = useRouter();

  const [websiteConfig, setWebsiteConfig] = React.useState(false);
  const [backgroundImage, setBackgroundImage] = React.useState(false);

  const getWebsiteConfig = React.useRef(() => {});

  React.useEffect(() => {
    if (router && router.query) {
      const { websiteConfigId } = router.query;
      if (websiteConfigId) {
        getWebsiteConfig.current(websiteConfigId);
      }
    }
  }, [router, router.query]);

  getWebsiteConfig.current = async (websiteConfigId) => {
    const resData = await getWebsiteConfigService({
      websiteConfigId: websiteConfigId,
    });
    if (resData.data) {
      if (resData.data.visibility === false) {
        window.location.href = "/page-not-found";
      } else {
        setWebsiteConfig(() => resData.data);
        setBackgroundImage(() => resData.data.backgroundImage.imageData);
      }
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              padding: "1rem",
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <h1
                className="text-center mb-4"
                style={{
                  color: websiteConfig.titleFontColor,
                }}
              >
                {websiteConfig.title}
              </h1>
              <p
                className="text-start mb-0"
                style={{ color: websiteConfig.messageFontColor }}
              >
                {websiteConfig.message}
              </p>
              <Form.Control
                as="textarea"
                rows={1}
                style={{ maxHeight: "12rem", overflowY: "scroll" }}
              />
              <p className="small text-secondary mb-0">
                Maximum character count: bruh
              </p>

              <Button className="float-end" variant="light">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
