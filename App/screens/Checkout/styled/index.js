import styled from 'styled-components/native';
import {Content, Container, Button} from 'native-base';

export const StyledContent = styled(Content)``;

export const StyledContainer = styled(Container)`
  height: auto;
  background: transparent;
  padding: 0 16px;
  margin: 20px 0;
`;

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #222222;
  margin-bottom: 20px;
`;

export const StyledViewCard = styled.View`
  background: #ffffff;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 18px 20px;
  margin-right: 20px;
  elevation: 5;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Col = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledTextCard = styled.Text`
  font-size: 14px;
  color: #222222;
`;

export const StyledButton = styled(Button)``;

export const StyledTextButton = styled.Text`
  font-size: 14px;
  color: #42d86c;
`;

export const StyledTextBlockButton = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const StyledTextSecondary = styled.Text`
  font-size: 14px;
  color: #9b9b9b;
`;

export const StyledTextPrice = styled.Text`
  font-size: 16px;
  color: #222222;
  margin: 4px 0;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledImage = styled.Image``;

export const StyledFooter = styled.View`
  background-color: #ffff;
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 30;
`;
