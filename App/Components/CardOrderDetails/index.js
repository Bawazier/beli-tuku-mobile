import React from 'react';
import {
  StyledCard,
  StyledCardItem,
  StyledBody,
  StyledTextPrimary,
  StyledTextSecondary,
  StyledTextGreen,
  Row,
  StyledRow,
} from './styled';

const CardOrderDetails = () => {
  return (
    <StyledCard>
      <StyledCardItem>
        <StyledBody>
          <Row>
            <StyledTextPrimary>Order No.1947034</StyledTextPrimary>
            <StyledTextSecondary>05-12-2019</StyledTextSecondary>
          </Row>
          <StyledRow>
            <StyledTextSecondary>Tracking number:</StyledTextSecondary>
            <StyledTextPrimary>IW3475453455</StyledTextPrimary>
          </StyledRow>
          <StyledRow>
            <StyledTextSecondary>Quantity:</StyledTextSecondary>
            <StyledTextPrimary>3</StyledTextPrimary>
          </StyledRow>
          <StyledRow>
            <StyledTextSecondary>Total Amount:</StyledTextSecondary>
            <StyledTextPrimary>112$</StyledTextPrimary>
          </StyledRow>
          <StyledTextGreen>Delivered</StyledTextGreen>
        </StyledBody>
      </StyledCardItem>
    </StyledCard>
  );
};

export default CardOrderDetails;
