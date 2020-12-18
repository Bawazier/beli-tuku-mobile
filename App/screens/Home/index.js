/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
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
import {Icon, Spinner, View} from 'native-base';
import {TouchableOpacity, FlatList} from 'react-native';
import {API_URL} from '@env';

// Components
import CardProduct from '../../Components/CardProduct';

//Actions
import HomeActions from '../../redux/actions/home';

const Home = ({navigation}) => {
  const listNewProducts = useSelector((state) => state.listNewProducts);
  const listPopularProducts = useSelector((state) => state.listPopularProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.newProducts());
    dispatch(HomeActions.popularProducts());
  }, []);

  const detailProduct = (id_product) => {
    dispatch(HomeActions.detailProduct(id_product));
    navigation.navigate('Product');
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  const viewAll = () => {
    dispatch(HomeActions.catalogSort());
    navigation.navigate('Catalog');
  };

  return (
    <>
      <StyledContent>
        <StyledView>
          {/* {!listPopularProducts.isLoading &&
            !listPopularProducts.isError &&
            listPopularProducts.data &&
            listPopularProducts.data[0].ProductImages && (
              <StyledImageBackground
                source={
                  (listPopularProducts.data[0].ProductImages[0].picture && {
                    uri:
                      API_URL +
                      '/' +
                      listPopularProducts.data[0].ProductImages[0].picture,
                  }) ||
                  require('../../assets/homeProduct.png')
                }>
                <Row>
                  <StyledTextWhite>
                    {listNewProducts.data[0].Category.name || 'Street clothes'}
                  </StyledTextWhite>
                  <StyledButton
                    onPress={() => navigation.navigate('Notification')}>
                    <Icon name="bell-o" type="FontAwesome" />
                  </StyledButton>
                </Row>
              </StyledImageBackground>
            )} */}
        </StyledView>
        <Row>
          <Col>
            <StyledH1>New</StyledH1>
            <StyledText>You’ve never seen it before!</StyledText>
          </Col>
          <Col>
            <TouchableOpacity onPress={viewAll}>
              <StyledH3>View all</StyledH3>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          {listNewProducts.isLoading && !listNewProducts.isError && (
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <CardProduct
                productStore="..."
                productName="..."
                productPrice="..."
                productRating="..."
              />
            </TouchableOpacity>
          )}
          {!listNewProducts.isLoading && listNewProducts.isError && (
            <StyledH1>{listNewProducts.alertMsg || Error}</StyledH1>
          )}
          {!listNewProducts.isLoading && !listNewProducts.isError && (
            <FlatList
              onEndReachedThreshold={0.5}
              // onEndReached={newsNextLink}
              data={listNewProducts.data}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => detailProduct(item.id)}>
                  <CardProduct
                    productImage={item.ProductImages[0].picture}
                    productStore={item.Store.name}
                    productName={item.name}
                    productPrice={item.price}
                    productRating={item.ratings}
                    displayBadge={true}
                  />
                </TouchableOpacity>
              )}
              horizontal
              keyExtractor={(item) => item.id}
              // ListFooterComponent={
              //   <View style={{justifyContent: 'center', height: '100%'}}>
              //     <Spinner color="green" />
              //   </View>
              // }
            />
          )}
        </Row>
        <Row>
          <Col>
            <StyledH1>Popular</StyledH1>
            <StyledText>You’ve never seen it before!</StyledText>
          </Col>
          <Col>
            <TouchableOpacity onPress={() => viewAll('ratings')}>
              <StyledH3>View all</StyledH3>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          {listPopularProducts.isLoading && !listPopularProducts.isError && (
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <CardProduct
                productStore="..."
                productName="..."
                productPrice="..."
                productRating="..."
              />
            </TouchableOpacity>
          )}
          {!listPopularProducts.isLoading && listPopularProducts.isError && (
            <StyledH1>{listPopularProducts.alertMsg || Error}</StyledH1>
          )}
          {!listPopularProducts.isLoading && !listPopularProducts.isError && (
            <FlatList
              onEndReachedThreshold={0.5}
              // onEndReached={newsNextLink}
              data={listPopularProducts.data}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => detailProduct(item.id)}>
                  <CardProduct
                    productImage={item.ProductImages[0].picture}
                    productStore={item.Store.name}
                    productName={item.name}
                    productPrice={item.price}
                    productRating={item.ratings}
                  />
                </TouchableOpacity>
              )}
              horizontal
              keyExtractor={(item) => item.id}
              // ListFooterComponent={
              //   <View style={{justifyContent: 'center', height: '100%'}}>
              //     <Spinner color="green" />
              //   </View>
              // }
            />
          )}
        </Row>
      </StyledContent>
    </>
  );
};

export default Home;
