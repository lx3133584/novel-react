import { connect } from 'react-redux';
import { addOneBook } from '../actions';
import DetailTabBar from '../components/DetailTabBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.detail.result,
        list: state.bookshelf.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (data) => {
            dispatch(addOneBook(data))
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTabBar))