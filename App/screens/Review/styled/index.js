import styled from 'styled-components/native';
import {Content, CheckBox, Body, Footer, Button} from 'native-base';

export const Row = styled.View`
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px 17px;
`;

export const Col = styled.View`
  height: auto;
  flex-basis: 200px;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledBody = styled(Body)``;

export const StyledCheckBox = styled(CheckBox)``;

export const StyledText = styled.Text`
  font-size: 24px;
  color: #222222;
`;

export const StyledTextRadioButton = styled.Text`
  font-size: 14px;
  color: #222222;
`;

export const StyledFooter = styled(Footer)`
  background: transparent;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const StyledButtonFab = styled(Button)`
  background: #42d86c;
  box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
  border-radius: 25px;
  padding: 10px;
`;

export const StyledTextFab = styled.Text`
  font-size: 11px;
  color: #ffffff;
`;
