import { connect } from 'react-redux';
import { fetchContent } from '../actions';
import DetailTabBar from '../components/DetailTabBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        result: state
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
)(DetailTabBar))