import React from 'react';
import {
  StyledHeader,
  StyledBody,
  StyledTextBody,
  StyledContainer,
} from './styled';
import {Right, Left, Icon, Text} from 'native-base';

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Left>
          {props.left ? (
            <Icon
              name="angle-left"
              type="FontAwesome"
              color="black"
              size={10}
            />
          ) : (
            <Text>&nbsp;</Text>
          )}
        </Left>
        <StyledBody>
          {props.body ? (
            <StyledTextBody>{props.body}</StyledTextBody>
          ) : (
            <Text>&nbsp;</Text>
          )}
        </StyledBody>
        <Right>
          {props.right ? (
            <Icon name="search" type="MaterialIcons" color="black" />
          ) : (
            <Text>&nbsp;</Text>
          )}
        </Right>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
