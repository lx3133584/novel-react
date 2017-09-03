import { connect } from 'react-redux';
import { fetchSearch } from '../actions';
import Bookshelf from '../components/Bookshelf';

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.results || [],
    count: state.count || 0,
    isLoading: state.isFetching || false,
    keyword: state.keyword || ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (keyword, pageNo) => {
        dispatch(fetchSearch(keyword, pageNo))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bookshelf)