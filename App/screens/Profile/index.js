/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyledContent,
  StyledContainer,
  StyledText,
  StyledView,
  Row,
  StyledImage,
  StyledTextPrimary,
  StyledTextSecondary,
  StyledTextAlert,
} from './styled';
import {List, ListItem, Left, Right, Icon, View, Text} from 'native-base';
import {TouchableOpacity, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {API_URL} from '@env';
import numeral from 'numeral';

//Component

//Actions
import authActions from '../../redux/actions/auth';
import accountActions from '../../redux/actions/account';
import addressActions from '../../redux/actions/address';
import transactionActions from '../../redux/actions/transaction';

const Profile = ({navigation}) => {
  const {data, isLoading, isGetError} = useSelector((state) => state.account);
  const address = useSelector((state) => state.address);
  const order = useSelector((state) => state.order);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountActions.getAccount(auth.token));
    dispatch(addressActions.listAddress(auth.token));
    dispatch(transactionActions.listOrder(auth.token));
  }, []);

  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, async (response) => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.fileSize > 2 * 1024 * 1024) {
        Alert.alert('Gagal pilih gambar!', 'File gambar harus kurang dari 2MB');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        const imageData = new FormData();
        imageData.append('picture', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
          path: response.path,
        });
        await dispatch(
          accountActions.updateAccountImage(auth.token, imageData),
        );
        dispatch(accountActions.getAccount(auth.token));
      }
    });
  };

  const pressLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledText>My profile</StyledText>
          <Row>
            <TouchableOpacity onPress={selectImage}>
              <StyledImage
                source={
                  data.picture
                    ? {uri: API_URL + '/' + data.picture}
                    : require('../../assets/primaryImage.png')
                }
              />
            </TouchableOpacity>

            <StyledView>
              <StyledTextPrimary>{data.name || ''}</StyledTextPrimary>
              <StyledTextSecondary>{data.email || ''}</StyledTextSecondary>
              <View style={{flexDirection: 'row'}}>
                <Text note>Credit : </Text>
                <Text>
                  Rp.
                  {numeral((data.Credit && data.Credit.saldo) || 0)
                    .format(0, 0)
                    .toString()
                    .replace(',', '.')}
                  ,-
                </Text>
              </View>
            </StyledView>
          </Row>
        </StyledContainer>
        <StyledContainer>
          <List>
            <ListItem noIndent onPress={() => navigation.navigate('Orders')}>
              <Left>
                <View>
                  <StyledTextPrimary>My orders</StyledTextPrimary>
                  <StyledTextSecondary>
                    Already have {(order.pageInfo && order.pageInfo.count) || 0}{' '}
                    orders
                  </StyledTextSecondary>
                </View>
              </Left>
              <Right>
                <Icon name="angle-right" type="FontAwesome" />
              </Right>
            </ListItem>
            <ListItem
              noIndent
              onPress={() => navigation.navigate('ShippingAddress')}>
              <Left>
                <View>
                  <StyledTextPrimary>Shipping address</StyledTextPrimary>
                  <StyledTextSecondary>
                    {(address.pageInfo && address.pageInfo.count) || 0} address
                  </StyledTextSecondary>
                </View>
              </Left>
              <Right>
                <Icon name="angle-right" type="FontAwesome" />
              </Right>
            </ListItem>
            <ListItem noIndent onPress={() => navigation.navigate('Setting')}>
              <Left>
                <View>
                  <StyledTextPrimary>Settings</StyledTextPrimary>
                  <StyledTextSecondary>
                    Notifications, password
                  </StyledTextSecondary>
                </View>
              </Left>
              <Right>
                <Icon name="angle-right" type="FontAwesome" />
              </Right>
            </ListItem>
            <ListItem noIndent onPress={pressLogout}>
              <Left>
                <View>
                  <StyledTextPrimary>Logout</StyledTextPrimary>
                  <StyledTextAlert>
                    are you are sure to log out of this app?
                  </StyledTextAlert>
                </View>
              </Left>
              <Right>
                <Icon name="angle-right" type="FontAwesome" />
              </Right>
            </ListItem>
          </List>
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default Profile;
