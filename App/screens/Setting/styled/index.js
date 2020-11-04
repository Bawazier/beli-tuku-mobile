import styled from 'styled-components';
import {Container, Content, Label} from 'native-base';

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 34px;
  color: #222222;
`;

export const StyledTextPrimary = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #222222;
  margin-top: 10px;
`;

export const StyledTextSubPrimary = styled.Text`
  font-size: 14px;
  color: #222222;
`;

export const StyledTextSecondary = styled.Text`
  font-size: 14px;
  color: #9b9b9b;
`;

export const StyledContainer = styled(Container)`
  height: auto;
  background: transparent;
  margin: 20px 0;
`;

export const Row = styled.View`
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledContent = styled(Content)`
  padding: 20px 10px;
`;

export const StyledCardInput = styled.View`
  background: #ffffff;
  elevation: 5;
  border-radius: 4px;
  height: auto;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
`;

export const StyledLabel = styled(Label)`
  font-size: 11px;
  color: #9b9b9b;
`;
