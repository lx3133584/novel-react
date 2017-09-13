import { connect } from 'react-redux';
// import { fetchSearch } from '../actions';
import Bookshelf from '../components/Bookshelf';

const mapStateToProps = (state, ownProps) => {
    let list = []
    console.log(state)
    let bookshelf = state.bookshelf
    for (let uid of bookshelf.list) {
        list.push(bookshelf.data[uid])
    }
    return {
        data: list,
        count: list.length,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (keyword, pageNo) => {
            // 
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bookshelf)