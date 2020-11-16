import React from 'react';
import {H1WhiteBold, ContentView} from '../../styles/globalStyles';
import {Container, Button} from 'native-base';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <ContentView>
      <Container
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#075E54',
        }}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{width: 225, height: 80, marginVertical: 40}}
        />
        <Button
          block
          large
          onPress={() => navigation.navigate('Login')}
          style={{
            backgroundColor: '#128C7E',
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 15,
          }}>
          <H1WhiteBold>SIGN IN</H1WhiteBold>
        </Button>
        <Button
          block
          large
          onPress={() => navigation.navigate('SignUp')}
          style={{
            backgroundColor: '#128C7E',
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 15,
          }}>
          <H1WhiteBold>SIGN UP</H1WhiteBold>
        </Button>
      </Container>
    </ContentView>
  );
};

export default Main;
