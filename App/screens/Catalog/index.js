import React from 'react';
import {
  StyledTextHeader,
  StyledTextTab,
  StyledViewTab,
  StyleButtondTab,
  StyledViewContent,
} from './styled';
import {Icon, Content} from 'native-base';

//Components
import Header from '../../Components/Header';
import BottomTabs from '../../Components/BottomTabs';
import CardProduct from '../../Components/CardProduct';

const Catalog = () => {
  return (
    <>
      <Header body={<StyledTextHeader>Women's tops</StyledTextHeader>} />
      <StyledViewTab>
        <StyleButtondTab transparent>
          <StyledTextTab>Filters</StyledTextTab>
        </StyleButtondTab>
        <StyleButtondTab transparent style={{flexGrow: 2}}>
          <StyledTextTab>Price: lowest to high</StyledTextTab>
        </StyleButtondTab>
        <StyleButtondTab transparent>
          <StyledTextTab>Icon</StyledTextTab>
        </StyleButtondTab>
      </StyledViewTab>
      <Content>
        <StyledViewContent>
          {[...Array(10)].map((ittem) => (
            <CardProduct />
          ))}
        </StyledViewContent>
      </Content>
      <BottomTabs />
    </>
  );
};

export default Catalog;
