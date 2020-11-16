import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  StyledView,
  StyledContent,
  StyledItem,
  StyledText,
  StyledTextButton,
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledTextAlert,
} from './styled';
import {H2White} from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Form, Text, Item} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// Components

const Login = () => {
  const navigation = useNavigation();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Input must be Email')
      .required('Email is Required'),
    password: Yup.string()
      .max(8, 'Password cannot be more than 8')
      .required('Password is Required'),
  });

  return (
    <>
      <StyledContent>
        <StyledView>
          <StyledText>Login</StyledText>
        </StyledView>
        <Formik
          initialValues={{
            email: '',
            password: '',
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
                  {touched.email && touched.email && (
                    <Icon
                      active
                      name={errors.email ? 'close' : 'check'}
                      size={20}
                      color={errors.email ? '#F01F0E' : '#25D366'}
                    />
                  )}
                </Item>
              </StyledItem>
              <StyledTextAlert>
                {errors.email ? errors.email : null}
              </StyledTextAlert>
              <StyledItem stackedLabel>
                <StyledLabel>Password</StyledLabel>
                <Item>
                  <StyledInput
                    name="password"
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && (
                    <Icon
                      active
                      name={errors.password ? 'close' : 'check'}
                      size={20}
                      color={errors.password ? '#F01F0E' : '#25D366'}
                    />
                  )}
                </Item>
              </StyledItem>
              <StyledTextAlert>
                {touched.password && errors.password ? errors.password : null}
              </StyledTextAlert>
              <StyledButton
                iconRight
                transparent
                light
                full
                onPress={() => navigation.navigate('ForgotPass')}>
                <StyledTextButton>Forgot your password?</StyledTextButton>
                <Icon name="arrow-right" size={20} color="#2EB67D" />
              </StyledButton>
              <Button
                block
                rounded
                style={{backgroundColor: '#128C7E'}}
                onPress={handleSubmit}
                title="Submit"
                {...(isSubmitting ? 'disabled' : null)}>
                <H2White>LOGIN</H2White>
              </Button>
            </Form>
          )}
        </Formik>
      </StyledContent>
    </>
  );
};

export default Login;
