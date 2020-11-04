import React from 'react';
import {StyledContainer} from './styles/globalStyles';

import Screens from './navigations';

class App extends React.Component {
  render() {
    return (
      <StyledContainer>
        <Screens />
      </StyledContainer>
    );
  }
}

export default App;
