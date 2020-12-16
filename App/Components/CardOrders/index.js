import React, {useState} from 'react';
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

const CardOrders = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const price = props.totalPrice * quantity;

  const handleDelete = () => {
    setDeleteDialog(!deleteDialog);
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
                  onPress={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                  style={{color: '#222222', fontSize: 40}}
                />
              </StyledRow>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{quantity}</Text>
              <StyledRow>
                <Icon
                  name="plus-square"
                  type="FontAwesome"
                  onPress={() =>
                    setQuantity(
                      quantity < props.stock ? quantity + 1 : quantity,
                    )
                  }
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
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>
      </View>
    </StyledContainer>
  );
};

export default CardOrders;
