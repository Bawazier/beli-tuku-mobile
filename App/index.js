import React from 'react';
import {StyledContainer} from './styles/globalStyles';
import {Provider} from 'react-redux';
import store from './redux/store';
import SplashScreen from 'react-native-splash-screen';

import Screens from './navigations';

// import Login from './screens/Login';
// import Signup from './screens/SignUp';
// import ResetPass from './screens/ResetPass';
// import ForgotPass from './screens/ForgotPass';
// import Setting from './screens/Setting';
// import AddingAddress from './screens/ShippingAddress/AddingAddress';
// import ChangeAddress from './screens/ShippingAddress/ChangeAddress';
// import Catalog from './screens/Catalog';
// import Categories from './screens/Categories';
// import ShippingAddress from './screens/ShippingAddress';

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <StyledContainer>
          <Screens />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
