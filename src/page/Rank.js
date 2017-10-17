import React, { Component } from 'react';
import RankList from '../containers/Rank.js';
import Header from '../components/Header.js';
class Rank extends Component {
    render() {
      return (
        <div>
            <Header title="排行榜"/>
            <RankList />
        </div>
      );
    }
  }

  export default Rank;
