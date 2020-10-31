import styled from 'styled-components/native';
import {Content, Container, Button, Item, Input, Card} from 'native-base';

export const StyledItem = styled(Item)`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 23px;
  padding: 0px 10px;
`;

export const StyledInput = styled(Input)``;

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

export const StyledViewCard = styled(Card)`
  background: #ffffff;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 18px 20px;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledTextCard = styled.Text`
  font-size: 14px;
  color: #222222;
`;

export const StyledButton = styled(Button)``;

export const StyledTextButton = styled.Text`
  font-size: 14px;
  color: #42d86c;
  border: 1px solid #ffffff;
`;

export const StyledTextBlockButton = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #222222;
`;
