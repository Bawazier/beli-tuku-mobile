import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyledContent,
  StyledContainer,
  StyledText,
  StyledViewCard,
  Row,
  StyledTextCard,
  StyledButton,
  StyledTextButton,
  StyledItem,
  StyledInput,
  StyledTextBlockButton,
} from './styled';
import {TouchableOpacity, FlatList} from 'react-native';
import {Icon, Button, Spinner, View, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//Component

//Actions
import addressActions from '../../redux/actions/address';

const ShippingAddress = () => {
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const searchAddress = async (e) => {
    dispatch(addressActions.listAddress(auth.token, e.nativeEvent.text || ''));
  };

  const onChangePress = async (id) => {
    dispatch(addressActions.getAddress(auth.token, id));
    navigation.navigate('ChangeAddress');
  };

  const changePrimary = async (id) => {
    await dispatch(
      addressActions.updateAddress(auth.token, id, {isPrimary: true}),
    );
    dispatch(addressActions.listAddress(auth.token));
  };

  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledItem>
            <Icon name="search" type="FontAwesome" />
            <StyledInput placeholder="Search" onSubmitEditing={searchAddress} />
          </StyledItem>
        </StyledContainer>
        <StyledContainer>
          <StyledText>Shipping address</StyledText>
          {!address.isLoading && !address.isListError && (
            <FlatList
              onEndReachedThreshold={0.5}
              // onEndReached={nextLink}
              data={address.dataList}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => changePrimary(item.id)}
                  style={{
                    borderRadius: 10,
                    marginVertical: 4,
                  }}>
                  {item.isPrimary && <Text note>Default :</Text>}
                  <StyledViewCard>
                    <Row>
                      <StyledTextCard>{item.name}</StyledTextCard>
                      <StyledButton
                        transparent
                        small
                        onPress={() => onChangePress(item.id)}>
                        <StyledTextButton>Change</StyledTextButton>
                      </StyledButton>
                    </Row>
                    <StyledTextCard>{item.address}</StyledTextCard>
                    <StyledTextCard>{item.region}</StyledTextCard>
                  </StyledViewCard>
                </TouchableOpacity>
              )}
              horizontal={false}
              keyExtractor={(item) => item.id}
              // ListFooterComponent={
              //   <View style={{alignItems: 'center', width: '100%'}}>
              //     {address.pageInfo && countInfo > 10 && pageInfo < 10 && (
              //       <Spinner color="green" />
              //     )}
              //   </View>
              // }
            />
          )}
          <StyledButton
            block
            bordered
            warning
            rounded
            style={{marginVertical: 15}}
            onPress={() => navigation.navigate('AddingAddress')}>
            <Text>ADD NEW ADDRESS</Text>
          </StyledButton>
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default ShippingAddress;
