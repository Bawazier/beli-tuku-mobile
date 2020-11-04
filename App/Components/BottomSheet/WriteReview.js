import React, {useState} from 'react';
import {
  StyledContainer,
  StyledText,
  StyledTextPrimary,
  StyledTextSecondary,
  StyledTextButton,
} from './styled';
import {Button} from 'native-base';
import StarRating from 'react-native-star-rating';

const WriteReview = (props) => {
  const [starCount, setstarCount] = useState(0);

  const onStarRatingPress = (rating) => {
    setstarCount(rating);
  };
  return (
    <StyledContainer>
      <StyledText>What is you rate?</StyledText>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        selectedStar={(rating) => onStarRatingPress(rating)}
      />
      <StyledText>Please share your opinion about the product</StyledText>
      <Button block rounded success>
        <StyledTextButton>SEND REVIEW</StyledTextButton>
      </Button>
    </StyledContainer>
  );
};

export default WriteReview;
