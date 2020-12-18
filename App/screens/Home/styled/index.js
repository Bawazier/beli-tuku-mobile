import styled from 'styled-components/native';
import {Button, Content, H1, H3, Text, Container} from 'native-base';
import {ImageBackground} from 'react-native';

export const StyledView = styled.View`
  width: 100%;
  height: auto;
`;

export const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 180px;
  resize-mode: center;
`;

export const StyledTextWhite = styled(H1)`
  font-weight: bold;
  font-size: 34px;
  line-height: 34px;
  color: #ffffff;
  align-self: flex-end;
`;

export const StyledButton = styled(Button)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  align-self: flex-start;
`;

export const StyledContent = styled(Content)`
  background-color: white;
`;

export const StyledH1 = styled(H1)`
  font-weight: bold;
  font-size: 34px;
  line-height: 34px;
  color: #222222;
`;

export const StyledH3 = styled(H3)`
  font-size: 11px;
  line-height: 11px;
  color: #9ce47c;
  text-align: right;
`;

export const StyledText = styled(Text)`
  font-size: 11px;
  line-height: 11px;
  color: #9b9b9b;
`;

export const Row = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
  height: auto;
  background-color: transparent;
`;

export const Col = styled(Container)`
  height: auto;
  background-color: transparent;
`;
