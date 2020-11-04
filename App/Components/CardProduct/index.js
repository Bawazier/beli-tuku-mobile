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

const index = (props) => {
  return (
    <StyledCard>
      <StyledCardItem header>
        <StyledImageBackground
          source={
            props.productImage
              ? {uri: API_URL + props.productImage}
              : require('../../assets/primaryImage.png')
          }>
          <StyledBadge danger displayBadge={props.displayBadge}>
            <StyledWhiteH2>NEW</StyledWhiteH2>
          </StyledBadge>
        </StyledImageBackground>
      </StyledCardItem>
      <StyledCardItem>
        <StyledBody>
          <Row>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={props.productRating}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              starSize={15}
              containerStyle={{marginRight: 4, marginBottom: 4}}
              fullStarColor={'yellow'}
            />
            <StyledText>({props.productRating})</StyledText>
          </Row>

          <StyledText>{props.productStore}</StyledText>
          <StyledH2>{props.productName}</StyledH2>
          <StyledH3>{props.productPrice}</StyledH3>
        </StyledBody>
      </StyledCardItem>
    </StyledCard>
  );
};

export default index;
