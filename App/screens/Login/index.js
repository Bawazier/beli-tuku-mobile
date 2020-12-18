import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Input must be Email')
      .required('Email is Required'),
    password: Yup.string()
      .min(8, 'Password cannot be less than 8')
      .required('Password is Required'),
  });

  useEffect(() => {
    dispatch(AuthActions.logout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!auth.isLoading && auth.isError) {
      setError(!error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

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
          onSubmit={async (values) => {
            const data = {
              email: values.email,
              password: values.password,
            };
            await dispatch(AuthActions.login(data));
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
        {auth.isLoading && !auth.isError && (
          <View>
            <Dialog.Container visible={true}>
              <Spinner color="green" />
            </Dialog.Container>
          </View>
        )}
        <View>
          <Dialog.Container visible={error}>
            <Dialog.Description>
              Please enter your email and password correctly
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
