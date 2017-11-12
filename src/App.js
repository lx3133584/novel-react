import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {initConfig, initToken} from './actions';
import Home from './page/Home.js';
import Rank from './page/Rank.js';
import Search from './page/Search.js';
import My from './page/My.js';
import EditName from './page/EditName.js';
import ModifyPassword from './page/ModifyPassword.js';
import Login from './page/Login.js';
import Register from './page/Register.js';
import Detail from './page/Detail.js';
import Content from './page/Content.js';
import List from './page/List.js';
import TabBar from './components/TabBar.js';
import './App.css';

const win = window;
const isNotProduction = process.env.NODE_ENV !== 'production';

if (isNotProduction) {
  const Perf = require('react-addons-perf');
  win.Perf = Perf;
}

const middleware = [ thunk ]

export const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware),
  (win && win.devToolsExtension && isNotProduction) ? win.devToolsExtension() : (f) => f)
)

class App extends Component {
  componentDidMount() {
    store.dispatch(initConfig())
    store.dispatch(initToken())
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
              <Route path="/my" exact component={My}/>
              <Route path="/my/edit_name/:name?" component={EditName}/>
              <Route path="/my/modify_password" component={ModifyPassword}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/detail/:id/:name?/:url?" component={Detail}/>
              <Route path="/content/:id/:num" component={Content}/>
              <Route path="/list/:id" component={List}/>
            </Switch>
            <Switch>
              <Route path="/" exact component={TabBar}/>
              <Route path="/rank" component={TabBar}/>
              <Route path="/search" component={TabBar}/>
              <Route path="/my" exact component={TabBar}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
