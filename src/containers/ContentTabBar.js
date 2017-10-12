import { connect } from 'react-redux';
import ContentTabBar from '../components/ContentTabBar';
import { changeFontSize, changeLineHeight, changeTheme, fetchAddBook } from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    title: state.content.data.title,
    fontSize: state.config.fontSize,
    lineHeight: state.config.lineHeight,
    color: state.config.color,
    background: state.config.background,
})

const mapDispatchToProps = dispatch => ({
  add (id) {
      return dispatch(fetchAddBook(id))
  },
  changeFontSize: (value) => {
      dispatch(changeFontSize(value))
  },
  changeLineHeight: (value) => {
      dispatch(changeLineHeight(value))
  },
  changeTheme: ({background, color}) => {
      dispatch(changeTheme({background, color}))
  },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContentTabBar))
