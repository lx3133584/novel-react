import React, { Component } from 'react';
import Bookshelf from '../containers/Bookshelf.js';
import SearchBar from '../containers/SearchBar.js';
import './Search.css'
class Search extends Component {
    render() {
      return (
        <div style={{paddingTop: '0.88rem'}}>
          <SearchBar
            placeholder="搜索" 
            autoFocus={true} />
          <Bookshelf />
        </div>
      );
    }
  }
  
  export default Search;