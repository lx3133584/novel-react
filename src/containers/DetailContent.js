import { connect } from 'react-redux';
import { fetchDetail } from '../actions';
import DetailContent from '../components/DetailContent';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.detail.result,
    loading: state.detail.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetail: (id, name, url) => {
        dispatch(fetchDetail(id, name, url))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailContent))