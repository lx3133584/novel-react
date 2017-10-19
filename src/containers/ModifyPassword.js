import { connect } from 'react-redux';
import { fetchModifyPassword } from '../actions';
import Edit from '../components/Edit';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = dispatch => ({
    save(oldPassword, newPassword, newPassword2) {
        return dispatch(fetchModifyPassword(oldPassword, newPassword, newPassword2))
    },
})

export default withRouter(connect(
    null,
    mapDispatchToProps
)(Edit))
