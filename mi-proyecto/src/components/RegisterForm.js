import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)

  console.log('este es el error: ',typeof(error.message))

  const handleClickShowPassword = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(prevState => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string("Ingrese su nombre").required(
        "El nombre es requerido"
      ),
      lastName: Yup.string("Ingrese su apellido").required(
        "El apellido es requerido"
      ),
      email: Yup.string("Ingrese su email")
        .email("Ingrese un email válido")
        .required("El email es requerido"),
      password: Yup.string("Ingresa tu contraseña")
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es requerida"),
    }),
    onSubmit: async (values, {resetForm}) => {
      try {
        const response = await axios.post('http://localhost:3001/api/users',values)  
        console.log(response)
        resetForm()
      } catch (error) {
        console.log(error)
        setError(error.message)
        setOpen(prevState => !prevState)
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          sx={{
            width: "25ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            hiddenLabel
            id="firstName"
            name="firstName"
            label="Nombre"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            variant="outlined"
            size="small"
          />
          <TextField
            hiddenLabel
            id="lastName"
            name="lastName"
            label="Apellido"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            variant="outlined"
            size="small"
          />
          <TextField
            hiddenLabel
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            size="small"
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <FormHelperText
              id="component-error-text"
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </Stack>
      </form>
      <Snackbar
        anchorOrigin={{ horizontal: 'top', vertical: 'right'  }}
        open={open}
        onClose={handleClose}
        message={error}
        autoHideDuration={3000}
      />
    </>
  );
};

export default RegisterForm;
