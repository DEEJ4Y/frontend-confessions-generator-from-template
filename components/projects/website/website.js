import React from "react";

const Website = () => {
  const [viewState, setViewState] = React.useState("def");

  return <>{viewState === "def" ? <h2>Details about the website</h2> : ""}</>;
};

export default Website;
