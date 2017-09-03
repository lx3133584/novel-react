import { connect } from 'react-redux';
import { fetchSearch, saveSearchKeyword } from '../actions';
import { SearchBar } from 'antd-mobile';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (keyword) => {
        dispatch(saveSearchKeyword(keyword))
        dispatch(fetchSearch(keyword, 0))
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
  )(SearchBar)