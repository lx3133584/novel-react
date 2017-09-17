import React, { Component } from 'react';
import ReaderBookshelf from '../containers/ReaderBookshelf.js';
import Header from '../components/Header.js';
class Home extends Component {
    render() {
      return (
        <div>
            <Header title="我的书架"/>
            <ReaderBookshelf />
        </div>
      );
    }
  }
  
  export default Home;