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
import CardOrders from '../../Components/CardOrders';

const Cart = () => {
  return (
    <>
      <Content>
        <StyledView>
          <StyledText>My Bag</StyledText>
        </StyledView>
        <StyledView>
          {[...Array(10)].map((item) => (
            <CardOrders />
          ))}
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
    </>
  );
};

export default Cart;
