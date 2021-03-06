import { connect } from 'react-redux';
import { fetchList } from '../actions';
import List from '../components/List';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  list: state.list.list,
  title: state.list.title,
  id: state.list.id,
  loading: state.list.isFetching,
})

const mapDispatchToProps = dispatch => ({
  getList: (id) => {
      dispatch(fetchList(id))
  }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(List))
