import { connect } from 'react-redux';
import ContentTabBar from '../components/ContentTabBar';
import { changeFontSize, changeLineHeight, changeTheme } from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    fontSize: state.config.fontSize,
    lineHeight: state.config.lineHeight,
    color: state.config.color,
    background: state.config.background,
    list: state.list.list,
})

const mapDispatchToProps = dispatch => ({
  changeFontSize (value) {
      dispatch(changeFontSize(value))
  },
  changeLineHeight (value) {
      dispatch(changeLineHeight(value))
  },
  changeTheme ({background, color}) {
      dispatch(changeTheme({background, color}))
  },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContentTabBar))
