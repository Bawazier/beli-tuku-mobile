import React from 'react';
import {
  StyledTextHeader,
  StyledTextButton,
  StyledViewButton,
  StyledTextCategory,
  StyledText,
  StyledTouchableOpacity,
} from './styled';
import {Icon, Button, Content, List, ListItem} from 'native-base';

//COmponent
import Header from '../../Components/Header';

const Categories = () => {
  return (
    <>
      <Header
        left={
          <Button transparent>
            <Icon
              name="chevron-left"
              type="FontAwesome5"
              color="#222222"
              size={20}
            />
          </Button>
        }
        body={<StyledTextHeader>Categories</StyledTextHeader>}
      />
      <StyledViewButton>
        <Button block rounded success>
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
