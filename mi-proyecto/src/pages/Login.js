import React from "react";
import LoginForm from "../components/LoginForm";
import Grid from '@mui/material/Grid';

const Login = () => {
  return (
    <div 
        style={{marginTop: '25vh'}}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Esta es la pagina de login</h1>
        <LoginForm />
      </Grid>
    </div>
  );
};

export default Login;
