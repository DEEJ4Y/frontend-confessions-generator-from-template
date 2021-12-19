import Head from "next/head";

const HeadTags = ({ title, description, url, image, robots, children }) => {
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
      <meta
        name="og:image"
        content={
          image || "https://socialautopost.herokuapp.com/socialautopost.png"
        }
      />

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      ></link>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Asap&display=swap"
        rel="stylesheet"
      ></link>

      {children}
    </Head>
  );
};

export default HeadTags;
