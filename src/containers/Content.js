import { connect } from 'react-redux';
import { fetchContent, updateOneBook } from '../actions';
import Content from '../components/Content';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let content = state.content
  let bookshelf = state.bookshelf
  let uid = content.params.category + content.params.ids
  let {cur, total, title, first_id} = content
  let book = cur && bookshelf.list.indexOf(uid) !== -1 ? {...bookshelf.data[uid], cur: bookshelf.data[uid].cur && cur < bookshelf.data[uid].cur ? bookshelf.data[uid].cur : cur, total, first_id} : null
  return {
    content: content.content,
    title,
    cur,
    total,
    first_id,
    loading: content.isFetching,
    book,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getContent: (category, ids, id) => {
        dispatch(fetchContent(category, ids, id))
    },
    updateReadProgress: (book) => {
      dispatch(updateOneBook(book))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content))