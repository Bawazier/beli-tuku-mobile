import styled from 'styled-components/native';
import {Content, Container, View} from 'native-base';

export const StyledContent = styled(Content)`
  padding: 0 10px;
`;

export const StyledContainer = styled(Container)`
  height: auto;
  background: transparent;
  margin: 20px 0;
`;

export const StyledText = styled.Text`
  font-size: 34px;
  color: #222222;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledView = styled.View`
  padding: 0 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled.Image`
  border-radius: 50px;
  height: 60px;
  width: 60px;
`;

export const StyledTextPrimary = styled.Text`
  font-size: 18px;
  color: #222222;
`;
export const StyledTextSecondary = styled.Text`
  font-size: 11px;
  color: #9b9b9b;
`;
