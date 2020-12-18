import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {Button, Form, Text, Item} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// Components

//Actions
import AuthActions from '../../redux/actions/auth';

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
      <StyledContent>
        <StyledView>
          <StyledText>Reset password</StyledText>
        </StyledView>
        <Formik
          initialValues={{
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log(auth.data[0].id);
            const data = {
              newPassword: values.newPassword,
              confirmNewPassword: values.confirmNewPassword,
            };
            await dispatch(
              AuthActions.forgotPass(auth.emailValidData[0].id, data),
            );
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
              <AlertMessage>
                You need to change your password to activate your account
              </AlertMessage>
              <StyledItem stackedLabel>
                <StyledLabel>New Password</StyledLabel>
                <Item>
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
                </Item>
              </StyledItem>
              <StyledTextAlert>
                {touched.newPassword && errors.newPassword
                  ? errors.newPassword
                  : null}
              </StyledTextAlert>
              <StyledItem stackedLabel>
                <StyledLabel>Confirm Password</StyledLabel>
                <Item>
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
                </Item>
              </StyledItem>
              <StyledTextAlert>
                {touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : null}
              </StyledTextAlert>
              <StyledButton
                block
                style={{backgroundColor: '#128C7E'}}
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
