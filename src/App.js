import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import {initBookshelf, initConfig} from './actions';
import Home from './page/Home.js';
import Rank from './page/Rank.js';
import Search from './page/Search.js';
import My from './page/My.js';
import Detail from './page/Detail.js';
import Content from './page/Content.js';
import List from './page/List.js';
import TabBar from './components/TabBar.js';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

class App extends Component {
  componentDidMount() {
    store.dispatch(initBookshelf())
    store.dispatch(initConfig())
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/rank" component={Rank}/>
              <Route path="/search" component={Search}/>
              <Route path="/my" component={My}/>
              <Route path="/detail/:id/:name?/:url?" component={Detail}/>
              <Route path="/content/:id/:num" component={Content}/>
              <Route path="/list/:id" component={List}/>
            </Switch>
            <Switch>
              <Route path="/" exact component={TabBar}/>
              <Route path="/rank" component={TabBar}/>
              <Route path="/search" component={TabBar}/>
              <Route path="/my" component={TabBar}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
