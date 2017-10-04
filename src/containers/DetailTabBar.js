import { connect } from 'react-redux';
import { fetchAddBook } from '../actions';
import DetailTabBar from '../components/DetailTabBar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    id: state.detail.result._id,
    isAdd: state.detail.result.join,
})


const mapDispatchToProps = dispatch => ({
    add: (id) => {
        dispatch(fetchAddBook(id))
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailTabBar))