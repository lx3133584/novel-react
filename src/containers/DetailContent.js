import { connect } from 'react-redux';
import { fetchDetail } from '../actions';
import DetailContent from '../components/DetailContent';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.detail.result || {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetail: (category, ids) => {
        dispatch(fetchDetail(category, ids))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailContent))