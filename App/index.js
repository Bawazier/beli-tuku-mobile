import React from 'react';
import {StyledContainer} from './styles/globalStyles';
import {Provider} from 'react-redux';
import store from './redux/store';

import Screens from './navigations';

class App extends React.Component {
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
