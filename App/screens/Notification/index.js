import React from 'react';
import {StyledText} from './styled';
import {Icon, Button, Content} from 'native-base';

//Component
import Header from '../../Components/Header';
import NotFound from '../../Components/NotFound';

const Notification = () => {
  return (
    <>
      <Header
        left={
          <Button transparent>
            <Icon
              name="chevron-left"
              type="FontAwesome5"
              color="#222222"
              size={20}
            />
          </Button>
        }
        body={<StyledText>Notification</StyledText>}
      />
      <Content>
        <NotFound notifMessage="No notification yet" />
      </Content>
    </>
  );
};

export default Notification;
