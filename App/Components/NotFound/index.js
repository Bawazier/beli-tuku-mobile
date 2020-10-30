import React from 'react';
import {StyledView, StyledText} from './styled';
import {Image} from 'react-native';

const index = (props) => {
  return (
    <StyledView>
      <Image source={require('../../assets/notif.png')} />
      <StyledText>{props.notifMessage}</StyledText>
    </StyledView>
  );
};

export default index;
