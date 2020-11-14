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
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {
      name: 'Minyak Angin',
    },
    {
      name: 'Minyak Angin',
    },
  ]);
  const [nextData, setNextData] = useState([
    {
      name: 'Minyak Telon',
    },
    {
      name: 'Minyak Telon',
    },
  ]);
  // const categories = useSelector((state) => state.categories);
  // const dispatch = useDispatch();
  // // const navigation = useNavigation();

  // useEffect(() => {
  //   dispatch(HomeActions.findCategories());
  // }, []);

  // const onPressItem = async (id) => {
  //   await dispatch(HomeActions.byCategory(id));
  //   navigation.navigate('Catalog');
  // };

  // const onPressButton = async () => {
  //   await dispatch(HomeActions.search(''));
  //   navigation.navigate('Catalog');
  // };

  return (
    <>
      <StyledViewButton>
        <Button
          block
          rounded
          success
          style={{elevation: 10}}
          // onPress={() => onPressButton()}
        >
          <StyledTextButton>VIEW ALL ITEMS</StyledTextButton>
        </Button>
      </StyledViewButton>
      <Content>
        <StyledText>Choose category</StyledText>
        <FlatList
          refreshing={refreshing}
          onRefresh={true}
          onEndReachedThreshold={0.5}
          onEndReached={({distanceFromEnd}) => {
            setRefreshing(true);
            if (distanceFromEnd >= 0) {
              setData([...data, ...nextData]);
              setRefreshing(false);
            }
            console.log('on end reached ', distanceFromEnd);
          }}
          data={data}
          renderItem={({item}) => (
            <List>
              <ListItem>
                <StyledTextCategory>{item.name}</StyledTextCategory>
              </ListItem>
            </List>
          )}
          horizontal={false}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View style={{alignItems: 'center', width: '100%'}}>
              <Spinner color="green" />
            </View>
          }
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
