import React from 'react';
// import SignUp from './screens/SignUp';
// import Login from './screens/Login';
// import ForgotPass from './screens/ForgotPass';
// import ResetPass from './screens/ResetPass';

import Home from './screens/Home';
import {StyledContainer} from './styles/globalStyles';

class App extends React.Component {
  render() {
    return (
      <StyledContainer>
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <ForgotPass /> */}
        {/* <ResetPass /> */}
        <Home />
      </StyledContainer>
    );
  }
}

export default App;
