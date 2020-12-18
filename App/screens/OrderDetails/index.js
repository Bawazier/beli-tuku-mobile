import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Content, View, Text, Button} from 'native-base';
import {format} from 'date-fns';
import numeral from 'numeral';

//Components
import CardProductOrder from '../../Components/CardProductOrder';

const OrderDetails = () => {
  const cart = useSelector((state) => state.cart);
  const {dataGet, isLoading, isGetError} = useSelector((state) => state.order);

  return (
    <Content>
      {!isLoading && !isGetError && (
        <View style={{margin: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Text>
              Order No.{dataGet.noOrder.replace('.', '').substring(0, 8) || 0}
            </Text>
            <Text note>
              {format(
                new Date(dataGet.createdAt) || new Date('12/12/2020'),
                'yyyy-MM-dd',
              )}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text note>Tracking number: </Text>
              <Text>{dataGet.noTracking || 0}</Text>
            </View>
            <Text style={{color: '#9ce47c'}}>
              {dataGet.status.toUpperCase() || ''}
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text>{cart.pageInfo.count || 0} items</Text>
            {!cart.isLoading &&
              !cart.isListOrderCartError &&
              cart.dataListCartOrder.map((item) => (
                <View>
                  <CardProductOrder
                    picture={item.DetailProduct.ProductImage.picture}
                    name={item.DetailProduct.Product.name}
                    colorName={item.DetailProduct.ProductColor.name}
                    size={item.DetailProduct.ProductSize.size}
                    units={item.quantity}
                    totalPrice={item.totalPrice}
                  />
                </View>
              ))}
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Order information</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
                width: '100%',
              }}>
              <View style={{width: '35%'}}>
                <Text note>Shipping Address:&nbsp; &nbsp;</Text>
              </View>
              <View style={{width: '70%', height: 'auto'}}>
                <Text>
                  {dataGet.Address.address + ', ' + dataGet.Address.region}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
                width: '100%',
              }}>
              <View style={{width: '35%'}}>
                <Text note>Payment method:&nbsp; &nbsp;</Text>
              </View>
              <View style={{width: '70%', height: 'auto'}}>
                <Text>Credit</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
                width: '100%',
              }}>
              <View style={{width: '35%'}}>
                <Text note>Delivery method:&nbsp; &nbsp;</Text>
              </View>
              <View style={{width: '70%', height: 'auto'}}>
                <Text>
                  sendBae, 3 days, Rp
                  {numeral(dataGet.delivery)
                    .format(0, 0)
                    .toString()
                    .replace(',', '.')}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
                width: '100%',
              }}>
              <View style={{width: '35%'}}>
                <Text note>Discount:&nbsp; &nbsp;</Text>
              </View>
              <View style={{width: '70%', height: 'auto'}}>
                <Text>{dataGet.discount || ''}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
                width: '100%',
              }}>
              <View style={{width: '35%'}}>
                <Text note>Total Amount:&nbsp; &nbsp;</Text>
              </View>
              <View style={{width: '70%', height: 'auto'}}>
                <Text>
                  Rp.
                  {numeral(dataGet.totalAmount)
                    .format(0, 0)
                    .toString()
                    .replace(',', '.')}
                  ,00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              width: '100%',
            }}>
            <Button bordered warning style={{width: '45%', borderRadius: 10}}>
              <Text style={{width: '100%', textAlign: 'center'}}>Reorder</Text>
            </Button>
            <Button warning style={{width: '45%', borderRadius: 10}}>
              <Text style={{width: '100%', textAlign: 'center'}}>
                Leave feedback
              </Text>
            </Button>
          </View>
        </View>
      )}
    </Content>
  );
};

export default OrderDetails;
