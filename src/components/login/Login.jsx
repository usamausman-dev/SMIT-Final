import React, { useState, useContext } from "react";
import MyImg from "../../img/LOGO.png";
import { auth } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as yup from "yup";
import { useFormik } from "formik";
import { Container, Paper, Button, TextField, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .max(10, "No more then 10")
    .required("Password is required"),
});

export default function LogIn() {
  let history = useHistory();

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);

      const auth = getAuth();
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setTimeout(() => {
            history.push("/requests");
          }, 1000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
  });

  return (
    <div className="LoginMain">
      <Container sx={{ marginTop: "5%" }}>
        <Paper
          sx={{ py: 3, px: 5, margin: "auto", maxWidth: 600, flexGrow: 1 }}
        >
          <img
            src={MyImg}
            alt="logo"
            // className="img-fluid"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: 300,
            }}
          />

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                color="primary"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                fullWidth
                color="primary"
                id="filled-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Log In
              </Button>

              {/* <Link to="/signup">Don't Have an Account? SignUp</Link>
              <Link to="/forget_password">Forget Password</Link> */}

              <small>Email : admin@saylani.com || password : 12345678 </small>
            </Stack>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
