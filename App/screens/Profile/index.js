import React from 'react';
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

//Component

const Profile = () => {
  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledText>My profile</StyledText>
          <Row>
            <StyledImage source={require('../../assets/user.png')} />
            <StyledView>
              <StyledTextPrimary>Matilda Brown</StyledTextPrimary>
              <StyledTextSecondary>matildabrown@mail.com</StyledTextSecondary>
            </StyledView>
          </Row>
        </StyledContainer>
        <StyledContainer>
          <List>
            <ListItem noIndent>
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
            <ListItem noIndent>
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
            <ListItem noIndent>
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
