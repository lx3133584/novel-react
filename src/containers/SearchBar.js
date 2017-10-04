import { connect } from 'react-redux';
import { fetchSearch, saveSearchKeyword } from '../actions';
import { SearchBar } from 'antd-mobile';

const mapDispatchToProps = dispatch => ({
  onSubmit: (keyword) => {
      if(!keyword) return
      dispatch(saveSearchKeyword(keyword))
      dispatch(fetchSearch(keyword, 0))
  }
})

export default connect(
    null,
    mapDispatchToProps
  )(SearchBar)