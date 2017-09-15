import { connect } from 'react-redux';
import { removeOneBook } from '../actions';
import ReaderBookshelf from '../components/ReaderBookshelf';

const mapStateToProps = (state, ownProps) => {
    let map = []
    let bookshelf = state.bookshelf
    for (let uid of bookshelf.list) {
        map.push(bookshelf.data[uid])
    }
    return {
        map,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeBook: (id) => {
            dispatch(removeOneBook(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReaderBookshelf)