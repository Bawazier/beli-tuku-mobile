import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
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
  StyledTextAlert,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Form, Item, Input, Button, Switch} from 'native-base';
import BottomSheet from 'reanimated-bottom-sheet';

//Component
import ChangePass from '../../Components/BottomSheet/ChangePass';

const Setting = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is Required'),
    dateOfBirth: Yup.date(),
  });

  const sheetRef = React.useRef(null);
  return (
    <>
      <StyledContent>
        <StyledText>Settings</StyledText>
        <StyledContainer>
          <StyledTextPrimary>Personal Information</StyledTextPrimary>
          <Formik
            initialValues={{
              fullName: 'Bayu',
              dateOfBirth: '2020, 19 02',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              errors,
            }) => (
              <Form>
                <Item stackedLabel>
                  <StyledCardInput>
                    <StyledLabel>Full Name</StyledLabel>
                    <Item>
                      <Input
                        name="fullName"
                        secureTextEntry={true}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        onSubmitEditing={handleSubmit}
                      />
                      {touched.fullName && (
                        <Icon
                          active
                          name={errors.fullName ? 'close' : 'check'}
                          size={20}
                          color={errors.fullName ? '#F01F0E' : '#2AA952'}
                        />
                      )}
                    </Item>
                  </StyledCardInput>
                </Item>
                <StyledTextAlert>
                  {touched.fullName && errors.fullName ? errors.fullName : null}
                </StyledTextAlert>
                <Item stackedLabel>
                  <StyledCardInput>
                    <StyledLabel>Date of birth</StyledLabel>
                    <Item>
                      <Input
                        name="dateOfBirth"
                        secureTextEntry={true}
                        onChangeText={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                        value={values.dateOfBirth}
                        onSubmitEditing={handleSubmit}
                      />
                      {touched.dateOfBirth && (
                        <Icon
                          active
                          name={errors.dateOfBirth ? 'close' : 'check'}
                          size={20}
                          color={errors.dateOfBirth ? '#F01F0E' : '#2AA952'}
                        />
                      )}
                    </Item>
                  </StyledCardInput>
                </Item>
                <StyledTextAlert>
                  {touched.dateOfBirth && errors.dateOfBirth
                    ? errors.dateOfBirth
                    : null}
                </StyledTextAlert>
              </Form>
            )}
          </Formik>
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
