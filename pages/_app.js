import React, { useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const apiUrl = "https://socialautopost.herokuapp.com/api/v1";
const websiteUrl = "https://deej4y.github.io/socialautopost";

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
  const router = useRouter();

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
        router.push(redirect);
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
