import React from 'react';
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
  StyledTouchableOpacity,
} from './styled';

const index = () => {
  return (
    <StyledTouchableOpacity>
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
            <StyledText>Mango Boy</StyledText>
            <StyledH2>T-shirt Sailling</StyledH2>
            <StyledH3>10$</StyledH3>
          </StyledBody>
        </StyledCardItem>
      </StyledCard>
    </StyledTouchableOpacity>
  );
};

export default index;
