import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  align-self: stretch;
  background: #34cb79;
  border-radius: 12px;
  height: 50px;
  margin: 0 20px 0 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
