import React from 'react';
import {Content, View, Text, Card} from 'native-base';
import {Image} from 'react-native';
import {API_URL} from '@env';
import numeral from 'numeral';

export default (props) => {
  return (
    <Card style={{width: '100%', borderRadius: 10, overflow: 'hidden'}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 100, height: 100}}
          source={
            props.picture
              ? {uri: API_URL + '/' + props.picture}
              : require('../../assets/primaryImage.png')
          }
        />
        <View style={{padding: 10}}>
          <View>
            <Text>{props.name}</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                marginRight: 10,
              }}>
              <Text note>Color:&nbsp;</Text>
              <Text>{props.colorName}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                marginLeft: 10,
              }}>
              <Text note>Size:&nbsp;</Text>
              <Text>{props.size}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              width: '70%',
              marginVertical: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                marginRight: 10,
              }}>
              <Text note>Units:&nbsp;</Text>
              <Text>{props.units}</Text>
            </View>
            <Text>
              Rp.
              {numeral(props.totalPrice || 0)
                .format(0, 0)
                .toString()
                .replace(',', '.')}
              ,-
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};
