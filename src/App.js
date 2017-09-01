import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Rank from './components/Rank.js';
import Search from './components/Search.js';
import My from './components/My.js';
import TabBar from './components/TabBar.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rank" component={Rank}/>
            <Route path="/search" component={Search}/>
            <Route path="/my" component={My}/>
          </Switch>
          <Switch>
            <Route path="/" exact component={TabBar}/>
            <Route path="/rank" component={TabBar}/>
            <Route path="/search" component={TabBar}/>
            <Route path="/my" component={TabBar}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
