import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Content} from 'native-base';

// Components
import Header from '../../Components/Header';
import BottomTabs from '../../Components/BottomTabs';

const Home = () => {
  return (
    <>
      <Header
        right={
          <Button transparent>
            <Icon name="bell" color="#222222" size={20} />
          </Button>
        }
      />
      <Content />
      <BottomTabs />
    </>
  );
};

export default Home;
