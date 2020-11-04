import {combineReducers} from 'redux';

import productsNew from './Home/productsNew';
import productsPopuler from './Home/productsPopuler';
import categories from './Home/categories';
import searchProducts from './Home/searchProducts';
import productsCategory from './Home/productsCategory';

export default combineReducers({
  productsNew,
  productsPopuler,
  categories,
  searchProducts,
  productsCategory,
});
