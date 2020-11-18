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
import {Icon, Button, Spinner, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//Component

//Actions
import ProfileActions from '../../redux/actions/profile';

const ShippingAddress = () => {
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [data, setData] = useState(address.data.length ? address.data : null);
  const [countInfo, setCountInfo] = useState(
    address.pageInfo.length ? address.pageInfo[0].count : 0,
  );
  const navigation = useNavigation();

  const nextLink = async (info) => {
    const {count} = address.pageInfo;
    console.log(info.distanceFromEnd);
    if (info.distanceFromEnd >= 0) {
      if (count > 10) {
        await dispatch(ProfileActions.getAddress(auth.token, '', 10));
        setData([...data, ...address.data]);
      }
    }
  };

  const searchAddress = async (e) => {
    console.log(e);
    await dispatch(ProfileActions.getAddress(auth.token, e.nativeEvent.text));
    setData(address.data.length ? address.data : null);
  };
  const onChangePress = async (id) => {
    await dispatch(ProfileActions.getAddressId(id, auth.token));
    navigation.navigate('ChangeAddress');
    console.log(address.dataById);
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
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={nextLink}
            data={data}
            renderItem={({item}) => (
              <>
                {address.isLoading && !address.isError && (
                  <StyledViewCard>
                    <Row>
                      <StyledTextCard>.....</StyledTextCard>
                      <StyledButton transparent small>
                        <StyledTextButton>......</StyledTextButton>
                      </StyledButton>
                    </Row>
                    <StyledTextCard>......</StyledTextCard>
                    <StyledTextCard>......</StyledTextCard>
                  </StyledViewCard>
                )}
                {!address.isLoading && address.isError && (
                  <StyledViewCard>
                    <StyledText>do not have an address</StyledText>
                  </StyledViewCard>
                )}
                {!address.isLoading && !address.isError && countInfo !== 0 && (
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
                )}
              </>
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
          <StyledButton
            block
            bordered
            dark
            rounded
            onPress={() => navigation.navigate('AddingAddress')}>
            <StyledTextBlockButton>ADD NEW ADDRESS</StyledTextBlockButton>
          </StyledButton>
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default ShippingAddress;
