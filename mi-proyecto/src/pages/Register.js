import React from "react";
import RegisterForm from "../components/RegisterForm";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div style={{ marginTop: "25vh" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="overline" display="block" gutterBottom>
          registro
        </Typography>
        <RegisterForm />
        <Typography variant="overline">
          Ya tengo una cuenta
          <Button variant="text" onClick={handleClick}>
            Login
          </Button>
        </Typography>
      </Grid>
    </div>
  );
};

export default Register;