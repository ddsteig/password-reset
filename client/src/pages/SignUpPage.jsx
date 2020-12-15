import DateFnsUtils from "@date-io/date-fns";
import { Button, LinearProgress } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Field, Form, Formik } from "formik";
import { fieldToTextField, TextField } from "formik-material-ui";
import React from "react";
import API from "../utils/user-api";
import AppAppBar from "../views/AppAppBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Forage
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function UpperCasingTextField(props) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;

  return <MuiTextField {...fieldToTextField(props)} />;
}

async function postUser(user) {
  await API.createUser(user)
    .then((res) => {
      let currentUrl = window.location.origin;
      window.location.href = `${currentUrl}/loginPage`;
    })
    .catch((err) => {
      console.log(err);
    });
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <>
      <AppAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                // values sends a object of the username, email, and password
                console.log(values);
                postUser(values);
                // alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form>
                  <Box margin={1}>
                    <Field
                      component={TextField}
                      type="username"
                      label="username"
                      name="username"
                    />
                  </Box>
                  <Box margin={1}>
                    <Field
                      component={UpperCasingTextField}
                      name="email"
                      type="email"
                      label="Email"
                      helperText="Please Enter Email"
                    />
                  </Box>
                  <Box margin={1}>
                    <Field
                      component={TextField}
                      type="password"
                      label="Password"
                      name="password"
                    />
                  </Box>
                  {isSubmitting && <LinearProgress />}
                  <Box margin={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              </MuiPickersUtilsProvider>
            )}
          </Formik>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
