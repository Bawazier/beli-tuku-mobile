import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  StyledTextTab,
  StyledViewTab,
  StyleButtondTab,
  StyledViewContent,
} from './styled';
import {Icon, Content} from 'native-base';
import {TouchableOpacity} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

//Components
import CardProduct from '../../Components/CardProduct';
import NotFound from '../../Components/NotFound';
import SortList from '../../Components/BottomSheet/SortList';

const Catalog = () => {
  const productCategory = useSelector((state) => state.productCategory);
  const searchProducts = useSelector((state) => state.searchProducts);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
        <StyledViewContent>
          {/* {productCategory.isLoading &&
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
          )} */}
          {productCategory.data.map((item) => (
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <CardProduct
                // productImage={
                //   item.imagesPrimary.map((i) =>
                //     i.id_product === item.id ? i.URL_image : '',
                //   )[0]
                // }
                productName={item.name}
                productPrice={item.price}
                productRating={item.rating}
                displayBadge={true}
              />
            </TouchableOpacity>
          ))}
        </StyledViewContent>
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
