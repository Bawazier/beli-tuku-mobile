import React from 'react';
import {StyledViewCard, StyledTextAlert} from './styled';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';

const ChangeAddress = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is Required'),
    address: Yup.string().required('Address is Required'),
    city: Yup.string().required('city is Required'),
    addressName: Yup.string().required(),
    postalCode: Yup.number()
      .positive()
      .max(12)
      .required('postalCode is Required'),
    tlp: Yup.number().positive().lessThan(15).required(),
  });
  return (
    <Content>
      <Formik
        initialValues={{
          fullName: '',
          address: '',
          city: '',
          addressName: '',
          postalCode: '',
          tlp: '',
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
                <Label>recipient's telephone number</Label>
                <Item>
                  <Input
                    name="tlp"
                    onChangeText={handleChange('tlp')}
                    onBlur={handleBlur('tlp')}
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
              {...(isSubmitting ? 'disabled' : null)}>
              <Text>SAVE ADDRESS</Text>
            </Button>
          </Form>
        )}
      </Formik>
    </Content>
  );
};

export default ChangeAddress;
