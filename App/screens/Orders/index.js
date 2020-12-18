import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyledText, StyledContent, StyledContainer} from './styled';
import {TouchableOpacity} from 'react-native';

//Component
import CardOrderDetails from '../../Components/CardOrderDetails';

//Actions
import transactionActions from '../../redux/actions/transaction';

const Orders = ({navigation}) => {
  const {dataList, pageInfo, isLoading, isListtError} = useSelector(
    (state) => state.order,
  );
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionActions.listOrder(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detailOrder = (id_order, noOrder) => {
    dispatch(transactionActions.getOrder(auth.token, id_order));
    dispatch(transactionActions.listOrderCart(auth.token, noOrder));
    navigation.navigate('OrderDetails');
  };

  return (
    <>
      <StyledContent>
        <StyledContainer>
          <StyledText>My Orders</StyledText>
        </StyledContainer>
        <StyledContainer>
          {!isLoading &&
            !isListtError &&
            dataList.map((item) => (
              <TouchableOpacity
                onPress={() => detailOrder(item.id, item.noOrder)}>
                <CardOrderDetails
                  noOrder={item.noOrder}
                  createdAt={item.createdAt}
                  noTracking={item.noTracking}
                  Quantity={item.Quantity}
                  totalAmount={item.totalAmount}
                  status={item.status}
                />
              </TouchableOpacity>
            ))}
        </StyledContainer>
      </StyledContent>
    </>
  );
};

export default Orders;
