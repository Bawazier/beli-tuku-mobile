import React from 'react';
import {
  StyledButton,
  StyledContent,
  StyledH1,
  StyledH3,
  StyledText,
  Row,
  Col,
  StyledView,
  StyledImageBackground,
  StyledTextWhite,
} from './styled';
import {Icon} from 'native-base';

// Components
import CardProduct from '../../Components/CardProduct';
import BottomTabs from '../../Components/BottomTabs';

const Home = () => {
  return (
    <>
      <StyledView>
        <StyledImageBackground source={require('../../assets/homeProduct.png')}>
          <Row>
            <StyledTextWhite>Street clothes</StyledTextWhite>
            <StyledButton>
              <Icon name="md-bell" />
            </StyledButton>
          </Row>
        </StyledImageBackground>
      </StyledView>
      <StyledContent>
        <Row>
          <Col>
            <StyledH1>New</StyledH1>
            <StyledText>You’ve never seen it before!</StyledText>
          </Col>
          <Col>
            <StyledH3>View all</StyledH3>
          </Col>
        </Row>
        <Row>
          {[...Array(8)].map((item) => (
            <CardProduct />
          ))}
        </Row>
        <Row>
          <Col>
            <StyledH1>Popular</StyledH1>
            <StyledText>You’ve never seen it before!</StyledText>
          </Col>
          <Col>
            <StyledH3>View all</StyledH3>
          </Col>
        </Row>
        <Row>
          {[...Array(8)].map((item) => (
            <CardProduct />
          ))}
        </Row>
      </StyledContent>
      <BottomTabs />
    </>
  );
};

export default Home;
