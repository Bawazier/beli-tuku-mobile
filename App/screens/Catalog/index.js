import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  StyledTextTab,
  StyledViewTab,
  StyleButtondTab,
  StyledViewContent,
} from './styled';
import {Icon, Content, Spinner, View} from 'native-base';
import {TouchableOpacity, FlatList} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

//Components
import CardProduct from '../../Components/CardProduct';
import NotFound from '../../Components/NotFound';
import SortList from '../../Components/BottomSheet/SortList';

const Catalog = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {
      name: 'Minyak Angin',
      price: 5000,
      rating: 3,
    },
    {
      name: 'Minyak Angin',
      price: 5000,
      rating: 3,
    },
  ]);
  const [nextData, setNextData] = useState([
    {
      name: 'Minyak Telon',
      price: 555000,
      rating: 5,
    },
    {
      name: 'Minyak Telon',
      price: 555000,
      rating: 5,
    },
  ]);
  // const productCategory = useSelector((state) => state.productCategory);
  // const searchProducts = useSelector((state) => state.searchProducts);
  // const dispatch = useDispatch();
  // const navigation = useNavigation();
  const sheetRef = React.useRef(null);

  return (
    <>
      <StyledViewTab>
        <StyleButtondTab transparent>
          <Icon
            name="filter"
            type="FontAwesome"
            color="#222222"
            fontSize={20}
          />
          <StyledTextTab>Filters</StyledTextTab>
        </StyleButtondTab>
        <StyleButtondTab
          transparent
          style={{flexBasis: 100, justifyContent: 'flex-end'}}
          onPress={() => sheetRef.current.snapTo(0)}>
          <Icon
            name="sort-amount-desc"
            type="FontAwesome"
            color="#222222"
            fontSize={20}
          />
          <StyledTextTab>Price: lowest to high</StyledTextTab>
        </StyleButtondTab>
        <StyleButtondTab transparent>
          <Icon
            name={false ? 'view-list' : 'view-module'}
            type="MaterialIcons"
            color="#222222"
            fontSize={20}
          />
        </StyleButtondTab>
      </StyledViewTab>
      <Content>
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
            <CardProduct
              productName={item.name}
              productPrice={item.price}
              productRating={item.rating}
            />
          )}
          columnWrapperStyle={{justifyContent: 'center'}}
          numColumns={2}
          horizontal={false}
          keyExtractor={(item) => item._id}
          ListFooterComponent={
            <View style={{alignItems: 'center', width: '100%'}}>
              <Spinner color="green" />
            </View>
          }
        />
        {/* <StyledViewContent>
          {productCategory.isLoading &&
            !productCategory.isError &&
            [...Array(8)].map((item) => (
              <CardProduct
                productName="...."
                productPrice="...."
                productRating="...."
              />
            ))}
          {!productCategory.isLoading && productCategory.isError && (
            <NotFound notifMessage={productCategory.alertMsg} />
          )}
          {productCategory.data.map((item) => (
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <CardProduct
                productImage={
                  item.imagesPrimary.map((i) =>
                    i.id_product === item.id ? i.URL_image : '',
                  )[0]
                }
                productName={item.name}
                productPrice={item.price}
                productRating={item.rating}
                displayBadge={true}
              />
            </TouchableOpacity>
          ))}
        </StyledViewContent> */}
      </Content>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[280, 0]}
        borderRadius={10}
        renderContent={SortList}
        initialSnap={1}
        enabledGestureInteraction={true}
      />
    </>
  );
};

export default Catalog;
