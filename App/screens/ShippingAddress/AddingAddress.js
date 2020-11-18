import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {StyledViewCard, StyledTextAlert} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//Actions
import ProfileActions from '../../redux/actions/profile';

const AddingAddress = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is Required'),
    address: Yup.string().required('Address is Required'),
    city: Yup.string().required('city is Required'),
    region: Yup.string().required('region is Required'),
    postalCode: Yup.number().positive().required('postalCode is Required'),
    Country: Yup.string().required('Country is Required'),
  });

  return (
    <Content>
      <Formik
        initialValues={{
          fullName: '',
          address: '',
          city: '',
          region: '',
          postalCode: '',
          Country: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values.length);
          const data = {
            recipientName: values.fullName,
            address: values.address,
            region: values.city + ', ' + values.region + ', ' + values.Country,
            name: values.fullName,
            postalCode: values.postalCode,
            recipientTlp: values.postalCode,
          };
          await dispatch(ProfileActions.postAddress(auth.token, data));
          await dispatch(ProfileActions.getAddress(auth.token));
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
                <Label>Full Name</Label>
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
            </StyledViewCard>

            <StyledViewCard>
              <Item stackedLabel last>
                <Label>City</Label>
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
            </StyledViewCard>

            <StyledViewCard>
              <Item stackedLabel last>
                <Label>State/Province/Region</Label>
                <Item>
                  <Input
                    name="region"
                    onChangeText={handleChange('region')}
                    onBlur={handleBlur('region')}
                    value={values.region}
                  />
                  {touched.region && (
                    <Icon
                      active
                      name={errors.region ? 'close' : 'check'}
                      size={20}
                      color={errors.region ? '#F01F0E' : '#2AA952'}
                    />
                  )}
                </Item>
              </Item>
              <StyledTextAlert>
                {touched.region && errors.region ? errors.region : null}
              </StyledTextAlert>
            </StyledViewCard>

            <StyledViewCard>
              <Item stackedLabel last>
                <Label>Zip Code (Postal Code)</Label>
                <Item>
                  <Input
                    name="postalCode"
                    onChangeText={handleChange('postalCode')}
                    onBlur={handleBlur('postalCode')}
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
                <Label>Country</Label>
                <Item>
                  <Input
                    name="country"
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    value={values.country}
                  />
                  {touched.country && (
                    <Icon
                      active
                      name={errors.country ? 'close' : 'check'}
                      size={20}
                      color={errors.country ? '#F01F0E' : '#2AA952'}
                    />
                  )}
                </Item>
              </Item>
              <StyledTextAlert>
                {touched.country && errors.country ? errors.country : null}
              </StyledTextAlert>
            </StyledViewCard>

            <Button
              block
              rounded
              success
              onPress={handleSubmit}
              title="Submit"
              {...(isSubmitting ? 'disabled' : null)}>
              <Text>SAVE ADDRESS</Text>
            </Button>
          </Form>
        )}
      </Formik>
    </Content>
  );
};

export default AddingAddress;
