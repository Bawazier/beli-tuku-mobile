import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  StyledTextTab,
  StyledViewTab,
  StyleButtondTab,
  StyledViewContent,
} from './styled';
import {
  Icon,
  Content,
  Spinner,
  View,
  Text,
  Button,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import {TouchableOpacity, FlatList, ScrollView} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Dialog from 'react-native-dialog';

//Components
import CardProduct from '../../Components/CardProduct';
import NotFound from '../../Components/NotFound';
import SortList from '../../Components/BottomSheet/SortList';

//Actions
import HomeActions from '../../redux/actions/home';

const Catalog = () => {
  const {data, pageInfo, isLoading, isError} = useSelector(
    (state) => state.catalogResults,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [sortByPopular, setSortByPopular] = useState(false);
  const [sortByNewest, setSortByNewest] = useState(false);
  const [sortByPriceLow, setSortByPriceLow] = useState(false);
  const [sortByPriceHight, setSortByPriceHight] = useState(false);
  const [sortBy, setSortBy] = useState('Newest');

  const detailProduct = (id_product) => {
    dispatch(HomeActions.detailProduct(id_product));
    navigation.navigate('Product');
    dispatch(HomeActions.detailProductReviews(id_product));
  };

  return (
    <>
      <StyledViewTab>
        <StyleButtondTab transparent onPress={() => setFilter(!filter)}>
          <Icon name="filter" type="FontAwesome" style={{color: '#9ce47c'}} />
          <StyledTextTab>Filters</StyledTextTab>
        </StyleButtondTab>
        <StyleButtondTab
          transparent
          onPress={() => setSort(!sort)}
          style={{flexBasis: 100, justifyContent: 'center'}}>
          <Icon name="sort" type="FontAwesome" style={{color: '#9ce47c'}} />
          <StyledTextTab>{sortBy}</StyledTextTab>
        </StyleButtondTab>
        <StyleButtondTab transparent>
          <Icon
            name={false ? 'view-list' : 'view-module'}
            type="MaterialIcons"
            style={{color: '#9ce47c'}}
          />
        </StyleButtondTab>
      </StyledViewTab>
      <Content>
        {isLoading && !isError && (
          <View>
            <Spinner color="green" />
          </View>
        )}
        {!isLoading && isError && (
          <View>
            <NotFound notifMessage="No products were found" />
          </View>
        )}
        {!isLoading && !isError && (
          <FlatList
            onEndReachedThreshold={0.5}
            // onEndReached={newsNextLink}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => detailProduct(item.id)}>
                <CardProduct
                  productImage={item.ProductImages[0].picture}
                  productStore={item.Store.name}
                  productName={item.name}
                  productPrice={item.price}
                  productRating={item.ratings}
                />
              </TouchableOpacity>
            )}
            columnWrapperStyle={{justifyContent: 'center'}}
            numColumns={2}
            horizontal={false}
            keyExtractor={(item) => item.id}
            // ListFooterComponent={
            //   <View style={{justifyContent: 'center', height: '100%'}}>
            //     <Spinner color="green" />
            //   </View>
            // }
          />
        )}
        <View>
          <Dialog.Container visible={filter}>
            <Dialog.Title style={{textAlign: 'center', fontWeight: 'bold'}}>
              Filters
            </Dialog.Title>
            <Content>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'gray',
                  paddingVertical: 5,
                }}>
                <Text style={{fontWeight: 'bold'}}>Colors</Text>
                <ScrollView
                  horizontal
                  style={{
                    height: 'auto',
                    marginVertical: 10,
                  }}>
                  {data.map((items) =>
                    items.ProductColors.map((item) => (
                      <View
                        style={{
                          borderRadius: 80,
                          padding: 3,
                          margin: 3,
                          // borderWidth: 2,
                          // borderColor: '#9ce47c',
                        }}>
                        <Button
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: item.hexa,
                            borderRadius: 40,
                          }}>
                          <Text>&nbsp;</Text>
                        </Button>
                      </View>
                    )),
                  )}
                </ScrollView>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'gray',
                  paddingVertical: 5,
                }}>
                <Text style={{fontWeight: 'bold'}}>Sizes</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginVertical: 10,
                  }}>
                  {['XS', 'S', 'M', 'L', 'XL'].map((item) => (
                    <View
                      style={{
                        margin: 3,
                      }}>
                      <Button
                        bordered
                        warning
                        style={{
                          width: 55,
                          borderRadius: 5,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            width: '100%',
                            textAlign: 'center',
                          }}>
                          {item}
                        </Text>
                      </Button>
                    </View>
                  ))}
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'gray',
                  paddingVertical: 5,
                }}>
                <Text style={{fontWeight: 'bold'}}>Categories</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginVertical: 10,
                  }}>
                  <View
                    style={{
                      margin: 3,
                    }}>
                    <Button
                      bordered
                      small
                      warning
                      style={{
                        width: 'auto',
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          textAlign: 'center',
                        }}>
                        All
                      </Text>
                    </Button>
                  </View>
                  {data.map((item, index, arr) => {
                    if (index < 5) {
                      return (
                        <View
                          style={{
                            margin: 3,
                          }}>
                          <Button
                            warning
                            small
                            style={{
                              width: 'auto',
                              borderRadius: 5,
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                textAlign: 'center',
                              }}>
                              {item.Category.name}
                            </Text>
                          </Button>
                        </View>
                      );
                    }
                  })}
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'gray',
                  paddingVertical: 5,
                }}>
                <Text style={{fontWeight: 'bold'}}>Conditions</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginVertical: 10,
                  }}>
                  <View
                    style={{
                      margin: 3,
                    }}>
                    <Button
                      bordered
                      small
                      warning
                      style={{
                        width: 'auto',
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          textAlign: 'center',
                        }}>
                        All
                      </Text>
                    </Button>
                  </View>
                  {['New', 'Used', 'Second'].map((item) => (
                    <View
                      style={{
                        margin: 3,
                      }}>
                      <Button
                        warning
                        small
                        style={{
                          width: 'auto',
                          borderRadius: 5,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            textAlign: 'center',
                          }}>
                          {item}
                        </Text>
                      </Button>
                    </View>
                  ))}
                </View>
              </View>
            </Content>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                bordered
                warning
                onPress={() => setFilter(false)}
                style={{width: '45%', borderRadius: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    width: '100%',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  Discard
                </Text>
              </Button>
              <Button warning style={{width: '45%', borderRadius: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    width: '100%',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  Apply
                </Text>
              </Button>
            </View>
          </Dialog.Container>
        </View>
        <View>
          <Dialog.Container visible={sort}>
            <Dialog.Title style={{textAlign: 'center', fontWeight: 'bold'}}>
              Filters
            </Dialog.Title>
            <List>
              <ListItem
                noIndent
                onPress={() => {
                  setSortByPopular(true);
                  setSortByNewest(false);
                  setSortByPriceLow(false);
                  setSortByPriceHight(false);
                  dispatch(HomeActions.catalogSort('stock', 'ASC'));
                  setSort(false);
                  setSortBy('Popular');
                }}
                style={{backgroundColor: sortByPopular ? '#cde1f9' : '#fff'}}>
                <Left>
                  <Text>Popular</Text>
                </Left>
              </ListItem>
              <ListItem
                noIndent
                onPress={() => {
                  setSortByPopular(false);
                  setSortByNewest(true);
                  setSortByPriceLow(false);
                  setSortByPriceHight(false);
                  dispatch(HomeActions.catalogSort());
                  setSort(false);
                  setSortBy('Newest');
                }}
                style={{backgroundColor: sortByNewest ? '#cde1f9' : '#fff'}}>
                <Left>
                  <Text>Newest</Text>
                </Left>
              </ListItem>
              <ListItem
                noIndent
                onPress={() => {
                  setSortByPopular(false);
                  setSortByNewest(false);
                  setSortByPriceLow(true);
                  setSortByPriceHight(false);
                  dispatch(HomeActions.catalogSort('price', 'ASC'));
                  setSort(false);
                  setSortBy('Price: lowest to high');
                }}
                style={{backgroundColor: sortByPriceLow ? '#cde1f9' : '#fff'}}>
                <Left>
                  <Text>Price: lowest to high</Text>
                </Left>
              </ListItem>
              <ListItem
                noIndent
                onPress={() => {
                  setSortByPopular(false);
                  setSortByNewest(false);
                  setSortByPriceLow(false);
                  setSortByPriceHight(true);
                  dispatch(HomeActions.catalogSort('price', 'DESC'));
                  setSort(false);
                  setSortBy('Price: highest to low');
                }}
                style={{
                  backgroundColor: sortByPriceHight ? '#cde1f9' : '#fff',
                }}>
                <Left>
                  <Text>Price: highest to low</Text>
                </Left>
              </ListItem>
            </List>
          </Dialog.Container>
        </View>
      </Content>
    </>
  );
};

export default Catalog;
