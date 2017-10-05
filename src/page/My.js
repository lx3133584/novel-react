import React, { Component } from 'react';
import User from '../containers/My.js';
import Header from '../components/Header.js';
class My extends Component {
    render() {
      return (
        <div>
            <Header title="我的"/>
            <User />
        </div>
      );
    }
  }
  
  export default My;