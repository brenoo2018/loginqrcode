import React from 'react';

import {useAuth} from '../../contexts/authContext';
import {Container, Title, Button, ButtonText} from './styles';

const Home = () => {
  const {logoutUser} = useAuth();
  return (
    <Container>
      <Title>Home</Title>
      <Button onPress={logoutUser}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
