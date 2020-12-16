import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
  StyledViewInfo,
} from './styled';
import {
  Text,
  Button,
  Icon,
  View,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';
import {TouchableOpacity, FlatList} from 'react-native';
import StarRating from 'react-native-star-rating';
import {useNavigation} from '@react-navigation/native';
import numeral from 'numeral';
import {SliderBox} from 'react-native-image-slider-box';
import {API_URL} from '@env';
import Dialog from 'react-native-dialog';

//Component
import CardProduct from '../../Components/CardProduct';

//Actions
import HomeActions from '../../redux/actions/home';
import transactionActions from '../../redux/actions/transaction';

const Product = () => {
  const {dataProduct, isLoading, isError} = useSelector(
    (state) => state.detailProduct,
  );
  const {dataReviews, pageInfo, isReviewsLoading, isReviewsError} = useSelector(
    (state) => state.detailProduct,
  );
  const catalog = useSelector((state) => state.catalogResults);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [choiceColor, setChoiceColor] = useState({});
  const [choiceSize, setChoiceSize] = useState([]);
  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    dispatch(
      HomeActions.catalogSearch(
        '',
        (dataProduct.Category && dataProduct.Category.name) || '',
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = () => {
    if (auth.token.length) {
      dispatch(
        transactionActions.addToCart(
          auth.token,
          dataProduct.id,
          1,
          choiceColor.id || dataProduct.ProductColors[0].id,
          choiceSize.id || dataProduct.ProductSizes[0].id,
        ),
      );
      setAddCart(!addCart);
    } else {
      navigation.navigate('Login');
    }
  };

  const detailProduct = (id_product) => {
    dispatch(HomeActions.detailProduct(id_product));
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  const navigation = useNavigation();
  return (
    <>
      <StyledContent>
        {!isLoading && !isError && (
          <SliderBox
            images={
              dataProduct.ProductImages.map(
                (item) => API_URL + '/' + item.picture,
              ) || [require('../../assets/primaryImage.png')]
            }
            sliderBoxHeight={400}
          />
        )}
        <StyledViewContent>
          <View
            style={{backgroundColor: '#fff', padding: 10, marginBottom: 15}}>
            <StyledTextPrice>
              Rp
              {numeral(dataProduct.price || 0)
                .format(0, 0)
                .toString()
                .replace(',', '.')}
            </StyledTextPrice>
            <Row>
              <Col>
                <StyledTextProduct>
                  {dataProduct.name || '...'}
                </StyledTextProduct>
                <StyledTextBrand>
                  {(dataProduct.Category && dataProduct.Category.name) || '...'}
                </StyledTextBrand>
              </Col>
            </Row>
            <StyledRow>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={dataProduct.ratings || 0}
                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                starSize={15}
                containerStyle={{marginHorizontal: 3, width: 80}}
                fullStarColor={'#075E54'}
              />
              <StyledTextBrand>( {dataProduct.ratings || 0} )</StyledTextBrand>
            </StyledRow>
          </View>
          <View
            style={{backgroundColor: '#fff', padding: 10, marginBottom: 15}}>
            <View style={{borderBottomWidth: 0.5, paddingBottom: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <StyledTextColor>Choose Color:</StyledTextColor>
                <Text note>
                  &nbsp;
                  {(choiceColor && choiceColor.name) ||
                    (dataProduct.ProductColors &&
                      dataProduct.ProductColors[0].name)}
                </Text>
              </View>
              <StyledViewColor>
                {!isLoading &&
                  !isError &&
                  dataProduct.ProductColors.map((item) => (
                    <StyledColor
                      onPress={() => setChoiceColor(item)}
                      color={item.hexa}
                      isClick={choiceColor.id === item.id}
                      disabled={item.status !== 'available' ? true : false}
                    />
                  ))}
              </StyledViewColor>
            </View>
            <View style={{marginTop: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <StyledTextColor>Choose Size:</StyledTextColor>
                <Text note>
                  &nbsp;
                  {(choiceSize && choiceSize.size) ||
                    (dataProduct.ProductSizes &&
                      dataProduct.ProductSizes[0].size)}
                </Text>
              </View>
              <StyledViewColor>
                {!isLoading &&
                  !isError &&
                  dataProduct.ProductSizes.map((item) => (
                    <Button
                      bordered
                      onPress={() => setChoiceSize(item)}
                      warning={choiceSize.size === item.size ? true : false}
                      info={choiceSize.size === item.size ? false : true}
                      style={{borderRadius: 5, width: 60, marginRight: 10}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          width: '100%',
                          textAlign: 'center',
                        }}>
                        {item.size}
                      </Text>
                    </Button>
                  ))}
              </StyledViewColor>
            </View>
          </View>
          <View
            style={{backgroundColor: '#fff', padding: 10, marginBottom: 15}}>
            <List>
              <ListItem avatar style={{alignItems: 'flex-start'}}>
                <Left>
                  <Thumbnail
                    source={require('../../assets/primaryImage.png')}
                  />
                </Left>
                <Body style={{borderBottomWidth: 0}}>
                  <Text>
                    {(dataProduct.Store && dataProduct.Store.name) || ''}
                  </Text>
                  <Text note>
                    {(dataProduct.Store && dataProduct.Store.description) || ''}
                  </Text>
                </Body>
                <Right style={{borderBottomWidth: 0}}>
                  <Button bordered info disabled>
                    <Text>Follow</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </View>
          <View
            style={{backgroundColor: '#fff', padding: 10, marginBottom: 15}}>
            <StyledTextColor>Product information</StyledTextColor>
            <Text note>{dataProduct.description || ''}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 20,
                marginVertical: 10,
              }}>
              <Text>Condition</Text>
              <Text note>
                {(dataProduct.Condition && dataProduct.Condition.status) || ''}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 20,
                marginVertical: 10,
              }}>
              <Text>Category</Text>
              <Text note>
                {(dataProduct.Category && dataProduct.Category.name) || ''}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 20,
                marginVertical: 10,
              }}>
              <Text>Minimum order</Text>
              <Text note>1 Piece</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 20,
                marginVertical: 10,
              }}>
              <Text>Stock</Text>
              <Text note>{dataProduct.stock || ''}</Text>
            </View>
          </View>
          <View
            style={{backgroundColor: '#fff', padding: 10, marginBottom: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <StyledTextColor>Reviews</StyledTextColor>
              <Text style={{color: '#9ce47c'}}>View all</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <StarRating
                disabled={true}
                maxStars={1}
                rating={dataProduct.ratings || 0}
                // selectedStar={(rating) => this.onStarRatingPress(rating)}
                starSize={25}
                containerStyle={{marginRight: 5}}
                fullStarColor={'#075E54'}
              />
              <Text>{dataProduct.ratings || 0} &nbsp;</Text>
              <Text note>from {pageInfo.count || 0} reviews</Text>
            </View>
            {!isReviewsLoading && !isReviewsError && dataReviews && (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={dataReviews[0].rating || 0}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    starSize={15}
                    containerStyle={{width: 60, marginRight: 5}}
                    fullStarColor={'#075E54'}
                  />
                  <Text note>by &nbsp;</Text>
                  <Text>{dataReviews[0].User.name || 0} </Text>
                </View>
                <View>{dataReviews[0].comment}</View>
              </View>
            )}
          </View>
          <View>
            <Dialog.Container visible={addCart}>
              <Dialog.Title>Success add to cart</Dialog.Title>
              {/* <Dialog.Description>
                Do you want to delete this account? You cannot undo this action.
              </Dialog.Description> */}
              <Dialog.Button label="OK" onPress={() => setAddCart(false)} />
            </Dialog.Container>
          </View>
        </StyledViewContent>

        <StyledViewAnotherProduct>
          <Row>
            <StyledText>You can also like this</StyledText>
            <StyledTextSecondary>
              {catalog.pageInfo && catalog.pageInfo.count} items
            </StyledTextSecondary>
          </Row>
          {!catalog.isLoading && !catalog.isError && (
            <StyledRow>
              <FlatList
                onEndReachedThreshold={0.5}
                // onEndReached={newsNextLink}
                data={catalog.data}
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
            </StyledRow>
          )}
        </StyledViewAnotherProduct>
      </StyledContent>
      <StyledFooter>
        {!isLoading && !isError && (
          <StyledButton
            bordered
            disabled
            style={{width: '20%', marginRight: 5, borderRadius: 10}}>
            <Icon name="wechat" type="FontAwesome" />
          </StyledButton>
        )}
        {!isLoading && !isError && (
          <StyledButton
            bordered
            warning
            style={{width: '35%', marginLeft: 5, borderRadius: 10}}>
            <Text>BUY</Text>
          </StyledButton>
        )}
        {!isLoading && !isError && (
          <StyledButton
            warning
            onPress={addToCart}
            style={{width: '40%', marginLeft: 5, borderRadius: 10}}>
            <StyledTextButton>ADD TO CART</StyledTextButton>
          </StyledButton>
        )}
      </StyledFooter>
    </>
  );
};

export default Product;
