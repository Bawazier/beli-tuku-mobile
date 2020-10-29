import React from 'react';
import {StyledHeader} from './styled';
import {Body, Right, Left} from 'native-base';

const Header = (props) => {
  return (
    <StyledHeader>
      <Left>{props.left}</Left>
      <Body>{props.body}</Body>
      <Right>{props.right}</Right>
    </StyledHeader>
  );
};

export default Header;
