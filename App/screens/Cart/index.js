import React from 'react';
import {
  StyledText,
  StyledView,
  StyledFooter,
  StyledTextPrice,
  StyledTextSecondary,
  StyledButton,
  StyledTextButton,
  Row,
} from './styled';
import {Content} from 'native-base';

//Component
import Header from '../../Components/Header';
import BottomTabs from '../../Components/BottomTabs';

const Cart = () => {
  return (
    <>
      <Header />
      <Content>
        <StyledView>
          <StyledText>My Bag</StyledText>
        </StyledView>
      </Content>
      <StyledFooter>
        <Row>
          <StyledTextSecondary>Total amount:</StyledTextSecondary>
          <StyledTextPrice>112$</StyledTextPrice>
        </Row>
        <StyledButton block rounded success>
          <StyledTextButton>CHECK OUT</StyledTextButton>
        </StyledButton>
      </StyledFooter>
      <BottomTabs />
    </>
  );
};

export default Cart;
