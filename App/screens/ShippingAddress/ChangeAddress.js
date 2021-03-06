import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyledViewCard, StyledTextAlert} from './styled';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View,
  Spinner,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Dialog from 'react-native-dialog';

//Actions
import addressActions from '../../redux/actions/address';

const ChangeAddress = () => {
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validationSchema = Yup.object({
    fullName: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required('city is Required'),
    addressName: Yup.string(),
    postalCode: Yup.number().required('postalCode is Required'),
    tlp: Yup.number()
      .integer('Invalid phone number. Please try again.')
      .min(1000000000, 'Invalid phone number. Please try again.')
      .max(99999999999, 'Invalid phone number. Please try again.')
      .required('Phone number is Required'),
  });

  return (
    <Content>
      {!address.isLoading && !address.isGetError && (
        <Formik
          initialValues={{
            fullName: address.dataGet.recipientName || '',
            address: address.dataGet.address || '',
            city: address.dataGet.region || '',
            addressName: address.dataGet.name || '',
            postalCode: address.dataGet.postalCode || '',
            tlp: address.dataGet.recipientTlp || '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const data = {
              recipientName: values.fullName || null,
              address: values.address || null,
              region: values.city || null,
              name: values.addressName || null,
              postalCode: values.postalCode || null,
              recipientTlp: values.tlp || null,
            };
            dispatch(
              addressActions.updateAddress(
                auth.token,
                address.dataGet.id,
                data,
              ),
            );
            navigation.navigate('ShippingAddress');
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
            <Form style={{marginHorizontal: 10, marginVertical: 20}}>
              <StyledViewCard>
                <Item stackedLabel last>
                  <Label>
                    Save address as (ex : home address, office address)
                  </Label>
                  <Item>
                    <Input
                      name="addressName"
                      onChangeText={handleChange('addressName')}
                      onBlur={handleBlur('addressName')}
                      value={values.addressName}
                    />
                    {touched.addressName && (
                      <Icon
                        active
                        name={errors.addressName ? 'close' : 'check'}
                        size={20}
                        color={errors.addressName ? '#F01F0E' : '#2AA952'}
                      />
                    )}
                  </Item>
                </Item>
                <StyledTextAlert>
                  {touched.addressName && errors.addressName
                    ? errors.addressName
                    : null}
                </StyledTextAlert>
                <Item stackedLabel last>
                  <Label>Recipient’s name</Label>
                  <Item>
                    <Input
                      name="fullName"
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
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
                </Item>
                <StyledTextAlert>
                  {touched.fullName && errors.fullName ? errors.fullName : null}
                </StyledTextAlert>
              </StyledViewCard>

              <StyledViewCard>
                <Item stackedLabel last>
                  <Label>Address</Label>
                  <Item>
                    <Input
                      name="address"
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                    />
                    {touched.address && (
                      <Icon
                        active
                        name={errors.address ? 'close' : 'check'}
                        size={20}
                        color={errors.address ? '#F01F0E' : '#2AA952'}
                      />
                    )}
                  </Item>
                </Item>
                <StyledTextAlert>
                  {touched.address && errors.address ? errors.address : null}
                </StyledTextAlert>
                <Item stackedLabel last>
                  <Label>City or Subdistrict</Label>
                  <Item>
                    <Input
                      name="city"
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      value={values.city}
                    />
                    {touched.city && (
                      <Icon
                        active
                        name={errors.city ? 'close' : 'check'}
                        size={20}
                        color={errors.city ? '#F01F0E' : '#2AA952'}
                      />
                    )}
                  </Item>
                </Item>
                <StyledTextAlert>
                  {touched.city && errors.city ? errors.city : null}
                </StyledTextAlert>
                <Item stackedLabel last>
                  <Label>Postal code</Label>
                  <Item>
                    <Input
                      name="postalCode"
                      onChangeText={handleChange('postalCode')}
                      value={values.postalCode}
                    />
                    {touched.postalCode && (
                      <Icon
                        active
                        name={errors.postalCode ? 'close' : 'check'}
                        size={20}
                        color={errors.postalCode ? '#F01F0E' : '#2AA952'}
                      />
                    )}
                  </Item>
                </Item>
                <StyledTextAlert>
                  {touched.postalCode && errors.postalCode
                    ? errors.postalCode
                    : null}
                </StyledTextAlert>
              </StyledViewCard>
              <StyledViewCard>
                <Item stackedLabel last>
                  <Label>recipient's telephone number</Label>
                  <Item>
                    <Input
                      name="tlp"
                      onChangeText={handleChange('tlp')}
                      value={values.tlp}
                    />
                    {touched.tlp && (
                      <Icon
                        active
                        name={errors.tlp ? 'close' : 'check'}
                        size={20}
                        color={errors.tlp ? '#F01F0E' : '#2AA952'}
                      />
                    )}
                  </Item>
                </Item>
                <StyledTextAlert>
                  {touched.tlp && errors.tlp ? errors.tlp : null}
                </StyledTextAlert>
              </StyledViewCard>
              <Button
                block
                rounded
                success
                onPress={handleSubmit}
                title="Submit"
                style={{marginVertical: 10}}
                {...(isSubmitting ? 'disabled' : null)}>
                <Text>SAVE ADDRESS</Text>
              </Button>
            </Form>
          )}
        </Formik>
      )}
      {address.isLoading && !address.isError && (
        <View>
          <Dialog.Container visible={true}>
            <Spinner color="green" />
          </Dialog.Container>
        </View>
      )}
    </Content>
  );
};

export default ChangeAddress;
