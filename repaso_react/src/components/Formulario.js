import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string('Ingrese su email').email('Ingrese un email valido').required('Email es requerido'),
        password: Yup.string('Ingrese su password').min(6, 'La contrasena debe tener como minimo 6 caracteres').required('La contrasena es requerida')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
      <>
      <form onSubmit={formik.handleSubmit}>
        <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange}>
        </input>
        <h6>{formik.errors.email}</h6>
        <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange}>
        </input>
        <h6>{formik.errors.password}</h6>
        <button type='submit'>
            Entrar
        </button>
      </form>
      </>
  )
};
