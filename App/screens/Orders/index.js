import React from 'react';
import {StyledText, StyledContent, StyledContainer} from './styled';

//Component
import CardOrderDetails from '../../Components/CardOrderDetails';

const Orders = () => {
  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledText>My Orders</StyledText>
        </StyledContainer>
        <StyledContainer>
          {[...Array(4)].map((item) => (
            <CardOrderDetails />
          ))}
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default Orders;
