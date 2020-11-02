import React from 'react';
import {
  StyledTextTab,
  StyledViewTab,
  StyleButtondTab,
  StyledViewContent,
} from './styled';
import {Icon, Content} from 'native-base';

//Components
import CardProduct from '../../Components/CardProduct';

const Catalog = () => {
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
          style={{flexBasis: 100, justifyContent: 'flex-end'}}>
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
    </>
  );
};

export default Catalog;
