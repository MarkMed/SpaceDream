import * as React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Container, Typography, TextField, Button, Select } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const REGISTER_MUTATION = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      id
      fullname
      username
    }
  }
`;

const options = [
  { value: 'Astronaut', label: 'Astronaut' },
  { value: 'Physician', label: 'Physician' }
];

const validations = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  type: Yup.array()
    .max(1, 'Select only one type')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
})

const RegisterForm = () => {
  const [register] = useMutation(REGISTER_MUTATION);

  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center" }}>
        <Logo src={logo} />
        <Typography variant="h4">
          Register
      </Typography>
      </div>
      <br />
      <Formik
        initialValues={{ fullname: '', email: '', password: '', repeatPassword: '' }}
        validationSchema={validations}
        onSubmit={({ repeatPassword, ...values }, { setSubmitting }) => {
          setTimeout(() => {
            register({
              variables: {
                input: values
              },
            }).then((result) => {
              window.history.back();
            });

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values, errors, touched, handleChange, handleSubmit, isSubmitting
        }) => (
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <FormContainer>
                <TextField
                  error={errors.fullname && touched.fullname}
                  helperText={errors.fullname && touched.fullname ? errors.fullname : ' '}
                  variant="filled"
                  id="fullname"
                  label="Fullname"
                  value={values.fullname}
                  onChange={handleChange("fullname")}
                />
                <br />
                <TextField
                  error={errors.username && touched.username}
                  helperText={errors.username && touched.username ? errors.username : ' '}
                  variant="filled"
                  id="username"
                  label="Username"
                  value={values.username}
                  onChange={handleChange("username")}
                />
                <br />
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  REGISTER
                </Button>
              </FormContainer>
            </form>
          )}
      </Formik>
      <br />
    </Container>
  );
};

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RegisterForm;
