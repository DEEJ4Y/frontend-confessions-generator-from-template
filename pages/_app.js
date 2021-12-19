import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const apiUrl = "http://localhost:3001/api/v1";
const websiteUrl = "http://localhost:3000";

// Context for Logged in User
const UserContext = React.createContext({
  userToken: "",
  setUserToken: () => {},
});

// Context for selected project
const ProjectContext = React.createContext({
  projectId: "",
  setProjectId: () => {},
});

function MyApp({ Component, pageProps }) {
  // State for Logged in User
  const [userTokenState, setUserTokenState] = useState({
    userToken: "",
    setUserToken: (token) =>
      setUserTokenState((prev) => {
        return { ...prev, userToken: token };
      }),
  });

  // State for selected project
  const [selectedProjectId, setSelectedProjectId] = useState({
    projectId: "",
    setProjectId: (projectId, redirect) => {
      setSelectedProjectId((prev) => {
        return { ...prev, projectId: projectId };
      });
      if (redirect) {
        window.location.href = redirect;
      }
    },
  });

  return (
    <>
      <UserContext.Provider value={userTokenState}>
        <ProjectContext.Provider value={selectedProjectId}>
          <Component {...pageProps} />
        </ProjectContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
export { apiUrl, websiteUrl, UserContext, ProjectContext };
