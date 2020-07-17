import React from 'react';

import {Container, Input, Title, Button, ButtonText} from './styles';

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Input placeholder="Usuário" />
      <Input placeholder="Senha" secureTextEntry />

      <Button onPress={() => {}}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
