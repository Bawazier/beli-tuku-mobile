import React from 'react';
import {
  StyledContainer,
  Row,
  Col,
  StyledRow,
  StyledCard,
  StyledCardItem,
  StyledBody,
  StyledImage,
  StyledTextPrimary,
  StyledTextSecondary,
  StyledTextSecondaryBlack,
  StyledButtonCircle,
} from './styled';
import {Icon} from 'native-base';

const CardOrders = () => {
  return (
    <StyledContainer>
      <StyledCard>
        <StyledCardItem>
          <StyledImage source={require('../../assets/product.png')} />
          <StyledBody>
            <Row>
              <StyledTextPrimary>T-Shirt</StyledTextPrimary>
              <Icon name="more-vert" type="MaterialIcons" />
            </Row>
            <StyledRow>
              <Col>
                <StyledTextSecondary>Color:</StyledTextSecondary>
                <StyledTextSecondaryBlack>Gray</StyledTextSecondaryBlack>
              </Col>
              <Col>
                <StyledTextSecondary>Size:</StyledTextSecondary>
                <StyledTextSecondaryBlack>L</StyledTextSecondaryBlack>
              </Col>
            </StyledRow>
            <Row>
              <StyledRow>
                <StyledButtonCircle>
                  <Icon name="minus" type="FontAwesome" color="black" />
                </StyledButtonCircle>
              </StyledRow>
              <StyledTextPrimary>1</StyledTextPrimary>
              <StyledRow>
                <StyledButtonCircle>
                  <Icon name="plus" type="FontAwesome" color="black" />
                </StyledButtonCircle>
              </StyledRow>
              <StyledTextPrimary>30$</StyledTextPrimary>
            </Row>
          </StyledBody>
        </StyledCardItem>
      </StyledCard>
    </StyledContainer>
  );
};

export default CardOrders;
