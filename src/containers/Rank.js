import { connect } from 'react-redux';
import { fetchRank } from '../actions';
import Rank from '../components/Rank';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  rank: state.rank.results,
  loading: state.rank.isFetching,
})

const mapDispatchToProps = dispatch => ({
  getRank: () => {
      dispatch(fetchRank())
  }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Rank))
