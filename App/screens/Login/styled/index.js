import styled from 'styled-components/native';
import {Header, Button, Content, Item, Input, Label, Text} from 'native-base';

export const StyledTextButton = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #222222;
  text-align: right;
`;

export const StyledButton = styled(Button)`
  justify-content: flex-end;
  margin-bottom: 8px;
`;

export const StyledContent = styled(Content)`
  padding: 0px 16px;
  margin: 16px 0px;
`;

export const StyledItem = styled(Item)`
  background: #ffffff;
  border-radius: 5px;
  padding: 0 10px;
  margin: 4px 0px;
`;

export const StyledInput = styled(Input)`
  font-size: 14px;
  color: #2d2d2d;
`;

export const StyledLabel = styled(Label)`
  font-size: 11px;
  line-height: 11px;
  color: #9b9b9b;
`;

export const StyledHeader = styled(Header)`
  border: none;
  background-color: white;
`;

export const StyledView = styled.View`
  background-color: transparent;
  padding: 20px;
  margin-bottom: 8px;
`;

export const StyledText = styled.Text`
  color: #222222;
  font-weight: bold;
  font-size: 34px;
  line-height: 34px;
`;
