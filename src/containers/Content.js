import { connect } from 'react-redux';
import { fetchContent } from '../actions';
import Content from '../components/Content';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.content.content,
    title: state.content.title,
    loading: state.content.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContent: (category, ids, id) => {
        dispatch(fetchContent(category, ids, id))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content))