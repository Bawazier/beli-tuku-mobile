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
  const auth = useSelector((state) => state.auth);
  const quantityCounter = useSelector((state) => state.quantityCounter);
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useDispatch();
  const price = props.price * quantity;

  useEffect(() => {
    console.log(props.index);
    if (props.index === 0) {
      dispatch(transactionActions.returnDataCart());
    }
    dispatch(
      transactionActions.dataCart(props.idCart, {
        id: props.idCart,
        content: {
          quantity: props.quantity,
          price: props.price * props.quantity,
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = async () => {
    if (quantity < props.stock) {
      await setQuantity(quantity + 1);
      dispatch(
        transactionActions.increment(props.idCart, {
          content: {
            quantity: quantityCounter.data[props.idCart].content.quantity + 1,
            price:
              props.price + quantityCounter.data[props.idCart].content.price,
          },
        }),
      );
    }
  };

  const decrement = async () => {
    if (quantity > 1) {
      await setQuantity(quantity - 1);
      console.log(props.totalPrice);
      dispatch(
        transactionActions.decrement(props.idCart, {
          content: {
            quantity: quantityCounter.data[props.idCart].content.quantity - 1,
            price:
              quantityCounter.data[props.idCart].content.price - props.price,
          },
        }),
      );
    }
  };

  const handleDelete = async () => {
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
                {props.name.length < 28
                  ? props.name
                  : props.name.substring(0, 28).concat('...')}
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
                {numeral(
                  quantityCounter.data &&
                    quantityCounter.data[props.idCart] &&
                    quantityCounter.data[props.idCart].content.price,
                )
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
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {quantityCounter.data &&
                  quantityCounter.data[props.idCart] &&
                  quantityCounter.data[props.idCart].content.quantity}
              </Text>
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
