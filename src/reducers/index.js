import { combineReducers } from 'redux';
import search from './search'
import detail from './detail'
import content from './content'
import list from './list'
export default combineReducers({
    search,
    detail,
    content,
    list,
  })
  