import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #34cb79;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  ${(props) =>
    props.smallText &&
    css`
      font-size: 16px;
    `}
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
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
export const ActivityIndicator = styled.ActivityIndicator``;

export const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 10px;
  margin-bottom: 30px;
`;
