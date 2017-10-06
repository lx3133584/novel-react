import { connect } from 'react-redux';
import { fetchAddBook, fetchDetail, markAddBook } from '../actions';
import DetailTabBar from '../components/DetailTabBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    id: state.detail.result._id,
    isAdd: state.detail.result.join,
})


const mapDispatchToProps = dispatch => ({
    add (id) {
        return dispatch(fetchAddBook(id))
    },
    getDetail (id, name, url) {
        dispatch(fetchDetail(id, name, url))
    },
    markAdded () {
        dispatch(markAddBook())
    },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTabBar))