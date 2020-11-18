import React from 'react';
import {useDispatch} from 'react-redux';
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
import {Button, Form, Text, Item} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// Components

//Actions
import AuthActions from '../../redux/actions/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const validationSchema = Yup.object({
    name: Yup.string().max(80, 'name cannot be too long').required(),
    email: Yup.string().email('Input must be Email').required(),
    password: Yup.string().max(8, 'Password cannot be more than 8').required(),
  });
  return (
    <>
      <StyledContent>
        <StyledView>
          <StyledText>Sign Up</StyledText>
        </StyledView>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const data = {
              name: values.name,
              email: values.email,
              password: values.password,
            };
            await dispatch(AuthActions.signup(data));
            navigation.navigate('Login');
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
                <StyledLabel>Name</StyledLabel>
                <Item>
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
                </Item>
              </StyledItem>
              <StyledTextAlert>
                {touched.name && errors.name ? errors.name : null}
              </StyledTextAlert>
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
                      color={errors.password ? '#F01F0E' : '#2AA952'}
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
                onPress={() => navigation.navigate('Login')}>
                <StyledTextButton>Already have an account?</StyledTextButton>
                <Icon name="arrow-right" size={20} color="#2EB67D" />
              </StyledButton>
              <Button
                block
                style={{backgroundColor: '#128C7E'}}
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
