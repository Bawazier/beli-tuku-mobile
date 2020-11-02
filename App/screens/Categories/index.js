import React from 'react';
import {
  StyledTextButton,
  StyledViewButton,
  StyledTextCategory,
  StyledText,
  StyledTouchableOpacity,
} from './styled';
import {Button, Content, List, ListItem} from 'native-base';

//COmponent

const Categories = () => {
  return (
    <>
      <StyledViewButton>
        <Button block rounded success style={{elevation: 10}}>
          <StyledTextButton>VIEW ALL ITEMS</StyledTextButton>
        </Button>
      </StyledViewButton>
      <Content>
        <StyledText>Choose category</StyledText>
        <List>
          {[...Array(10)].map((item) => (
            <StyledTouchableOpacity>
              <ListItem>
                <StyledTextCategory>Aaron Bennet</StyledTextCategory>
              </ListItem>
            </StyledTouchableOpacity>
          ))}
        </List>
      </Content>
    </>
  );
};

export default Categories;
