import React from 'react';
import {View} from 'native-base';
import Dialog from 'react-native-dialog';

const PendingDialog = () => {
  return (
    <View>
      <Dialog.Container visible={true}>
        <Dialog.Description>Please wait...</Dialog.Description>
      </Dialog.Container>
    </View>
  );
};

export default PendingDialog;
