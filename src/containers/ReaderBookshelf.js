import { connect } from 'react-redux';
import { fetchRemoveBook, fetchGetBookshelf } from '../actions';
import ReaderBookshelf from '../components/ReaderBookshelf';

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.bookshelf.list,
    }
}

const mapDispatchToProps = dispatch => ({
    getBookshelf() {
        return dispatch(fetchGetBookshelf())
    },
    removeBook(id) {
        return dispatch(fetchRemoveBook(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReaderBookshelf)