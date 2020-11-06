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

const Login = () => {
  return (
    <>
      <StyledView>
        <StyledText>Forgot password</StyledText>
      </StyledView>
      <StyledContent>
        <Form>
          <AlertMessage>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </AlertMessage>
          <StyledItem>
            <StyledLabel>Email</StyledLabel>
            <StyledInput />
            <Icon active name="close" size={20} color="#F01F0E" />
          </StyledItem>
        </Form>
        <StyledButton block success rounded>
          <Text>SEND</Text>
        </StyledButton>
      </StyledContent>
    </>
  );
};

export default Login;
