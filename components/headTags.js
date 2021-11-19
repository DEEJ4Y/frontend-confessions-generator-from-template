import Head from "next/head";

const HeadTags = ({ title, description, url, image, robots }) => {
  return (
    <Head>
      <title>{title || "socialautopost"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content={robots || "all"} />
      <meta
        name="description"
        content={description || "Create an account and start making templates!"}
      />

      <meta name="og:title" content={title || "socialautopost"} />
      <meta
        name="og:description"
        content={description || "Create an account and start making templates!"}
      />
      <meta name="og:url" content={url || "socialautopost.herokuapp.com"} />
      <meta name="og:image" content={image || "/logo.png"} />
    </Head>
  );
};

export default HeadTags;
