import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyledContent,
  StyledContainer,
  StyledText,
  StyledViewCard,
  Row,
  Col,
  StyledTextCard,
  StyledButton,
  StyledTextButton,
  StyledTextSecondary,
  StyledTextPrice,
  StyledRow,
  StyledImage,
  StyledFooter,
  StyledTextBlockButton,
} from './styled';
import {Icon, Text, View, Button} from 'native-base';
import numeral from 'numeral';
import Dialog from 'react-native-dialog';

//Component

//ACtions
import addressActions from '../../redux/actions/address';
import accountActions from '../../redux/actions/account';
import transactionActions from '../../redux/actions/transaction';

const Checkout = ({navigation}) => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const {dataList, isLoading, isListError} = useSelector(
    (state) => state.address,
  );
  const {data} = useSelector((state) => state.account);
  const [order, setOrder] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountActions.getAccount(auth.token));
    dispatch(addressActions.listAddress(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const discardCheckout = async () => {
    setOrder(false);
    await dispatch(transactionActions.discardCheckoutCart(auth.token));
    dispatch(transactionActions.listCart(auth.token));
    navigation.goBack();
  };

  const submitOrder = async () => {
    if (data.Credit.saldo >= cart.totalAmount + 20000) {
      await dispatch(transactionActions.orderByCredit(auth.token));
      navigation.navigate('Success');
    } else if (cart.isPostError) {
      setErrorMsg('sorry there is a problem, please place an order again');
      setOrder(!order);
    } else {
      setErrorMsg(
        "Sorry you can't make a transaction because your balance is insufficient, please do a top up first",
      );
      setOrder(!order);
    }
  };

  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledText>Shipping address</StyledText>
          {!isLoading &&
            !isListError &&
            dataList.map((item) => {
              if (item.isPrimary) {
                return (
                  <StyledViewCard style={{width: '100%'}}>
                    <Row>
                      <StyledTextCard>{item.name}</StyledTextCard>
                      <StyledButton
                        transparent
                        small
                        onPress={() => navigation.navigate('ShippingAddress')}>
                        <StyledTextButton>Change</StyledTextButton>
                      </StyledButton>
                    </Row>
                    <StyledTextCard>{item.address}</StyledTextCard>
                    <StyledTextCard>{item.region}</StyledTextCard>
                  </StyledViewCard>
                );
              }
            })}
          {!isLoading && isListError && (
            <Button
              rounded
              warning
              full
              onPress={() => navigation.navigate('ShippingAddress')}>
              <Text>create address first before order</Text>
            </Button>
          )}
        </StyledContainer>
        <StyledContainer>
          <StyledText>Payment</StyledText>
          <StyledRow>
            <Col>
              <StyledViewCard>
                {/* <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: '#9ce47c',
                  }}>
                  CREDIT
                </Text> */}
                <Icon
                  name="money-check"
                  type="FontAwesome5"
                  style={{
                    fontSize: 20,
                    color: '#9ce47c',
                  }}
                />
              </StyledViewCard>
              <View>
                <Text note>Saldo :</Text>
                <Text style={{fontWeight: 'bold'}}>
                  Rp.
                  {numeral((data.Credit && data.Credit.saldo) || 0)
                    .format(0, 0)
                    .toString()
                    .replace(',', '.')}
                  ,-
                </Text>
              </View>
            </Col>
            <StyledButton
              bordered
              warning
              small
              onPress={() => navigation.navigate('Topup')}>
              <Text>Topup</Text>
            </StyledButton>
          </StyledRow>
        </StyledContainer>
      </StyledContent>
      <StyledFooter>
        <Row style={{marginVertical: 5}}>
          <Text note>Order:</Text>
          <Text>
            Rp.
            {numeral(cart.totalAmount || 0)
              .format(0, 0)
              .toString()
              .replace(',', '.')}
            ,-
          </Text>
        </Row>
        <Row style={{marginVertical: 5}}>
          <Text note>Delivery:</Text>
          <Text>
            Rp.
            {numeral(20000).format(0, 0).toString().replace(',', '.')}
            ,-
          </Text>
        </Row>
        <Row style={{marginVertical: 5}}>
          <Text note>Summary:</Text>
          <Text style={{fontWeight: 'bold'}}>
            Rp.
            {numeral(cart.totalAmount + 20000 || 0)
              .format(0, 0)
              .toString()
              .replace(',', '.')}
            ,-
          </Text>
        </Row>
        {!cart.isLoading && !isListError && (
          <Row>
            <StyledButton
              bordered
              warning
              onPress={discardCheckout}
              style={{width: '35%', borderRadius: 10}}>
              <Text style={{width: '100%', textAlign: 'center'}}>DISCARD</Text>
            </StyledButton>
            <StyledButton
              warning
              onPress={submitOrder}
              style={{width: '60%', borderRadius: 10}}>
              <Text style={{width: '100%', textAlign: 'center'}}>
                SUBMIT ORDER
              </Text>
            </StyledButton>
          </Row>
        )}
      </StyledFooter>
      <View>
        <Dialog.Container visible={order}>
          <Dialog.Description>{errorMsg}</Dialog.Description>
          <Dialog.Button label="Discard" onPress={discardCheckout} />
          <Dialog.Button
            label="Topup"
            onPress={() => {
              setOrder(false);
              navigation.navigate('Topup');
            }}
          />
        </Dialog.Container>
      </View>
    </>
  );
};

export default Checkout;
