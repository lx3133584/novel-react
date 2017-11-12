import { connect } from 'react-redux';
import ContentHeader from '../components/ContentHeader';
import { fetchAddBook } from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    title: state.content.data.title,
})

const mapDispatchToProps = dispatch => ({
  add (id) {
      return dispatch(fetchAddBook(id))
  },
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContentHeader))
