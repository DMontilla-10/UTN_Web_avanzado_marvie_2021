import React from "react";
import { AuthRoutes } from "./components/AuthRoutes";
import Home from "./pages/Home";

function App() {
  const isLogged = true;

  return (
    <>
      {!isLogged 
        ? <AuthRoutes /> 
        : <Home />
      }
    </>
  );
}

export default App;
