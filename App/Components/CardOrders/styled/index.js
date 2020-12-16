import styled from 'styled-components/native';
import {Container, Card, CardItem, Body, Button} from 'native-base';

export const StyledContainer = styled(Container)`
  background: transparent;
  height: auto;
`;

export const Row = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 0 10px;
`;

export const StyledRow = styled.View`
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
`;

export const Col = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const StyledCard = styled(Card)`
  height: 140px;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledCardItem = styled(CardItem)`
  padding: 0;
  height: 114px;
`;

export const StyledBody = styled(Body)`
  flex-direction: column;
`;

export const StyledImage = styled.Image`
  width: 120px;
  height: 180px;
`;

export const StyledTextPrimary = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #222222;
`;

export const StyledTextSecondary = styled.Text`
  font-size: 11px;
  color: #9b9b9b;
  margin-right: 3px;
`;

export const StyledTextSecondaryBlack = styled.Text``;

export const StyledView = styled.View`
  width: 100%;
  height: auto;
  padding: 0 10px 10px 0;
  border: 1px solid black;
`;

export const StyledButtonCircle = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: transparent;
`;
