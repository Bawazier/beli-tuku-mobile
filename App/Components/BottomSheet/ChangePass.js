import React from 'react';
import {
  StyledContainer,
  StyledText,
  StyledTextPrimary,
  StyledTextSecondary,
  StyledTextButton,
} from './styled';
import {Form, Item, Input, Button, Label} from 'native-base';

const ChangePass = () => {
  return (
    <StyledContainer>
      <StyledText>Password Change</StyledText>
      <Form style={{marginBottom: 20}}>
        <Item stackedLabel last>
          <Label>Old Password</Label>
          <Input />
        </Item>
        <Button transparent>
          <StyledTextSecondary>Forgot Password</StyledTextSecondary>
        </Button>
        <Item stackedLabel last>
          <Label>New Password</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Repeat New Password</Label>
          <Input />
        </Item>
      </Form>
      <Button block rounded success>
        <StyledTextButton>SAVE PASSWORD</StyledTextButton>
      </Button>
    </StyledContainer>
  );
};

export default ChangePass;
