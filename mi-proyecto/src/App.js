import React, { useEffect, useState } from "react";
import { AuthRoutes } from "./components/AuthRoutes";
import Home from "./pages/Home";
import { LoginContext } from "./Helpers/Context";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAuth, setIsAuth] = useState(null)

  useEffect(()=>{
    setIsAuth(localStorage.getItem('isAuthenticated'))
  }, [isLogged])

  return (
    <>
      {!isAuth ? (
        <LoginContext.Provider value={{ isLogged, setIsLogged }}>
          <AuthRoutes />
        </LoginContext.Provider>
      ) : (
        <LoginContext.Provider value={{ setIsLogged }}>
          <Home />
        </LoginContext.Provider>
      )}
    </>
  );
}

export default App;
