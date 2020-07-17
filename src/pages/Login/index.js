import React, {useState} from 'react';
import {useFormik} from 'formik';

import {useAuth} from '../../contexts/authContext';

import {Container, Input, Title, Button, ButtonText, Text} from './styles';

const Login = () => {
  const [validate, setValidate] = useState();

  const {loginUser} = useAuth(); // pega os valores passados no context do provider

  // console.log(logged);

  async function handleLogin(credentials) {
    try {
      await loginUser(credentials);
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      setValidate('Email e/ou senha inválidos');
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (credentials) => {
      handleLogin(credentials);
    },
  });

  return (
    <Container>
      <Title>Login</Title>

      {validate && <Text>{validate}</Text>}

      <Input
        placeholder="E-mail"
        name="email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        name="email"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />

      <Button onPress={formik.handleSubmit}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
