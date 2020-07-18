import React, {useState, useEffect} from 'react';

import QRCode from 'react-native-qrcode-svg';
import {useAuth} from '../../contexts/authContext';
import api from '../../services/api';

import {Container, Title, Button, ButtonText, Code} from './styles';

const Home = () => {
  const [qrcode, setQrCode] = useState([]);
  // const [loading, setLoading] = useState(true);
  const {logoutUser, user} = useAuth();

  useEffect(() => {
    async function loadQrCode() {
      try {
        const response = await api.get('/students/1');
        //console.log(response.data);
        setQrCode(JSON.stringify(response.data));

        // setLoading(false);
        //console.log(qrcode);
      } catch (error) {
        // setLoading(false);
        console.log(error.response.data);
      }
    }
    loadQrCode();
  }, []);

  return (
    <Container>
      <Title>Home</Title>
      <Title smallText>Seja bem vindo {user.name}</Title>
      <Code>
        <QRCode
          value={qrcode}
          color="#34cb79"
          backgroundColor="#fff"
          size={130}
        />
      </Code>
      <Button onPress={logoutUser}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
