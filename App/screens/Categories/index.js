/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  StyledTextButton,
  StyledViewButton,
  StyledTextCategory,
  StyledText,
} from './styled';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, FlatList} from 'react-native';
import {Button, Content, List, ListItem, Spinner, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//COmponent

//Actions
import HomeActions from '../../redux/actions/home';

const Categories = ({navigation}) => {
  const {data, isLoading, isError} = useSelector(
    (state) => state.listCategories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.listCategories());
  }, []);

  const searchByCategory = (catalog_name = '') => {
    dispatch(HomeActions.catalogSearch('', catalog_name));
    navigation.navigate('Catalog');
  };

  return (
    <>
      <StyledViewButton>
        <Button
          block
          rounded
          success
          onPress={() => searchByCategory()}
          style={{elevation: 10, color: '#9ce47c'}}>
          <StyledTextButton>VIEW ALL ITEMS</StyledTextButton>
        </Button>
      </StyledViewButton>
      <StyledText>Choose category</StyledText>
      <Content>
        {!isLoading && !isError && (
          <FlatList
            onEndReachedThreshold={0.5}
            // onEndReached={NextLink}
            data={data}
            renderItem={({item}) => (
              <List>
                <ListItem onPress={() => searchByCategory(item.name)}>
                  <StyledTextCategory>{item.name}</StyledTextCategory>
                </ListItem>
              </List>
            )}
            horizontal={false}
            keyExtractor={(item) => item.id}
            // ListFooterComponent={
            //   <View style={{alignItems: 'center', width: '100%'}}>
            //     <Spinner color="green" />
            //   </View>
            // }
          />
        )}
      </Content>
    </>
  );
};

export default Categories;
