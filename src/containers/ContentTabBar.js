import { connect } from 'react-redux';
import ContentTabBar from '../components/ContentTabBar';
import { changeFontSize, changeLineHeight, changeBackground } from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    title: state.content.title,
    fontSize: state.config.fontSize,
    lineHeight: state.config.lineHeight,
    background: state.config.background,
})

const mapDispatchToProps = dispatch => ({
  changeFontSize: (value) => {
      dispatch(changeFontSize(value))
  },
  changeLineHeight: (value) => {
      dispatch(changeLineHeight(value))
  },
  changeBackground: (value) => {
      dispatch(changeBackground(value))
  },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContentTabBar))