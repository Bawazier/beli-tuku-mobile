import React from 'react';
import {useDispatch} from 'react-redux';
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
import {useNavigation} from '@react-navigation/native';

// Components

//Actions
import AuthActions from '../../redux/actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
          onSubmit={async (values) => {
            const data = {
              email: values.email,
            };
            await dispatch(AuthActions.validateForgotPass(data));
            navigation.navigate('ResetPass');
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
              <StyledButton
                block
                style={{backgroundColor: '#128C7E'}}
                rounded
                onPress={handleSubmit}
                title="Submit"
                {...(isSubmitting ? 'disabled' : null)}>
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
