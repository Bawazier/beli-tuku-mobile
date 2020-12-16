import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import numeral from 'numeral';
import {
  Container,
  Content,
  Card,
  List,
  CardItem,
  Text,
  Left,
  Right,
  Icon,
  View,
  Spinner,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Dialog from 'react-native-dialog';

import transactionActions from '../../redux/actions/transaction';
import accountActions from '../../redux/actions/account';

const Topup = ({navigation}) => {
  const {
    dataList,
    isLoading,
    isTopupCreditLoading,
    isListTopupError,
    isTopupCreditError,
  } = useSelector((state) => state.topup);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    dispatch(transactionActions.listTopup(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topup = (id) => {
    dispatch(transactionActions.topupCredit(auth.token, id));
    dispatch(accountActions.getAccount(auth.token));
    setSuccess(!success);
  };

  return (
    <Content style={{paddingHorizontal: 8}}>
      {!isLoading &&
        !isListTopupError &&
        dataList.map((item) => (
          <TouchableOpacity onPress={() => topup(item.id)}>
            <Card transparent>
              <CardItem
                style={{
                  height: 60,
                  borderRadius: 10,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  marginTop: 5,
                  elevation: 10,
                }}>
                <Left>
                  <Text
                    style={{
                      color: '#9ce47c',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {numeral(item.charge)
                      .format(0, 0)
                      .toString()
                      .replace(',', '.')}
                  </Text>
                </Left>
                <Right>
                  <Icon
                    name="money-check-alt"
                    type="FontAwesome5"
                    style={{color: '#9ce47c', fontSize: 25}}
                  />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        ))}
      <View>
        <Dialog.Container visible={success}>
          <Dialog.Title>Topup Success</Dialog.Title>
          <Dialog.Description>
            Sorry you can't make a transaction because your balance is
            insufficient, please do a top up first
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={() => navigation.goBack()} />
        </Dialog.Container>
      </View>
      {isLoading && !isListTopupError && (
        <View>
          <Dialog.Container visible={!success}>
            <Spinner color="green" />
          </Dialog.Container>
        </View>
      )}
    </Content>
  );
};

export default Topup;
