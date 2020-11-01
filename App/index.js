import React from 'react';
// import SignUp from './screens/SignUp';
// import Login from './screens/Login';
// import ForgotPass from './screens/ForgotPass';
// import ResetPass from './screens/ResetPass';

// import Home from './screens/Home';
// import Notification from './screens/Notification';
// import Categories from './screens/Categories';
// import Catalog from './screens/Catalog';
// import Search from './screens/Search';

// import Product from './screens/Product';
// import Review from './screens/Review';

// import Cart from './screens/Cart';
// import Checkout from './screens/Checkout';
// import ShippingAddress from './screens/ShippingAddress';

import Profile from './screens/Profile';
import {StyledContainer} from './styles/globalStyles';

class App extends React.Component {
  render() {
    return (
      <StyledContainer>
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <ForgotPass /> */}
        {/* <ResetPass /> */}
        {/* <Home /> */}
        {/* <Notification /> */}
        {/* <Categories /> */}
        {/* <Catalog /> */}
        {/* <Search /> */}
        {/* <Product /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <ShippingAddress /> */}
        <Profile />
      </StyledContainer>
    );
  }
}

export default App;
