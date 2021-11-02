import React from "react";
import LoginForm from "../components/LoginForm";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <div style={{ marginTop: "30vh" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="overline" display="block" gutterBottom>
          login
        </Typography>
        <LoginForm />
        <Typography variant="overline">
          No tengo cuenta
          <Button variant="text" onClick={handleClick}>
            Registrarme
          </Button>
        </Typography>
      </Grid>
    </div>
  );
};

export default Login;
