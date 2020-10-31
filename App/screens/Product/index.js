import React from 'react';
import {
  StyledContent,
  StyledFooter,
  StyledButton,
  StyledTextButton,
  StyledImage,
  Row,
  Col,
  StyledViewContent,
  StyledTextProduct,
  StyledTextBrand,
  StyledTextDescription,
  StyledTextPrice,
  StyledTextColor,
  StyledViewColor,
  StyledColor,
  StyledViewAnotherProduct,
  StyledRow,
  StyledText,
  StyledTextSecondary,
} from './styled';

//Component
import Header from '../../Components/Header';
import CardProduct from '../../Components/CardProduct';

const Product = () => {
  return (
    <>
      <Header />
      <StyledContent>
        <StyledImage source={require('../../assets/product.png')} />
        <StyledViewContent>
          <Row>
            <Col>
              <StyledTextProduct>H&M</StyledTextProduct>
              <StyledTextBrand>Short black dress</StyledTextBrand>
            </Col>
            <StyledTextPrice>$19.99</StyledTextPrice>
          </Row>
          <StyledTextDescription>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square neckline with concealed
            elastication. Elasticated seam under the bust and short puff sleeves
            with a small frill trim.
          </StyledTextDescription>
        </StyledViewContent>
        <StyledViewContent>
          <StyledTextColor>Color</StyledTextColor>
          <StyledViewColor>
            <StyledColor color="#1A1A1A" isClick={true} />
            <StyledColor color="#D84242" />
            <StyledColor color="#4290D8" />
            <StyledColor color="#42D86C" />
          </StyledViewColor>
        </StyledViewContent>
        <StyledViewAnotherProduct>
          <Row>
            <StyledText>You can also like this</StyledText>
            <StyledTextSecondary>12 items</StyledTextSecondary>
          </Row>
          <StyledRow>
            {[...Array(10)].map((item) => (
              <CardProduct />
            ))}
          </StyledRow>
        </StyledViewAnotherProduct>
      </StyledContent>
      <StyledFooter>
        <StyledButton full rounded success>
          <StyledTextButton>ADD TO CART</StyledTextButton>
        </StyledButton>
      </StyledFooter>
    </>
  );
};

export default Product;
