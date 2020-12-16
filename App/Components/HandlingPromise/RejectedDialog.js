import React, {useState} from 'react';
import {View} from 'native-base';
import Dialog from 'react-native-dialog';

const RejectedDialog = (props) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>{props.errorTitle}</Dialog.Title>
        <Dialog.Description>{props.errorDescription}</Dialog.Description>
        <Dialog.Button label="Close" onPress={handleClose} />
      </Dialog.Container>
    </View>
  );
};

export default RejectedDialog;
