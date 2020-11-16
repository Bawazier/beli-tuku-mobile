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
import {Button, Form, Text, Item} from 'native-base';

// Components

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Input must be Email')
      .required('Email is Required'),
  });
  return (
    <>
      <StyledContent>
        <StyledView>
          <StyledText>Forgot password</StyledText>
        </StyledView>
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
              <StyledItem stackedLabel>
                <StyledLabel>Email</StyledLabel>
                <Item>
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
                </Item>
              </StyledItem>
              <StyledTextAlert>
                {touched.email && errors.email ? errors.email : null}
              </StyledTextAlert>
              <StyledButton block style={{backgroundColor: '#128C7E'}} rounded>
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
