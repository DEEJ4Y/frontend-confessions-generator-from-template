import { useRouter } from "next/router";
import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import confess from "../services/confessionsPage/confess";
import getWebsiteConfigService from "../services/confessionsPage/getWebsiteConfig";
import getParam from "../utils/getParam";
import Spinner from "../components/Spinner";

export default function ConfessAnonymously() {
  const router = useRouter();

  const [websiteConfig, setWebsiteConfig] = React.useState(false);
  const [backgroundImage, setBackgroundImage] = React.useState(false);

  const [confession, setConfession] = React.useState("");
  const [formMessage, setFormMessage] = React.useState({
    display: false,
    variant: "danger",
    message: "",
  });

  const getWebsiteConfig = React.useRef(() => {});

  React.useEffect(() => {
    let webConfigId = getParam("id");
    if (webConfigId) {
      setWebsiteConfig(() => webConfigId);
      getWebsiteConfig.current(webConfigId);
    }
    if (router && router.query) {
      const { websiteConfigId } = router.query;
      if (websiteConfigId) {
        getWebsiteConfig.current(websiteConfigId);
      }
    }
  }, [router, router.query]);

  getWebsiteConfig.current = async (websiteConfigId) => {
    console.log(websiteConfigId);
    const resData = await getWebsiteConfigService({
      websiteConfigId: websiteConfigId,
      router: router,
    });
    if (resData && resData.data) {
      if (resData.data.visibility === false) {
        router.push("/page-not-found");
      } else {
        setWebsiteConfig(() => resData.data);
        setBackgroundImage(() => resData.data.backgroundImage.imageData);
      }
    } else {
      router.push("/page-not-found");
    }
  };

  const validateConfession = () => {
    if (confession.length === 0) {
      setFormMessage(() => {
        return {
          display: true,
          variant: "danger",
          message: "Please add some text.",
        };
      });
    } else {
      setFormMessage(() => {
        return {
          display: true,
          variant: "primary",
          message: "Submitting",
        };
      });
      confess({
        confession: confession,
        projectId: websiteConfig.project.id,
        callback: () => {
          setFormMessage(() => {
            return {
              display: true,
              variant: "success",
              message: "Submitted successfully!",
            };
          });
          setConfession(() => "");
        },
      });
    }
  };

  return (
    <>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Flex Alignment Container */}
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
            {/* Main Content Container */}
            {websiteConfig.title ? (
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
                  value={confession}
                  onChange={({ target }) => {
                    const { value } = target;

                    setConfession(() =>
                      value.substring(
                        0,
                        websiteConfig.project.template.maxCharacters
                      )
                    );
                  }}
                />
                <p className="small text-secondary mb-0">
                  Maximum character count:{" "}
                  {websiteConfig && websiteConfig.project
                    ? websiteConfig.project.template.maxCharacters
                    : ""}
                </p>
                {formMessage.display ? (
                  <Alert variant={formMessage.variant}>
                    {formMessage.message}
                  </Alert>
                ) : (
                  ""
                )}
                <Button
                  className="float-end"
                  variant="light"
                  onClick={() => {
                    validateConfession();
                  }}
                >
                  Submit
                </Button>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
