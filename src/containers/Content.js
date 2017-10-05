import { connect } from 'react-redux';
import { fetchContent, updateProgress } from '../actions';
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
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getContent: (id, num) => {
      return dispatch(fetchContent(id, num))
  },
  updateProgress: (id, num) => {
      dispatch(updateProgress(id, num))
  },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content))