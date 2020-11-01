import React from 'react';
import {StyledText, StyledContent, StyledContainer} from './styled';

//Component
import Header from '../../Components/Header';
import BottomTabs from '../../Components/BottomTabs';

const Orders = () => {
  return (
    <>
      <Header left={true} />
      <StyledContent>
        <StyledContainer>
          <StyledText>My Orders</StyledText>
        </StyledContainer>
      </StyledContent>
      <BottomTabs />
    </>
  );
};

export default Orders;
