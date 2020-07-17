import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #34cb79;
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  color: #ff0000;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  background: #ebebeb;
  align-self: stretch;
  height: 45px;
  margin: 0 20px 0 20px;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
`;
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

export const ActivityIndicator = styled.ActivityIndicator``;
