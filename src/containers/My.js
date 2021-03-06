import { connect } from 'react-redux';
import { fetchInfo, removeToken, fetchUploadAvatar } from '../actions';
import My from '../components/My';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        info: state.user.data,
        token: state.token.token,
    }
}

const mapDispatchToProps = dispatch => ({
    getInfo() {
        return dispatch(fetchInfo())
    },
    removeToken() {
        dispatch(removeToken());
    },
    uploadAvatar(file) {
      return dispatch(fetchUploadAvatar(file))
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(My))
