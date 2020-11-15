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
} from './styled';
import {List, ListItem, Left, Right, Icon, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

//Component

//Actions
import ProfileActions from '../../redux/actions/profile';

const Profile = () => {
  const [image, setImage] = useState('');
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
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
          data: response.data,
        });
        dispatch(ProfileActions.updateProfile(auth.token, imageData));
      }
    });
    return dispatch(ProfileActions.getProfile(auth.token));
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
                  profile.data[0].picture
                    ? {
                        uri: profile.data[0].URL_image,
                      }
                    : require('../../assets/user.png')
                }
              />
            </TouchableOpacity>

            <StyledView>
              <StyledTextPrimary>{profile.data[0].name}</StyledTextPrimary>
              <StyledTextSecondary>{profile.data[0].email}</StyledTextSecondary>
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
                    Already have 12 orders
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
                  <StyledTextPrimary>Shipping addresses</StyledTextPrimary>
                  <StyledTextSecondary>3 ddresses</StyledTextSecondary>
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
          </List>
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default Profile;
