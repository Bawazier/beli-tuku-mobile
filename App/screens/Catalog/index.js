import React from 'react';
import {
  StyledTextTab,
  StyledViewTab,
  StyleButtondTab,
  StyledViewContent,
} from './styled';
import {Icon, Content} from 'native-base';
import BottomSheet from 'reanimated-bottom-sheet';

//Components
import CardProduct from '../../Components/CardProduct';
import SortList from '../../Components/BottomSheet/SortList';

const Catalog = () => {
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
          {[...Array(10)].map((ittem) => (
            <CardProduct />
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
