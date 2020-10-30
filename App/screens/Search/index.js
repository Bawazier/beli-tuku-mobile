import React from 'react';
import {
  StyledHeader,
  StyledLeft,
  StyledButton,
  StyledItem,
  StyledInput,
} from './styled';
import {Icon} from 'native-base';

//COmponent

const Search = () => {
  return (
    <StyledHeader searchBar rounded>
      <StyledLeft>
        <StyledButton transparent>
          <Icon name="arrow-back" />
        </StyledButton>
      </StyledLeft>
      <StyledItem>
        <Icon name="ios-search" />
        <StyledInput placeholder="Search" />
        <Icon name="ios-people" />
      </StyledItem>
    </StyledHeader>
  );
};

export default Search;
