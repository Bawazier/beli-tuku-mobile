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

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState(
    categories.data.length ? categories.data : null,
  );

  const NextLink = async (info) => {
    const {count} = categories.pageInfo;
    console.log(info.distanceFromEnd);
    if (info.distanceFromEnd >= 0) {
      if (count > 10) {
        await dispatch(HomeActions.findCategories(10));
        setData([...data, ...categories.data]);
      }
    }
  };

  useEffect(() => {
    dispatch(HomeActions.findCategories());
  }, []);

  const onPressItem = async (id) => {
    await dispatch(HomeActions.byCategory(id));
    navigation.navigate('Catalog');
  };

  const onPressButton = async () => {
    await dispatch(HomeActions.search());
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
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={NextLink}
          data={data}
          renderItem={({item}) => (
            <List>
              <ListItem onPress={() => onPressItem(item.id)}>
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
        {/* <List>
          {categories.data.map((item) => (
            <ListItem onPress={() => onPressItem(item.id)}>
              <StyledTextCategory>{item.name}</StyledTextCategory>
            </ListItem>
          ))}
        </List> */}
      </Content>
    </>
  );
};

export default Categories;
