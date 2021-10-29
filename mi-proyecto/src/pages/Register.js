import React from "react";
import RegisterForm from "../components/RegisterForm";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Register = () => {
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
      </Grid>
    </div>
  );
};

export default Register;