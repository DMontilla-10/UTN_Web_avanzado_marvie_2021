import React from "react";
import LoginForm from "../components/LoginForm";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Login = () => {
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
      </Grid>
    </div>
  );
};

export default Login;