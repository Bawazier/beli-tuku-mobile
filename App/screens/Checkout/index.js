import React from 'react';
import {
  StyledContent,
  StyledContainer,
  StyledText,
  StyledViewCard,
  Row,
  StyledTextCard,
  StyledButton,
  StyledTextButton,
  StyledTextSecondary,
  StyledTextPrice,
  StyledRow,
  StyledImage,
  StyledFooter,
  StyledTextBlockButton,
} from './styled';
import {Icon} from 'native-base';

//Component
import Header from '../../Components/Header';

const Checkout = () => {
  return (
    <>
      <Header />
      <StyledContent>
        <StyledContainer>
          <StyledText>Shipping address</StyledText>
          <StyledViewCard>
            <Row>
              <StyledTextCard>Jane Doe</StyledTextCard>
              <StyledButton transparent small>
                <StyledTextButton>Change</StyledTextButton>
              </StyledButton>
            </Row>
            <StyledTextCard>3 Newbridge Court </StyledTextCard>
            <StyledTextCard>
              Chino Hills, CA 91709, United States{' '}
            </StyledTextCard>
          </StyledViewCard>
        </StyledContainer>
        <StyledContainer>
          <StyledText>Payment</StyledText>
          {[...Array(3)].map((item) => (
            <StyledRow>
              <StyledViewCard>
                <StyledImage source={require('../../assets/Logo-GoPay.png')} />
              </StyledViewCard>
              <StyledTextCard>Gopay</StyledTextCard>
              <StyledButton transparent small>
                <Icon name="md-pencil" color="white" />
              </StyledButton>
            </StyledRow>
          ))}
        </StyledContainer>
      </StyledContent>
      <StyledFooter>
        <Row>
          <StyledTextSecondary>Order:</StyledTextSecondary>
          <StyledTextPrice>112$</StyledTextPrice>
        </Row>
        <Row>
          <StyledTextSecondary>Delivery:</StyledTextSecondary>
          <StyledTextPrice>15$</StyledTextPrice>
        </Row>
        <Row>
          <StyledTextSecondary>Summary:</StyledTextSecondary>
          <StyledTextPrice>127$</StyledTextPrice>
        </Row>
        <StyledButton block rounded success>
          <StyledTextBlockButton>SUBMIT ORDER</StyledTextBlockButton>
        </StyledButton>
      </StyledFooter>
    </>
  );
};

export default Checkout;
