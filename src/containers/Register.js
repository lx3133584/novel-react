import { connect } from 'react-redux';
import { fetchRegister } from '../actions';
import Register from '../components/Register';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  onRegister: (user) => {
    return dispatch(fetchRegister(user))
  }
})

export default withRouter(connect(
    null,
    mapDispatchToProps
  )(Register))