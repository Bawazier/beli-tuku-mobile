import React from 'react';
import {
  Row,
  Col,
  StyledText,
  StyledTextRadioButton,
  StyledBody,
  StyledCheckBox,
  StyledFooter,
  StyledButtonFab,
  StyledTextFab,
} from './styled';
import {Content, Icon} from 'native-base';

//Component
import Header from '../../Components/Header';

const Review = () => {
  return (
    <>
      <Header />
      <Content>
        <Row>
          <StyledText>8 reviews</StyledText>
          <Col>
            <StyledCheckBox checked={true} />
            <StyledBody>
              <StyledTextRadioButton>Whith photo</StyledTextRadioButton>
            </StyledBody>
          </Col>
        </Row>
      </Content>
      <StyledFooter>
        <StyledButtonFab>
          <Icon name="md-pencil" color="white" />
          <StyledTextFab>Write a review</StyledTextFab>
        </StyledButtonFab>
      </StyledFooter>
    </>
  );
};

export default Review;
