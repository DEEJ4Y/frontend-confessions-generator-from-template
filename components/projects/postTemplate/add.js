import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Card from "../../Card";
import fonts from "../../../fonts";
import FormGroup from "../../FormGroup";
import getBase64 from "../../../utils/getBase64";
import uploadImageToServer from "../../../utils/uploadImage";
import ImageCropper from "../../ImageCropper";
import { apiUrl } from "../../../pages/_app";

const Add = ({ projectId, onSave }) => {
  const [templateData, setTemplateData] = useState({
    project: projectId.id,
    fontData: {},
    fontFamily: "",
    fontVariant: "",
    fontFile: "",
    fontCategory: "",
    backgroundImage: "",
  });
  const [imgData, setImageData] = useState("");

  const [fontQuery, setFontQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const [imageUploadMessage, setImageUploadMessage] = useState({
    message: "",
    type: "",
  });

  const searchFonts = (e) => {
    const { value } = e.target;
    setFontQuery(value);

    if (value.length > 0) {
      const results = fonts.filter((fontData) =>
        fontData.family.toLowerCase().includes(value.toLowerCase())
      );
      setQueryResults(() => results);
    } else {
      setQueryResults([]);
    }
  };

  const selectFont = (fontData) => {
    setTemplateData((prev) => {
      if (fontData.variants.length < 2) {
        return {
          ...prev,
          fontData: fontData,
          fontFamily: fontData.family,
          fontVariant: fontData.variants[0],
          fontFile: fontData.files["regular"],
          fontCategory: fontData.category,
        };
      } else {
        return {
          ...prev,
          fontData: fontData,
          fontFamily: fontData.family,
          fontCategory: fontData.category,
        };
      }
    });
    setFontQuery(() => fontData.family);
    setQueryResults([]);
  };

  const uploadImage = (e) => {
    // console.log(e.target.files[0]);
    getBase64(e.target.files[0]).then(async (data) => {
      setImageData(() => data);
      // console.log(data);
      const imageDoc = await uploadImageToServer({
        base64String: data,
        url: `${apiUrl}/images`,
      });
      if (imageDoc === "unauthorized") {
        window.location.href = "/auth/sign-in";
      } else if (imageDoc) {
        console.log(imageDoc);
        setTemplateData((prev) => {
          return { ...prev, backgroundImage: imageDoc.id };
        });
        setImageUploadMessage(() => {
          return {
            message: "Your image was uploaded successfully.",
            type: "success",
          };
        });
      } else {
        setImageUploadMessage(() => {
          return {
            message: "We ran into an error while uploading your image.",
            type: "danger",
          };
        });
      }
    });
  };

  const addTemplateAndSave = async () => {
    try {
      const res = await fetch(`${apiUrl}/templates`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(templateData),
      });

      if (res.status === 201 || res.status === 200) {
        const resData = await res.json();
        console.log(resData.data);
        const projRes = await fetch(`${apiUrl}/projects/${projectId.id}`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            template: resData.data.id,
          }),
        });
        if (projRes.status === 201 || projRes.status === 200) {
          const projData = await projRes.json();
          console.log(projData.data);
          onSave();
        } else if (projRes.status === 401) {
          window.location.href = "/auth/sign-in";
        }
        onSave();
      } else if (res.status === 401) {
        window.location.href = "/auth/sign-in";
      }
    } catch {
      setImageUploadMessage(() => {
        return {
          message: "We ran into an error while saving your template.",
          type: "danger",
        };
      });
    }
  };

  return (
    <>
      <div>
        <h5 className="mb-4">Create Post Template</h5>
        <h6 className="mb-0">Choose a font</h6>
        <p className="mb-0">
          We support all{" "}
          <Link passHref href="https://fonts.google.com/">
            Google Fonts
          </Link>
          . You can search for the font of your choice{" "}
          <Link passHref href="https://fonts.google.com/">
            here
          </Link>
          .
        </p>
        <FormGroup
          name={"fontSearchField"}
          type={"text"}
          placeholder={"Search for fonts"}
          value={fontQuery}
          onChange={searchFonts}
          className={""}
        />
        {templateData.fontData.family ? (
          <>
            {templateData.fontData.variants.length > 1 ? (
              <div className="mt-0">
                Choose font variant:{" "}
                <Dropdown className="float-end">
                  <Dropdown.Toggle size="sm">Variant</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {templateData.fontData.variants.map((variant, idx) => {
                      return (
                        <Dropdown.Item
                          key={`font-variant-${idx}`}
                          onClick={() => {
                            setTemplateData((prev) => {
                              return {
                                ...prev,
                                fontVariant: variant,
                                fontFile: templateData.fontData.files[variant],
                              };
                            });
                          }}
                        >
                          {variant}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}

        {templateData.fontData.family ? (
          <h6 className="mb-0 mt-4">
            Selected Font: {templateData.fontData.family}
          </h6>
        ) : (
          ""
        )}

        {templateData.fontVariant ? (
          <p className="text-secondary small mb-0 ">
            Variant: {templateData.fontVariant}
          </p>
        ) : (
          ""
        )}

        <div className="row px-1">
          {queryResults.map((fontData) => {
            let variants = "";
            if (fontData.variants.length > 1) {
              fontData.variants.forEach((variant) => {
                variants += ` ${variant}  `;
              });
            } else {
              variants = fontData.variants[0];
            }
            return (
              <div
                key={`template-font-select-${fontData.family}`}
                className="col-lg-12 mb-1"
              >
                <Card
                  onClick={() => {
                    selectFont(fontData);
                  }}
                  clickable
                >
                  <h6 className="mb-0">{fontData.family}</h6>
                  <p className="mb-0 text-secondary small">{variants}</p>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <h6 className="mb-0">Upload an image</h6>
          <p className="mb-2">
            Upload the background image for your post here.
          </p>
          <Form.Group controlId="formFile" className="mb-2">
            <Form.Control
              name="image"
              type="file"
              accept="image/jpeg"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
          </Form.Group>
          <p className="mb-2 text-secondary small">
            Only <code>.jpeg</code> format images are supported.
          </p>
          {imageUploadMessage.message.length > 0 ? (
            <Alert variant={imageUploadMessage.type}>
              {imageUploadMessage.message}
            </Alert>
          ) : (
            ""
          )}
          {imgData.length > 0 ? <ImageCropper image={imgData} /> : ""}
        </div>
        <div className="mt-4" style={{ height: "2.25rem" }}>
          <Button className="float-end" onClick={addTemplateAndSave}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Add;
