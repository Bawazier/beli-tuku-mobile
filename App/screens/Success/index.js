import React from 'react';
import {Image} from 'react-native';
import {View, Text, Button} from 'native-base';

const Success = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Image
        source={require('../../assets/bags.png')}
        style={{width: 200, height: 200, marginVertical: 10}}
      />
      <Text style={{fontWeight: 'bold', fontSize: 30, marginVertical: 20}}>
        Success!
      </Text>
      <View
        style={{
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text note>Your order will be delivered soon.</Text>
        <Text note>Thank you for choosing our app!</Text>
      </View>

      <View
        style={{
          width: '80%',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Button
          block
          rounded
          warning
          onPress={() => navigation.navigate('Home')}>
          <Text>CONTINUE SHOPPING</Text>
        </Button>
      </View>
    </View>
  );
};

export default Success;
