import { connect } from 'react-redux';
import { addOneBook } from '../actions';
import DetailTabBar from '../components/DetailTabBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let data = state.detail.result
    return {
        data,
        isAdd: state.bookshelf.list.indexOf(data.category + data.ids) !== -1
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