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
import BottomSheet from 'reanimated-bottom-sheet';

//Component
import WriteReview from '../../Components/BottomSheet/WriteReview';

const Review = () => {
  const sheetRef = React.useRef(null);
  return (
    <>
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
        <StyledButtonFab onPress={() => sheetRef.current.snapTo(0)}>
          <Icon name="md-pencil" color="white" />
          <StyledTextFab>Write a review</StyledTextFab>
        </StyledButtonFab>
        {/* <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          renderContent={WriteReview}
        /> */}
      </StyledFooter>
    </>
  );
};

export default Review;
