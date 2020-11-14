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
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Form, Text} from 'native-base';

// Components

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().max(80, 'name cannot be too long'),
    email: Yup.string()
      .email('Input must be Email')
      .required('Email is Required'),
    password: Yup.string()
      .max(8, 'Password cannot be more than 8')
      .required('Password is Required'),
  });
  return (
    <>
      <StyledView>
        <StyledText>Sign Up</StyledText>
      </StyledView>
      <StyledContent>
        <Formik
          initialValues={{
            name: '',
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
              <StyledItem>
                <StyledLabel>Name</StyledLabel>
                <StyledInput
                  name="name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {touched.name && (
                  <Icon
                    active
                    name={errors.name ? 'close' : 'check'}
                    size={20}
                    color={errors.name ? '#F01F0E' : '#2AA952'}
                  />
                )}
              </StyledItem>
              <StyledTextAlert>
                {touched.name && errors.name ? errors.name : null}
              </StyledTextAlert>
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
              <StyledItem>
                <StyledLabel>Password</StyledLabel>
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
                    color={errors.password ? '#F01F0E' : '#2AA952'}
                  />
                )}
              </StyledItem>
              <StyledTextAlert>
                {touched.password && errors.password ? errors.password : null}
              </StyledTextAlert>
              <StyledButton iconRight transparent light full>
                <StyledTextButton>Already have an account?</StyledTextButton>
                <Icon name="arrow-right" size={20} color="#2AA952" />
              </StyledButton>
              <Button
                block
                success
                rounded
                onPress={handleSubmit}
                title="Submit"
                {...(isSubmitting ? 'disabled' : null)}>
                <Text>SIGN UP</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </StyledContent>
    </>
  );
};

export default SignUp;
