import React from 'react';
import {
  StyledView,
  StyledContent,
  StyledItem,
  StyledText,
  StyledTextButton,
  StyledButton,
  StyledInput,
  StyledLabel,
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
            <Icon name="chevron-left" color="#222222" size={20} />
          </Button>
        }
      />
      <StyledView>
        <StyledText>Login</StyledText>
      </StyledView>
      <StyledContent>
        <Form>
          <StyledItem>
            <StyledLabel>Email</StyledLabel>
            <StyledInput />
            <Icon active name="check" size={20} color="#2AA952" />
          </StyledItem>
          <StyledItem>
            <StyledLabel>Password</StyledLabel>
            <StyledInput />
          </StyledItem>
        </Form>
        <StyledButton iconRight transparent light full>
          <StyledTextButton>Forgot your password?</StyledTextButton>
          <Icon name="arrow-right" size={20} color="#2AA952" />
        </StyledButton>
        <Button block success rounded>
          <Text>Login</Text>
        </Button>
      </StyledContent>
    </>
  );
};

export default Login;
