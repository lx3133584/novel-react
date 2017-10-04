import React, { Component } from 'react';
import { Toast, List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import AccountInput from './AccountInput.js';
class Login extends Component {
  constructor() {
    super()
    this.state = {
      account: '',
      password: ''
    }
    this.onAccountChange = this.onAccountChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onAccountChange(value) {
    this.setState({account: value})
  }
  onPasswordChange(value) {
    this.setState({password: value})
  }
  onSubmit() {
    const {account, password} = this.state
    if(!account && !password) return
    this.props.onLogin(account, password).then(res => {
      console.log(res)
      if (!res.status) return
      Toast.info('登陆成功', 1)
      localStorage.setItem('TOKEN', 'Bearer ' + res.token)
      this.props.history.push('/My')
    })
  }
    render() {
        return (
          <div>
            <List>
            <AccountInput onChange={this.onAccountChange} value={this.state.account} />
            <InputItem
              type="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
              placeholder="请输入密码"
            >密码</InputItem>
          </List>
          <WhiteSpace size="xl" />
          <WingBlank>
            <Button type="primary" loading onClick={this.onSubmit}>登陆</Button>
          </WingBlank>
          </div>
          
        );
    }
}

export default Login
