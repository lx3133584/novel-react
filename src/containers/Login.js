import { connect } from 'react-redux';
import { fetchLogin } from '../actions';
import Login from '../components/Login';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  onLogin: (account, password) => {
    return dispatch(fetchLogin(account, password))
  }
})

export default withRouter(connect(
    null,
    mapDispatchToProps
  )(Login))