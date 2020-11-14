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
  StyledTextAlert,
  StyledButton,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Form, Text} from 'native-base';

// Components

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Input must be Email')
      .required('Email is Required'),
  });
  return (
    <>
      <StyledView>
        <StyledText>Forgot password</StyledText>
      </StyledView>
      <StyledContent>
        <Formik
          initialValues={{
            email: '',
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
                Please, enter your email address. You will receive a link to
                create a new password via email.
              </AlertMessage>
              <StyledItem>
                <StyledLabel>Email</StyledLabel>
                <StyledInput
                  name="email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && (
                  <Icon
                    active
                    name={errors.email ? 'close' : 'check'}
                    size={20}
                    color={errors.email ? '#F01F0E' : '#2AA952'}
                  />
                )}
              </StyledItem>
              <StyledTextAlert>
                {touched.email && errors.email ? errors.email : null}
              </StyledTextAlert>
              <StyledButton block success rounded>
                <Text>SEND</Text>
              </StyledButton>
            </Form>
          )}
        </Formik>
      </StyledContent>
    </>
  );
};

export default Login;
