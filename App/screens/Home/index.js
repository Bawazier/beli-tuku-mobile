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

import {useNavigation} from '@react-navigation/native';

// Components
import CardProduct from '../../Components/CardProduct';
import NotFound from '../../Components/NotFound';

//Actions
import HomeActions from '../../redux/actions/home';
import ProfileActions from '../../redux/actions/profile';

const Home = () => {
  const productNews = useSelector((state) => state.productNews);
  const productPopular = useSelector((state) => state.productPopular);
  const [dataNews, setDataNews] = useState(
    productNews.data.length ? productNews.data : null,
  );
  const [dataPopular, setDataPopular] = useState(
    productNews.data.length ? productPopular.data : null,
  );
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const newsNextLink = async (info) => {
    const {count} = productNews.pageInfo;
    console.log(info.distanceFromEnd);
    if (info.distanceFromEnd >= 0) {
      if (count > 10) {
        await dispatch(HomeActions.new(10));
        setDataNews([...dataNews, ...productNews.data]);
      }
    }
  };

  const popularNextLink = async (info) => {
    const {count} = productPopular.pageInfo;
    console.log(info.distanceFromEnd);
    if (info.distanceFromEnd >= 0) {
      if (count > 10) {
        await dispatch(HomeActions.popular(10));
        setDataPopular([...dataPopular, ...productPopular.data]);
      }
    }
  };

  useEffect(async () => {
    await dispatch(HomeActions.new());
    await dispatch(HomeActions.popular());
    await dispatch(ProfileActions.getProfile(auth.token));
    await dispatch(ProfileActions.getAddress(auth.token));
    await setDataNews(productNews.data.length ? productNews.data : null);
    setDataPopular(productPopular.data.length ? productPopular.data : null);
    console.log(dataNews);
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
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={newsNextLink}
            data={dataNews}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <CardProduct
                  productImage={item.ProductImages[0].picture}
                  productName={item.name}
                  productPrice={item.price}
                  productRating={item.ProductRatings.length}
                  displayBadge={true}
                />
              </TouchableOpacity>
            )}
            horizontal
            keyExtractor={(item) => item._id}
            // ListFooterComponent={
            //   <View style={{justifyContent: 'center', height: '100%'}}>
            //     <Spinner color="green" />
            //   </View>
            // }
          />
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
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={popularNextLink}
            data={dataPopular}
            renderItem={({item}) => (
              <>
                {productPopular.isLoading &&
                  !productPopular.isError &&
                  [...Array(8)].map(() => (
                    <CardProduct
                      productName="...."
                      productPrice="...."
                      productRating="...."
                    />
                  ))}
                {!productPopular.isLoading && productPopular.isError && (
                  <NotFound notifMessage={productPopular.alertMsg} />
                )}
                {!productPopular.isLoading && !productPopular.isError && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product')}>
                    <CardProduct
                      productImage={item.ProductImages[0].picture}
                      productName={item.name}
                      productPrice={item.price}
                      productRating={item.ProductRatings.length}
                      displayBadge={true}
                    />
                  </TouchableOpacity>
                )}
              </>
            )}
            horizontal
            keyExtractor={(item) => item._id}
            // ListFooterComponent={
            //   <View style={{justifyContent: 'center', height: '100%'}}>
            //     <Spinner color="green" />
            //   </View>
            // }
          />
        </Row>
      </StyledContent>
    </>
  );
};

export default Home;
