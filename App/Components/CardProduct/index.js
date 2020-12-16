import React from 'react';
import StarRating from 'react-native-star-rating';
import {
  StyledH2,
  StyledH3,
  StyledText,
  StyledCard,
  StyledCardItem,
  StyledBody,
  StyledImageBackground,
  StyledBadge,
  StyledWhiteH2,
  Row,
} from './styled';
import {API_URL} from '@env';
import numeral from 'numeral';

const index = (props) => {
  return (
    <StyledCard>
      <StyledCardItem header>
        <StyledImageBackground
          source={
            props.productImage
              ? {uri: API_URL + '/' + props.productImage}
              : require('../../assets/primaryImage.png')
          }>
          <StyledBadge danger displayBadge={props.displayBadge}>
            <StyledWhiteH2>NEW</StyledWhiteH2>
          </StyledBadge>
        </StyledImageBackground>
      </StyledCardItem>
      <StyledCardItem style={{marginHorizontal: 10}}>
        <StyledBody>
          <Row>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={props.productRating}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              starSize={18}
              containerStyle={{marginVertical: 4, marginRight: 5}}
              fullStarColor={'#075E54'}
            />
            <StyledText>( {props.productRating || 0} )</StyledText>
          </Row>

          <StyledText>{props.productStore}</StyledText>
          <StyledH2>
            {props.productName.length < 28
              ? props.productName
              : props.productName.substring(0, 28).concat('...')}
          </StyledH2>
          <StyledH3>
            Rp.
            {numeral(props.productPrice)
              .format(0, 0)
              .toString()
              .replace(',', '.')}
            ,-
          </StyledH3>
        </StyledBody>
      </StyledCardItem>
    </StyledCard>
  );
};

export default index;
