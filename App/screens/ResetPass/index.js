import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  AlertMessage,
  StyledView,
  StyledContent,
  StyledItem,
  StyledText,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledTextAlert,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Form, Text} from 'native-base';

// Components

const Login = () => {
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .max(8, 'New Password cannot be more than 8')
      .required('New Password is Required'),
    confirmPassword: Yup.string()
      .max(8, 'Confirm Password cannot be more than 8')
      .required('Confirm Password is Required'),
  });

  return (
    <>
      <StyledView>
        <StyledText>Reset password</StyledText>
      </StyledView>
      <StyledContent>
        <Formik
          initialValues={{
            newPassword: '',
            confirmPassword: '',
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
              <AlertMessage>
                You need to change your password to activate your account
              </AlertMessage>
              <StyledItem>
                <StyledLabel>New Password</StyledLabel>
                <StyledInput
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
              </StyledItem>
              <StyledTextAlert>
                {touched.newPassword && errors.newPassword
                  ? errors.newPassword
                  : null}
              </StyledTextAlert>
              <StyledItem>
                <StyledLabel>Confirm Password</StyledLabel>
                <StyledInput
                  name="confirmPassword"
                  secureTextEntry={true}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && (
                  <Icon
                    active
                    name={errors.confirmPassword ? 'close' : 'check'}
                    size={20}
                    color={errors.confirmPassword ? '#F01F0E' : '#2AA952'}
                  />
                )}
              </StyledItem>
              <StyledTextAlert>
                {touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : null}
              </StyledTextAlert>
              <StyledButton
                block
                success
                rounded
                onPress={handleSubmit}
                title="Submit"
                {...(isSubmitting ? 'disabled' : null)}>
                <Text>Reset Password</Text>
              </StyledButton>
            </Form>
          )}
        </Formik>
      </StyledContent>
    </>
  );
};

export default Login;
