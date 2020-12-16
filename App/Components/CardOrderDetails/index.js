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
import numeral from 'numeral';
import {format} from 'date-fns';

const CardOrderDetails = (props) => {
  return (
    <StyledCard>
      <StyledCardItem>
        <StyledBody>
          <Row>
            <StyledTextPrimary>
              Order No.
              {props.noOrder.replace('.', '').substring(0, 8)}
            </StyledTextPrimary>
            <StyledTextSecondary>
              {format(new Date(props.createdAt), 'yyyy-MM-dd')}
            </StyledTextSecondary>
          </Row>
          <StyledRow>
            <StyledTextSecondary>Tracking number:</StyledTextSecondary>
            <StyledTextPrimary>{props.noTracking}</StyledTextPrimary>
          </StyledRow>
          <StyledRow>
            <StyledTextSecondary>Quantity:</StyledTextSecondary>
            <StyledTextPrimary>{props.Quantity}</StyledTextPrimary>
          </StyledRow>
          <StyledRow>
            <StyledTextSecondary>Total Amount:</StyledTextSecondary>
            <StyledTextPrimary>
              Rp
              {numeral(props.totalAmount)
                .format(0, 0)
                .toString()
                .replace(',', '.')}
            </StyledTextPrimary>
          </StyledRow>
          <StyledTextGreen>{props.status.toUpperCase()}</StyledTextGreen>
        </StyledBody>
      </StyledCardItem>
    </StyledCard>
  );
};

export default CardOrderDetails;
