/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import NotFound from '../../Components/NotFound';

//Actions
import HomeActions from '../../redux/actions/home';

const Home = () => {
  const productNews = useSelector((state) => state.productNews);
  const productPopular = useSelector((state) => state.productPopular);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(HomeActions.new());
    dispatch(HomeActions.populer());
  }, []);

  return (
    <>
      <StyledContent>
        <StyledView>
          <StyledImageBackground
            source={require('../../assets/homeProduct.png')}>
            <Row>
              <StyledTextWhite>Street clothes</StyledTextWhite>
              <StyledButton onPress={() => navigation.navigate('Notification')}>
                <Icon name="bell-o" type="FontAwesome" />
              </StyledButton>
            </Row>
          </StyledImageBackground>
        </StyledView>
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
            {productNews.isLoading &&
              !productNews.isError &&
              [...Array(8)].map((item) => (
                <CardProduct
                  productName="...."
                  productPrice="...."
                  productRating="...."
                />
              ))}
            {!productNews.isLoading && productNews.isError && (
              <NotFound notifMessage={productNews.alertMsg} />
            )}
            {productNews.data.map((item) => (
              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <CardProduct
                  // productImage={
                  //   item.imagesPrimary.map((i) =>
                  //     i.id_product === item.id ? i.URL_image : '',
                  //   )[0]
                  // }
                  productName={item.name}
                  productPrice={item.price}
                  productRating={item.rating}
                  displayBadge={true}
                />
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
            {productPopular.isLoading &&
              !productPopular.isError &&
              [...Array(8)].map((item) => (
                <CardProduct
                  productName="...."
                  productPrice="...."
                  productRating="...."
                />
              ))}
            {!productPopular.isLoading && productPopular.isError && (
              <NotFound notifMessage={productPopular.alertMsg} />
            )}
            {productPopular.data.map((item) => (
              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <CardProduct
                  // productImage={
                  //   item.imagesPrimary.map((i) =>
                  //     i.id_product === item.id ? i.URL_image : '',
                  //   )[0]
                  // }
                  productName={item.name}
                  productPrice={item.price}
                  productRating={item.rating}
                  displayBadge={false}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Row>
      </StyledContent>
    </>
  );
};

export default Home;
