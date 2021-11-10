import React, { useState } from "react";
import { LoginContext } from "./Context/Context";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Home />
      <Login />
      <Products />
    </LoginContext.Provider>
  );
}

export default App;
