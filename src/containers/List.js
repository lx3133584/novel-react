import { connect } from 'react-redux';
import { fetchList } from '../actions';
import List from '../components/List';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list.list || [],
    title: state.list.title || '',
    loading: state.list.isFetching || false
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: (category, ids, id) => {
        dispatch(fetchList(category, ids, id))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(List))