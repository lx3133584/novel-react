import React, { Component } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
class Search extends Component {
    render() {
      return (
          <SearchBar placeholder="搜索" autoFocus={true} />
      );
    }
  }
  
  export default Search;