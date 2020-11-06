/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  StyledTextButton,
  StyledViewButton,
  StyledTextCategory,
  StyledText,
} from './styled';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Content, List, ListItem} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//COmponent

//Actions
import HomeActions from '../../redux/actions/home';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(HomeActions.findCategories());
  }, []);

  const onPressItem = async (id) => {
    await dispatch(HomeActions.byCategory(id));
    navigation.navigate('Catalog');
  };

  const onPressButton = async () => {
    await dispatch(HomeActions.search(''));
    navigation.navigate('Catalog');
  };

  return (
    <>
      <StyledViewButton>
        <Button
          block
          rounded
          success
          style={{elevation: 10}}
          onPress={() => onPressButton()}>
          <StyledTextButton>VIEW ALL ITEMS</StyledTextButton>
        </Button>
      </StyledViewButton>
      <Content>
        <StyledText>Choose category</StyledText>
        <List>
          {categories.data.map((item) => (
            <ListItem onPress={() => onPressItem(item.id)}>
              <StyledTextCategory>{item.name}</StyledTextCategory>
            </ListItem>
          ))}
        </List>
      </Content>
    </>
  );
};

export default Categories;
