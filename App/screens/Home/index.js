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
import {ScrollView, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

// Components
import CardProduct from '../../Components/CardProduct';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <StyledView>
        <StyledImageBackground source={require('../../assets/homeProduct.png')}>
          <Row>
            <StyledTextWhite>Street clothes</StyledTextWhite>
            <StyledButton onPress={() => navigation.navigate('Notification')}>
              <Icon name="bell-o" type="FontAwesome" />
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
          <ScrollView horizontal>
            {[...Array(8)].map((item) => (
              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <CardProduct />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
          <ScrollView horizontal>
            {[...Array(8)].map((item) => (
              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <CardProduct />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Row>
      </StyledContent>
    </>
  );
};

export default Home;
