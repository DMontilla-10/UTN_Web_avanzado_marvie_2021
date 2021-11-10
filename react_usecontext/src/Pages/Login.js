import React, { useContext } from "react";
import { LoginContext } from "../Context/Context";

export const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <>
      {loggedIn ? <h1>Bienvenido a mi App</h1> : <h1>Porfavor, logueate</h1>}
      <button
        style={{ fontSize: "30px" }}
        onClick={() => setLoggedIn((prevState) => !prevState)}
      >
        {loggedIn ? "logout" : "login"}
      </button>
    </>
  );
};
