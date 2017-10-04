import React, { Component } from 'react';
import { SegmentedControl, InputItem, WingBlank, WhiteSpace, List } from 'antd-mobile';
class AccountInput extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  onTabChange(e) {
    this.setState({ index: e.nativeEvent.selectedSegmentIndex })
  }
  render() {
    return (
      <List>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <SegmentedControl values={['手机号', '邮箱']} selectedIndex={this.state.index} onChange={this.onTabChange.bind(this)} />
        </WingBlank>
        <WhiteSpace size="lg" />
        {this.state.index === 0 && <InputItem
          value={this.props.value}
          onChange={this.props.onChange.bind(this)}
          type="phone"
          clear
          placeholder="请输入手机号"
        >手机号</InputItem>}
        {this.state.index === 1 && <InputItem
          value={this.props.value}
          onChange={this.props.onChange.bind(this)}
          type="email"
          clear
          placeholder="请输入邮箱地址"
        >邮箱</InputItem>}

      </List>
    );
  }
}

export default AccountInput
