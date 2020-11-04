import React from 'react';
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
import {Icon, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';


//Component

const ShippingAddress = () => {
  const navigation = useNavigation();
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
          {[...Array(3)].map((item) => (
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
          ))}
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
