import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  StyledText,
  StyledTextPrimary,
  StyledTextSubPrimary,
  StyledTextSecondary,
  StyledContainer,
  Row,
  StyledContent,
  StyledCardInput,
  StyledLabel,
  StyledTextAlert,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Form,
  Item,
  Input,
  Button,
  Switch,
  DatePicker,
  Label,
  View,
  Content,
  Text,
  Spinner,
} from 'native-base';
import Dialog from 'react-native-dialog';

//Component

//Actions
import accountActions from '../../redux/actions/account';

const Setting = () => {
  const auth = useSelector((state) => state.auth);
  const {
    data,
    isLoading,
    isGetError,
    isChangePassLoading,
    isChangePassError,
  } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is Required'),
  });
  const changePassSchema = Yup.object({
    oldPassword: Yup.string()
      .min(8, 'Password cannot be less than 8')
      .required('Password is Required'),
    newPassword: Yup.string()
      .min(8, 'New Password cannot be less than 8')
      .required('New Password is Required'),
    confirmNewPassword: Yup.string()
      .min(8, 'New Password cannot be less than 8')
      .required('New Password is Required'),
  });
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date(data.dateOfBirth) || new Date(2018, 4, 4),
  );
  const [changePass, setChangePass] = useState(false);

  const setDate = async (newDate) => {
    setDateOfBirth(newDate);
    await dispatch(
      accountActions.updateAccount(auth.token, {
        dateOfBirth: newDate,
      }),
    );
    dispatch(accountActions.getAccount(auth.token));
  };

  const tryAgain = () => {
    dispatch(accountActions.tryAgain());
  };

  return (
    <>
      <StyledContent>
        <StyledText>Settings</StyledText>
        <StyledContainer>
          <StyledTextPrimary>Personal Information</StyledTextPrimary>
          <Formik
            initialValues={{
              fullName: data.name || '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              await dispatch(
                accountActions.updateAccount(auth.token, {
                  name: values.fullName,
                }),
              );
              dispatch(accountActions.getAccount(auth.token));
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
              <Form style={{marginRight: 10}}>
                <Item stackedLabel>
                  <StyledCardInput>
                    <StyledLabel>Full Name</StyledLabel>
                    <Item>
                      <Input
                        name="fullName"
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        onSubmitEditing={handleSubmit}
                      />
                      {touched.fullName && (
                        <Icon
                          active
                          name={errors.fullName ? 'close' : 'check'}
                          size={20}
                          color={errors.fullName ? '#F01F0E' : '#2AA952'}
                        />
                      )}
                    </Item>
                  </StyledCardInput>
                </Item>
                <StyledTextAlert>
                  {touched.fullName && errors.fullName ? errors.fullName : null}
                </StyledTextAlert>
                <Item stackedLabel>
                  <StyledCardInput>
                    <StyledLabel>Date of birth</StyledLabel>
                    <Item>
                      <DatePicker
                        defaultDate={dateOfBirth}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText={data.dateOfBirth || 'Select Date'}
                        textStyle={{color: 'green'}}
                        placeHolderTextStyle={{color: '#d3d3d3'}}
                        onDateChange={setDate}
                        disabled={false}
                      />
                    </Item>
                  </StyledCardInput>
                </Item>
              </Form>
            )}
          </Formik>
        </StyledContainer>
        <View>
          <Dialog.Container visible={changePass}>
            <Dialog.Title>Password Change</Dialog.Title>
            {isChangePassLoading && !isChangePassError && (
              <Spinner color="green" />
            )}
            {!isChangePassLoading && isChangePassError && (
              <>
                <View style={{margin: 10}}>
                  <Text>Password does not match, please try again</Text>
                </View>
                <Button block bordered info rounded onPress={tryAgain}>
                  <Text>TRY AGAIN</Text>
                </Button>
              </>
            )}
            {!isChangePassLoading && !isChangePassError && (
              <Formik
                initialValues={{
                  oldPassword: '',
                  newPassword: '',
                  confirmNewPassword: '',
                }}
                validationSchema={changePassSchema}
                onSubmit={async (values) => {
                  const dataChangePass = {
                    oldPassword: values.oldPassword,
                    newPassword: values.newPassword,
                    confirmNewPassword: values.confirmNewPassword,
                  };
                  console.log(dataChangePass);
                  await dispatch(
                    accountActions.changePass(auth.token, dataChangePass),
                  );
                  setChangePass(!changePass);
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
                  <Content>
                    <Form>
                      <Item stackedLabel>
                        <Label>Old Password</Label>
                        <Item>
                          <Input
                            name="oldPassword"
                            secureTextEntry={true}
                            onChangeText={handleChange('oldPassword')}
                            onBlur={handleBlur('oldPassword')}
                            value={values.oldPassword}
                          />
                          {touched.oldPassword && (
                            <Icon
                              active
                              name={errors.oldPassword ? 'close' : 'check'}
                              size={20}
                              color={errors.oldPassword ? '#F01F0E' : '#2AA952'}
                            />
                          )}
                        </Item>
                      </Item>
                      <Button
                        transparent
                        block
                        style={{textAlign: 'right', alignSelf: 'flex-end'}}>
                        <Text note>Forgot Password?</Text>
                      </Button>

                      <Item stackedLabel>
                        <Label>New Password</Label>
                        <Item>
                          <Input
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
                      </Item>
                      <Item stackedLabel>
                        <Label>Repeat New Password</Label>
                        <Item>
                          <Input
                            name="confirmNewPassword"
                            secureTextEntry={true}
                            onChangeText={handleChange('confirmNewPassword')}
                            onBlur={handleBlur('confirmNewPassword')}
                            value={values.confirmNewPassword}
                          />
                          {touched.confirmNewPassword && (
                            <Icon
                              active
                              name={
                                errors.confirmNewPassword ? 'close' : 'check'
                              }
                              size={20}
                              color={
                                errors.confirmNewPassword
                                  ? '#F01F0E'
                                  : '#2AA952'
                              }
                            />
                          )}
                        </Item>
                      </Item>
                    </Form>
                    <Button
                      block
                      bordered
                      warning
                      rounded
                      onPress={handleSubmit}
                      style={{marginVertical: 20}}>
                      <Text>SAVE PASSWORD</Text>
                    </Button>
                    <Button
                      block
                      warning
                      rounded
                      onPress={() => setChangePass(false)}>
                      <Text>CLOSE</Text>
                    </Button>
                  </Content>
                )}
              </Formik>
            )}
          </Dialog.Container>
        </View>
        <StyledContainer>
          <Row>
            <StyledTextPrimary>Password</StyledTextPrimary>
            <Button transparent onPress={() => setChangePass(!changePass)}>
              <StyledTextSecondary>Change</StyledTextSecondary>
            </Button>
          </Row>
          <Form style={{marginRight: 10}}>
            <Item stackedLabel>
              <StyledCardInput>
                <StyledLabel>Password</StyledLabel>
                <Input disabled value="password" secureTextEntry={true} />
              </StyledCardInput>
            </Item>
          </Form>
        </StyledContainer>
        <StyledContainer>
          <StyledTextPrimary>Notification</StyledTextPrimary>
          <Row>
            <StyledTextSubPrimary>Sales</StyledTextSubPrimary>
            <Switch value={false} />
          </Row>
          <Row>
            <StyledTextSubPrimary>New arrivals</StyledTextSubPrimary>
            <Switch value={false} />
          </Row>
          <Row>
            <StyledTextSubPrimary>Delivery status changes</StyledTextSubPrimary>
            <Switch value={false} />
          </Row>
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default Setting;
