import styled from 'styled-components/native';
import {Header, Button, Content, Item, Input, Label, Text} from 'native-base';

export const AlertMessage = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  color: #f01f0e;
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  justify-content: flex-end;
  margin: 16px 0px;
`;

export const StyledContent = styled(Content)`
  background-color: #075e54;
  padding: 0px 16px;
  margin: 16px 0px;
`;

export const StyledItem = styled(Item)`
  background: #fff;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin: 4px 0px;
`;

export const StyledInput = styled(Input)`
  font-size: 14px;
  line-height: 20px;
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
  margin-vertical: 15px;
`;

export const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 34px;
  line-height: 34px;
`;

export const StyledTextAlert = styled.Text`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #f01f0e;
`;
