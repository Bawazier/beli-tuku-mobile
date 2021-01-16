import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
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
import numeral from 'numeral';
import {TouchableOpacity, FlatList} from 'react-native';

//Component
import CardOrders from '../../Components/CardOrders';

//Actions
import transactionActions from '../../redux/actions/transaction';
import HomeActions from '../../redux/actions/home';

const Cart = () => {
  const {
    dataListCart,
    pageInfo,
    isListCartError,
    isListCartLoading,
  } = useSelector((state) => state.cart);
  const quantityCounter = useSelector((state) => state.quantityCounter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(transactionActions.listCart(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detailProduct = (id_product) => {
    dispatch(HomeActions.detailProduct(id_product));
    navigation.navigate('Product');
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  const checkout = async () => {
    await dispatch(transactionActions.parsingDataCart());
    await dataListCart.map(async (item) => {
      dispatch(
        transactionActions.checkoutCart(
          auth.token,
          item.id,
          quantityCounter.data[item.id].content.quantity,
        ),
      );
    });
    navigation.navigate('Checkout');
    dispatch(transactionActions.listCart(auth.token));
  };

  return (
    <>
      <Content>
        <StyledView>
          <StyledText>My Bag</StyledText>
        </StyledView>
        <StyledView>
          {!isListCartLoading && !isListCartError && (
            <FlatList
              onEndReachedThreshold={0.5}
              // onEndReached={newsNextLink}
              data={dataListCart}
              refreshing={false}
              onRefresh={() =>
                dispatch(transactionActions.listCart(auth.token))
              }
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => detailProduct(item.DetailProduct.Product.id)}>
                  <CardOrders
                    index={index}
                    idCart={item.id}
                    picture={item.DetailProduct.ProductImage.picture}
                    name={item.DetailProduct.Product.name}
                    price={item.DetailProduct.Product.price}
                    color={item.DetailProduct.ProductColor.name}
                    size={item.DetailProduct.ProductSize.size}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                    stock={item.DetailProduct.Product.stock}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              // ListFooterComponent={
              //   <View style={{justifyContent: 'center', height: '100%'}}>
              //     <Spinner color="green" />
              //   </View>
              // }
            />
          )}
        </StyledView>
      </Content>
      <StyledFooter>
        <Row>
          <StyledTextSecondary>Total amount:</StyledTextSecondary>
          <StyledTextPrice>
            Rp.
            {numeral(quantityCounter.totalAmount)
              .format(0, 0)
              .toString()
              .replace(',', '.')}
            ,-
          </StyledTextPrice>
        </Row>
        {!isListCartLoading && !isListCartError && (
          <StyledButton block rounded success onPress={checkout}>
            <StyledTextButton>CHECK OUT</StyledTextButton>
          </StyledButton>
        )}
      </StyledFooter>
    </>
  );
};

export default Cart;
