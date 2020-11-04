import React from 'react';
import {
  StyledText,
  StyledTextPrimary,
  StyledTextSubPrimary,
  StyledTextSecondary,
  StyledContainer,
  Row,
  StyledContent,
  StyledCardInput,
  StyledLabel,
} from './styled';
import {Form, Item, Input, Button, Switch} from 'native-base';
import BottomSheet from 'reanimated-bottom-sheet';

//Component
import ChangePass from '../../Components/BottomSheet/ChangePass';

const Setting = () => {
  const sheetRef = React.useRef(null);
  return (
    <>
      <StyledContent>
        <StyledText>Settings</StyledText>
        <StyledContainer>
          <StyledTextPrimary>Personal Information</StyledTextPrimary>
          <Form>
            <Item stackedLabel>
              <StyledCardInput>
                <StyledLabel>Full Name</StyledLabel>
                <Input />
              </StyledCardInput>
            </Item>
            <Item stackedLabel>
              <StyledCardInput>
                <StyledLabel>Date of birth</StyledLabel>
                <Input />
              </StyledCardInput>
            </Item>
          </Form>
        </StyledContainer>
        <StyledContainer>
          <Row>
            <StyledTextPrimary>Password</StyledTextPrimary>
            <Button transparent onPress={() => sheetRef.current.snapTo(0)}>
              <StyledTextSecondary>Change</StyledTextSecondary>
            </Button>
          </Row>
          <Form>
            <Item>
              <StyledCardInput>
                <StyledLabel>Password</StyledLabel>
                <Input />
              </StyledCardInput>
            </Item>
          </Form>
        </StyledContainer>
        <StyledContainer>
          <StyledTextPrimary>Notification</StyledTextPrimary>
          <Row>
            <StyledTextSubPrimary>Sales</StyledTextSubPrimary>
            <Switch value={true} />
          </Row>
          <Row>
            <StyledTextSubPrimary>New arrivals</StyledTextSubPrimary>
            <Switch value={false} />
          </Row>
          <Row>
            <StyledTextSubPrimary>Delivery status changes</StyledTextSubPrimary>
            <Switch value={false} />
          </Row>
        </StyledContainer>
      </StyledContent>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[340, 0]}
        borderRadius={10}
        renderContent={ChangePass}
        initialSnap={1}
        enabledGestureInteraction={true}
      />
    </>
  );
};

export default Setting;
