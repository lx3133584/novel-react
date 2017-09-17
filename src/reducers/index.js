import { combineReducers } from 'redux';
import search from './search';
import detail from './detail';
import content from './content';
import list from './list';
import bookshelf from './bookshelf';
import config from './config';
export default combineReducers({
    search,
    detail,
    content,
    list,
    bookshelf,
    config,
  })
  