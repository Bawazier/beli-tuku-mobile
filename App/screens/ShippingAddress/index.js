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
  StyledItem,
  StyledInput,
  StyledTextBlockButton,
} from './styled';
import {Icon} from 'native-base';

//Component
import Header from '../../Components/Header';

const ShippingAddress = () => {
  return (
    <>
      <Header />
      <StyledContent>
        <StyledContainer>
          <StyledItem>
            <Icon name="ios-search" />
            <StyledInput placeholder="Search" />
            <Icon name="ios-people" />
          </StyledItem>
        </StyledContainer>
        <StyledContainer>
          <StyledText>Shipping address</StyledText>
          {[...Array(3)].map((item) => (
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
          ))}
        </StyledContainer>
        <StyledContainer>
          <StyledButton block bordered dark rounded>
            <StyledTextBlockButton>ADD NEW ADDRESS</StyledTextBlockButton>
          </StyledButton>
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default ShippingAddress;
