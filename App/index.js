import React from 'react';
import {StyledContainer} from './styles/globalStyles';
import {Provider} from 'react-redux';
import store from './redux/store';
import SplashScreen from 'react-native-splash-screen';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';

import Screens from './navigations';

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    const persitedStore = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persitedStore}>
          <StyledContainer>
            <Screens />
          </StyledContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
