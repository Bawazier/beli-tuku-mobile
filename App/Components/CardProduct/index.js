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

const index = () => {
  return (
    <StyledCard>
      <StyledCardItem header>
        <StyledImageBackground source={require('../../assets/product.png')}>
          <StyledBadge danger>
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
              rating={2.5}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              starSize={15}
              containerStyle={{marginRight: 4, marginBottom: 4}}
              fullStarColor={'yellow'}
            />
            <StyledText>(2.5)</StyledText>
          </Row>

          <StyledText>Mango Boy</StyledText>
          <StyledH2>T-shirt Sailling</StyledH2>
          <StyledH3>10$</StyledH3>
        </StyledBody>
      </StyledCardItem>
    </StyledCard>
  );
};

export default index;
