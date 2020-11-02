import React from 'react';
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
import {ListItem, Text, Body, Right, Icon} from 'native-base';
import {ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';

//Component
import CardProduct from '../../Components/CardProduct';

const Product = () => {
  return (
    <>
      <StyledContent>
        <StyledImage source={require('../../assets/product.png')} />
        <StyledViewContent>
          <Row>
            <Col>
              <StyledTextProduct>H&M</StyledTextProduct>
              <StyledTextBrand>Short black dress</StyledTextBrand>
            </Col>
            <StyledTextPrice>$19.99</StyledTextPrice>
          </Row>
          <StyledRow>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={2.5}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              starSize={15}
              containerStyle={{margin: 3, width: 80}}
              fullStarColor={'yellow'}
            />
            <StyledTextBrand>(2.5)</StyledTextBrand>
          </StyledRow>
          <StyledTextDescription>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square neckline with concealed
            elastication. Elasticated seam under the bust and short puff sleeves
            with a small frill trim.
          </StyledTextDescription>
          <StyledTextColor>Color</StyledTextColor>
          <StyledViewColor>
            <StyledColor color="#1A1A1A" isClick={true} />
            <StyledColor color="#D84242" />
            <StyledColor color="#4290D8" />
            <StyledColor color="#42D86C" />
          </StyledViewColor>
          <StyledViewInfo>
            <ListItem icon>
              <Body>
                <Text>Size Info</Text>
              </Body>
              <Right>
                <Icon name="caret-right" type="FontAwesome" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Shipping Info</Text>
              </Body>
              <Right>
                <Icon name="caret-right" type="FontAwesome" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>Support</Text>
              </Body>
              <Right>
                <Icon name="caret-right" type="FontAwesome" />
              </Right>
            </ListItem>
          </StyledViewInfo>
        </StyledViewContent>

        <StyledViewAnotherProduct>
          <Row>
            <StyledText>You can also like this</StyledText>
            <StyledTextSecondary>12 items</StyledTextSecondary>
          </Row>
          <StyledRow>
            <ScrollView horizontal>
              {[...Array(10)].map((item) => (
                <CardProduct />
              ))}
            </ScrollView>
          </StyledRow>
        </StyledViewAnotherProduct>
      </StyledContent>
      <StyledFooter>
        <StyledButton full rounded success>
          <StyledTextButton>ADD TO CART</StyledTextButton>
        </StyledButton>
      </StyledFooter>
    </>
  );
};

export default Product;
