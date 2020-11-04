import React from 'react';
import {
  StyledText,
  StyledTextPrimary,
  StyledTextSubPrimary,
  StyledTextSecondary,
  StyledContainer,
  Row,
  StyledContent,
  StyledCardInput,
  StyledLabel,
} from './styled';
import {Form, Item, Input, Button, Switch} from 'native-base';

const Setting = () => {
  return (
    <StyledContent>
      <StyledText>Settings</StyledText>
      <StyledContainer>
        <StyledTextPrimary>Personal Information</StyledTextPrimary>
        <Form>
          <Item stackedLabel last>
            <StyledCardInput>
              <StyledLabel>Full Name</StyledLabel>
              <Input />
            </StyledCardInput>
          </Item>
          <Item stackedLabel last>
            <StyledLabel>Full Name</StyledLabel>
            <Input />
          </Item>
        </Form>
      </StyledContainer>
      <StyledContainer>
        <Row>
          <StyledTextPrimary>Password</StyledTextPrimary>
          <Button>
            <StyledTextSecondary>Change</StyledTextSecondary>
          </Button>
        </Row>
        <Form>
          <Item>
            <StyledLabel>Password</StyledLabel>
            <Input />
          </Item>
        </Form>
      </StyledContainer>
      <StyledContainer>
        <StyledTextPrimary>Notification</StyledTextPrimary>
        <Row>
          <StyledTextSubPrimary>Sales</StyledTextSubPrimary>
          <Switch value={true} />
        </Row>
        <Row>
          <StyledTextSubPrimary>New arrivals</StyledTextSubPrimary>
          <Switch value={false} />
        </Row>
        <Row>
          <StyledTextSubPrimary>Delivery status changes</StyledTextSubPrimary>
          <Switch value={false} />
        </Row>
      </StyledContainer>
    </StyledContent>
  );
};

export default Setting;
