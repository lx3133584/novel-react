import { connect } from 'react-redux';
import { fetchDetail } from '../actions';
import DetailTabBar from '../components/DetailTabBar';

const mapStateToProps = (state, ownProps) => {
  return {
    result: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (category, ids) => {
        dispatch(fetchDetail(category, ids))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailTabBar)