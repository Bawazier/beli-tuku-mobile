import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  StyledContainer,
  StyledText,
  StyledTextPrimary,
  StyledTextSecondary,
  StyledTextButton,
  StyledTextAlert,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Form, Item, Input, Button, Label} from 'native-base';

const ChangePass = () => {
  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .max(8, 'Password cannot be more than 8')
      .required('Password is Required'),
    newPassword: Yup.string()
      .max(8, 'New Password cannot be more than 8')
      .required('New Password is Required'),
    repeatPassword: Yup.string()
      .max(8, 'Repeat Password cannot be more than 8')
      .required('Repeat Password is Required'),
  });

  return (
    <Formik
      initialValues={{
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
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
        <StyledContainer>
          <StyledText>Password Change</StyledText>
          <Form style={{marginBottom: 20}}>
            <Item stackedLabel last>
              <Label>Old Password</Label>
              <Input
                name="oldPassword"
                secureTextEntry={true}
                onChangeText={handleChange('oldPassword')}
                onBlur={handleBlur('oldPassword')}
                value={values.oldPassword}
              />
              {touched.oldPassword && (
                <Icon
                  active
                  name={errors.oldPassword ? 'close' : 'check'}
                  size={20}
                  color={errors.oldPassword ? '#F01F0E' : '#2AA952'}
                />
              )}
            </Item>
            <StyledTextAlert>
              {touched.oldPassword && errors.oldPassword
                ? errors.oldPassword
                : null}
            </StyledTextAlert>
            <Button transparent>
              <StyledTextSecondary>Forgot Password</StyledTextSecondary>
            </Button>
            <Item stackedLabel last>
              <Label>New Password</Label>
              <Input
                name="newPassword"
                secureTextEntry={true}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
              />
              {touched.newPassword && (
                <Icon
                  active
                  name={errors.newPassword ? 'close' : 'check'}
                  size={20}
                  color={errors.newPassword ? '#F01F0E' : '#2AA952'}
                />
              )}
            </Item>
            <StyledTextAlert>
              {touched.newPassword && errors.newPassword
                ? errors.newPassword
                : null}
            </StyledTextAlert>
            <Item stackedLabel last>
              <Label>Repeat New Password</Label>
              <Input
                name="repeatPassword"
                secureTextEntry={true}
                onChangeText={handleChange('repeatPassword')}
                onBlur={handleBlur('repeatPassword')}
                value={values.repeatPassword}
              />
              {touched.repeatPassword && (
                <Icon
                  active
                  name={errors.repeatPassword ? 'close' : 'check'}
                  size={20}
                  color={errors.repeatPassword ? '#F01F0E' : '#2AA952'}
                />
              )}
            </Item>
            <StyledTextAlert>
              {touched.repeatPassword && errors.repeatPassword
                ? errors.repeatPassword
                : null}
            </StyledTextAlert>
          </Form>
          <Button block rounded success>
            <StyledTextButton>SAVE PASSWORD</StyledTextButton>
          </Button>
        </StyledContainer>
      )}
    </Formik>
  );
};

export default ChangePass;
