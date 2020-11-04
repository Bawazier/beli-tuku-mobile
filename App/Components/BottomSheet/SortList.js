import React from 'react';
import {StyledContainer, StyledText, StyledTextPrimary} from './styled';
import {List, ListItem, Left} from 'native-base';

const SortList = () => {
  return (
    <StyledContainer style={{height: 280, paddingTop: 10}}>
      <StyledText>Sort By</StyledText>
      <List style={{marginTop: 10}}>
        <ListItem noIndent>
          <Left>
            <StyledTextPrimary>Popular</StyledTextPrimary>
          </Left>
        </ListItem>
        <ListItem noIndent>
          <Left>
            <StyledTextPrimary>Newest</StyledTextPrimary>
          </Left>
        </ListItem>
        <ListItem noIndent>
          <Left>
            <StyledTextPrimary>Customer review</StyledTextPrimary>
          </Left>
        </ListItem>
        <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
          <Left>
            <StyledTextPrimary>Price: lowest to high</StyledTextPrimary>
          </Left>
        </ListItem>
        <ListItem noIndent>
          <Left>
            <StyledTextPrimary>Price: highest to low</StyledTextPrimary>
          </Left>
        </ListItem>
      </List>
    </StyledContainer>
  );
};

export default SortList;
