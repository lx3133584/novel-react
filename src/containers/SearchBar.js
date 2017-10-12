import { connect } from 'react-redux';
import { fetchSearch, saveSearchKeyword } from '../actions';
import { SearchBar } from 'antd-mobile';

const mapStateToProps = (state, ownProps) => {
    return {
        autoFocus: true
    }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (keyword) => {
      if(!keyword) return
      dispatch(saveSearchKeyword(keyword))
      dispatch(fetchSearch(keyword, 0))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
