import styled from 'styled-components/native';
import {Button} from 'native-base';

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 34px;
  color: #222222;
`;

export const StyledView = styled.ScrollView`
  padding: 10px;
`;

export const StyledFooter = styled.View`
  flex-direction: column;
  background: transparent;
  border: none;
  height: auto;
  padding: 10px;
`;

export const StyledTextPrice = styled.Text`
  font-size: 18px;
  text-align: right;
  color: #222222;
`;

export const StyledTextSecondary = styled.Text`
  font-size: 14px;
  color: #9b9b9b;
`;

export const StyledButton = styled(Button)``;

export const StyledTextButton = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
