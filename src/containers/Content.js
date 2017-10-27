import { connect } from 'react-redux';
import { fetchContent, updateProgress, fetchList } from '../actions';
import Content from '../components/Content';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.content.data,
    total: state.content.total,
    loading: state.content.isFetching,
    fontSize: state.config.fontSize,
    lineHeight: state.config.lineHeight,
    background: state.config.background,
    color: state.config.color,
    token: state.token.token,
    id: state.list.id,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getContent (id, num) {
      return dispatch(fetchContent(id, num))
  },
  updateProgress (id, num) {
      dispatch(updateProgress(id, num))
  },
  getList (id) {
      dispatch(fetchList(id))
  },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content))
