import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {Icon, Text, View} from 'native-base';
import numeral from 'numeral';
import {API_URL} from '@env';
import Dialog from 'react-native-dialog';
import transactionActions from '../../redux/actions/transaction';

const CardOrders = (props) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const quantityCounter = useSelector((state) => state.quantityCounter);
  const [quantity, setQuantity] = useState(props.quantity);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const price = props.totalPrice * quantity;

  useEffect(() => {
    if (quantityCounter.id[quantityCounter.id.length - 1] !== props.idCart) {
      dispatch(
        transactionActions.dataCart(props.idCart, {
          id: props.idCart,
          content: {
            quantity: quantity || 1,
            price: price,
          },
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = async () => {
    if (quantity < props.stock) {
      await setQuantity(quantity + 1);
      dispatch(
        transactionActions.increment(props.idCart, {
          content: {
            quantity: quantity + 1,
            price: props.totalPrice * (quantity + 1),
          },
        }),
      );
    }
  };

  const decrement = async () => {
    if (quantity > 1) {
      await setQuantity(quantity - 1);
      dispatch(
        transactionActions.decrement(props.idCart, {
          content: {quantity: quantity - 1, price: price - props.totalPrice},
        }),
      );
    }
  };

  const handleDelete = async () => {
    console.log(props.idCart);
    setDeleteDialog(!deleteDialog);
    await dispatch(transactionActions.deleteCart(auth.token, props.idCart));
    dispatch(transactionActions.deleteDataCart(props.idCart));
    dispatch(transactionActions.listCart(auth.token));
  };

  return (
    <StyledContainer>
      <StyledCard>
        <StyledCardItem>
          <StyledImage
            source={
              props.picture
                ? {uri: API_URL + '/' + props.picture}
                : require('../../assets/primaryImage.png')
            }
          />
          <StyledBody>
            <Row>
              <StyledTextPrimary style={{width: 170}}>
                {props.productName.length < 28
                  ? props.productName
                  : props.productName.substring(0, 28).concat('...')}
              </StyledTextPrimary>
              <Icon
                name="more-vert"
                type="MaterialIcons"
                onPress={() => setDeleteDialog(!deleteDialog)}
              />
            </Row>
            <StyledRow>
              <StyledTextSecondary>Price:</StyledTextSecondary>
              <StyledTextPrimary>
                Rp.
                {numeral(price || 0)
                  .format(0, 0)
                  .toString()
                  .replace(',', '.')}
                ,-
              </StyledTextPrimary>
            </StyledRow>
            <StyledRow>
              <Col>
                <StyledTextSecondary>Color:</StyledTextSecondary>
                <StyledTextSecondaryBlack>
                  {props.color || ''}
                </StyledTextSecondaryBlack>
              </Col>
              <Col>
                <StyledTextSecondary>Size:</StyledTextSecondary>
                <StyledTextSecondaryBlack>
                  {props.size || ''}
                </StyledTextSecondaryBlack>
              </Col>
            </StyledRow>

            <Row>
              <StyledRow>
                <Icon
                  name="minus-square"
                  type="FontAwesome"
                  onPress={decrement}
                  style={{color: '#222222', fontSize: 40}}
                />
              </StyledRow>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{quantity}</Text>
              <StyledRow>
                <Icon
                  name="plus-square"
                  type="FontAwesome"
                  onPress={increment}
                  style={{color: '#222222', fontSize: 40}}
                />
              </StyledRow>
            </Row>
          </StyledBody>
        </StyledCardItem>
      </StyledCard>

      <View>
        <Dialog.Container visible={deleteDialog}>
          <Dialog.Title>Cart delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this Cart? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button
            label="Cancel"
            onPress={() => setDeleteDialog(false)}
          />
          <Dialog.Button label="Delete" onPress={() => handleDelete()} />
        </Dialog.Container>
      </View>
    </StyledContainer>
  );
};

export default CardOrders;
