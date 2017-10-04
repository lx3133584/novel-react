import React, { Component } from 'react';
import { Toast, List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import AccountInput from './AccountInput.js';
class Register extends Component {
  constructor() {
    super()
    this.state = {
      account: '',
      password: '',
      password2: '',
      name: '',
    }
    this.onAccountChange = this.onAccountChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onPassword2Change = this.onPassword2Change.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onAccountChange(value) {
    this.setState({account: value})
  }
  onPasswordChange(value) {
    this.setState({password: value})
  }
  onPassword2Change(value) {
    this.setState({password2: value})
  }
  onNameChange(value) {
    this.setState({name: value})
  }
  onSubmit() {
    if(!this.state.account
    || !this.state.password
    || !this.state.password2
    || !this.state.name
  ) return
    this.props.onRegister(this.state).then(res => {
      if (!res.status) return
      Toast.info('注册成功', 1)
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
            <InputItem
              type="password"
              value={this.state.password2}
              onChange={this.onPassword2Change}
              placeholder="请再次输入密码"
            >确认密码</InputItem>
            <InputItem
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
              placeholder="请输入昵称"
            >昵称</InputItem>
          </List>
          <WhiteSpace size="xl" />
          <WingBlank>
            <Button type="primary" loading onClick={this.onSubmit}>注册</Button>
          </WingBlank>
          </div>
          
        );
    }
}

export default Register
