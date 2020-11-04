import React from 'react';
import {
  StyledTextButton,
  StyledViewButton,
  StyledTextCategory,
  StyledText,
} from './styled';
import {Button, Content, List, ListItem} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//COmponent

const Categories = () => {
  const navigation = useNavigation();
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
            <ListItem onPress={() => navigation.navigate('Catalog')}>
              <StyledTextCategory>Aaron Bennet</StyledTextCategory>
            </ListItem>
          ))}
        </List>
      </Content>
    </>
  );
};

export default Categories;
