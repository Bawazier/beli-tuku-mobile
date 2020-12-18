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
  StyledTextAlert,
  StyledButton,
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
    if (!auth.isEmailLoading && auth.isEmailError) {
      setError(!error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

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
        {auth.isEmailLoading && !auth.isEmailError && (
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
