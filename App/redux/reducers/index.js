import {combineReducers} from 'redux';

import productNews from './Home/productNews';
import productPopular from './Home/productPopular';
import categories from './Home/categories';
import searchProducts from './Home/searchProducts';
import productCategory from './Home/productCategory';

import auth from './Auth/auth';
import profile from './Profile/profile';

export default combineReducers({
  productNews,
  productPopular,
  categories,
  searchProducts,
  productCategory,
  auth,
  profile,
});
