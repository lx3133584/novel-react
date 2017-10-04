import { connect } from 'react-redux';
import { fetchSearch } from '../actions';
import Bookshelf from '../components/Bookshelf';

const mapStateToProps = (state, ownProps) => ({
  data: state.search.results,
  count: state.search.count,
  isLoading: state.search.isFetching,
  keyword: state.search.keyword,
})

const mapDispatchToProps = dispatch => ({
  getData: (pageNo, keyword) => {
    dispatch(fetchSearch(keyword, pageNo))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bookshelf)