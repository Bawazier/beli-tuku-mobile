import styled from 'styled-components/native';
import {Card, CardItem, Body} from 'native-base';

export const StyledCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledCardItem = styled(CardItem)``;

export const StyledBody = styled(Body)``;

export const StyledTextPrimary = styled.Text`
  font-size: 16px;
  color: #222222;
  margin-left: 5px;
`;

export const StyledTextSecondary = styled.Text`
  font-size: 14px;
  color: #9b9b9b;
`;

export const StyledTextGreen = styled.Text`
  width: 100%;
  text-align: right;
  font-size: 14px;
  color: #2aa952;
`;

export const Row = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRow = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
