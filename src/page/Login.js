import React, { Component } from 'react';
import Login from '../containers/Login.js';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';
const registerStyle = {
  float: 'right',
  color: '#108ee9'
}
export default class extends Component {
    render() {
        return (
            <div>
                <Header title="登陆" onLeftClick={this.props.history.goBack}/>
                <Login />
                <WhiteSpace/>
                <WingBlank>
                <Link style={registerStyle} to="/register">没有账号？立即注册</Link>
                </WingBlank>
            </div>
        );
    }
}
