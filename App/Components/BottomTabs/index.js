import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyledFooter,
  StyledFooterTab,
  StyledText,
  StyledButton,
} from './styled';
import {Icon} from 'native-base';

const BottomTabs = () => {
  return (
    <StyledFooter>
      <StyledFooterTab>
        <StyledButton vertical>
          <Icon name="home" type="MaterialIcons" fontSize={20} />
          <StyledText>Home</StyledText>
        </StyledButton>
        <StyledButton vertical>
          <Icon name="shoppingcart" type="AntDesign" fontSize={20} />
          <StyledText>Shop</StyledText>
        </StyledButton>
        <StyledButton vertical>
          {/* <Icon active name="shopping-bag" type="Feather" fontSize={20} /> */}
          <StyledText>Bag</StyledText>
        </StyledButton>
        <StyledButton vertical>
          {/* <Icon name="love" fontSize={20} /> */}
          <StyledText>Favorites</StyledText>
        </StyledButton>
        <StyledButton vertical>
          {/* <Icon name="account" fontSize={20} /> */}
          <StyledText>Profile</StyledText>
        </StyledButton>
      </StyledFooterTab>
    </StyledFooter>
  );
};

export default BottomTabs;
