import React from 'react';
import {
  AlertMessage,
  StyledView,
  StyledContent,
  StyledItem,
  StyledText,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Form, Text} from 'native-base';

// Components
import Header from '../../Components/Header';

const Login = () => {
  return (
    <>
      <Header
        left={
          <Button transparent>
            <Icon name="chevron-left" color="black" size={20} />
          </Button>
        }
      />
      <StyledView>
        <StyledText>Reset password</StyledText>
      </StyledView>
      <StyledContent>
        <Form>
          <AlertMessage>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </AlertMessage>
          <StyledItem>
            <StyledLabel>New Password</StyledLabel>
            <StyledInput />
          </StyledItem>
          <StyledItem>
            <StyledLabel>Confirm Password</StyledLabel>
            <StyledInput />
          </StyledItem>
        </Form>
        <StyledButton block success rounded>
          <Text>Reset Password</Text>
        </StyledButton>
      </StyledContent>
    </>
  );
};

export default Login;
