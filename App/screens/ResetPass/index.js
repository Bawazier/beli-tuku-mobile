import React, {useState, useEffect} from 'react';
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
import {Button, Form, Text, Item, View, Spinner} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Dialog from 'react-native-dialog';

// Components

//Actions
import AuthActions from '../../redux/actions/auth';

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!auth.isForgotPassLoading && auth.isForgotPassError) {
      setError(!error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, 'New Password cannot be less than 8')
      .required('New Password is Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords not match')
      .required('Password confirmation is required'),
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
            const data = {
              newPassword: values.newPassword,
              confirmNewPassword: values.confirmPassword,
            };
            console.log(auth.emailValidData);
            console.log(data);
            await dispatch(
              AuthActions.forgotPass(auth.emailValidData.id, data),
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
        {auth.isForgotPassLoading && !auth.isForgotPassError && (
          <View>
            <Dialog.Container visible={true}>
              <Spinner color="green" />
            </Dialog.Container>
          </View>
        )}
        <View>
          <Dialog.Container visible={error}>
            <Dialog.Description>
              Email has been used, please try again
            </Dialog.Description>
            <Dialog.Button
              label="TRY AGAIN"
              onPress={() => {
                setError(false);
                dispatch(AuthActions.logout());
              }}
            />
          </Dialog.Container>
        </View>
      </StyledContent>
    </>
  );
};

export default Login;
