import { connect } from 'react-redux';
import ContentTabBar from '../components/ContentTabBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.content.title,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: (category, ids, id) => {
        //
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContentTabBar))