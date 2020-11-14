import React, {useState} from 'react';
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

const ShippingAddress = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {
      nameAddress: 'Jane Doe',
      address: '3 Newbridge Court',
      city: 'Chino Hills, CA 91709, United States',
    },
    {
      nameAddress: 'Jane Doe',
      address: '3 Newbridge Court',
      city: 'Chino Hills, CA 91709, United States',
    },
  ]);
  const [nextData, setNextData] = useState([
    {
      nameAddress: 'Aldo wardana',
      address: 'Jl. Mulawarman III no 12 ',
      city: 'Jawa tengah, Semarang, Manyaran',
    },
    {
      nameAddress: 'Aldo wardana',
      address: 'Jl. Mulawarman III no 12 ',
      city: 'Jawa tengah, Semarang, Manyaran',
    },
  ]);
  // const navigation = useNavigation();
  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledItem>
            <Icon name="search" type="FontAwesome" />
            <StyledInput placeholder="Search" />
          </StyledItem>
        </StyledContainer>
        <StyledContainer>
          <StyledText>Shipping address</StyledText>
          <FlatList
            refreshing={refreshing}
            onRefresh={true}
            onEndReachedThreshold={0.5}
            onEndReached={({distanceFromEnd}) => {
              setRefreshing(true);
              if (distanceFromEnd >= 0) {
                setData([...data, ...nextData]);
                setRefreshing(false);
              }
              console.log('on end reached ', distanceFromEnd);
            }}
            data={data}
            renderItem={({item}) => (
              <StyledViewCard>
                <Row>
                  <StyledTextCard>{item.nameAddress}</StyledTextCard>
                  <StyledButton transparent small>
                    <StyledTextButton>Change</StyledTextButton>
                  </StyledButton>
                </Row>
                <StyledTextCard>{item.address}</StyledTextCard>
                <StyledTextCard>{item.city}</StyledTextCard>
              </StyledViewCard>
            )}
            horizontal={false}
            keyExtractor={(item) => item.id}
            ListFooterComponent={
              <View style={{alignItems: 'center', width: '100%'}}>
                <Spinner color="green" />
              </View>
            }
          />
          {/* {[...Array(3)].map((item) => (
            <StyledViewCard>
              <Row>
                <StyledTextCard>Jane Doe</StyledTextCard>
                <StyledButton
                  transparent
                  small
                  onPress={() => navigation.navigate('ChangeAddress')}>
                  <StyledTextButton>Change</StyledTextButton>
                </StyledButton>
              </Row>
              <StyledTextCard>3 Newbridge Court </StyledTextCard>
              <StyledTextCard>
                Chino Hills, CA 91709, United States{' '}
              </StyledTextCard>
            </StyledViewCard>
          ))} */}
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
