import React from 'react';
import {Content} from 'native-base';

//Component
import NotFound from '../../Components/NotFound';

const Notification = () => {
  return (
    <>
      <Content>
        <NotFound notifMessage="No notification yet" />
      </Content>
    </>
  );
};

export default Notification;
