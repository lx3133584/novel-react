import { connect } from 'react-redux';
import { fetchEditName } from '../actions';
import Edit from '../components/Edit';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = dispatch => ({
    save(name) {
        return dispatch(fetchEditName(name))
    },
})

export default withRouter(connect(
    null,
    mapDispatchToProps
)(Edit))
