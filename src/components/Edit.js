import React, {Component} from 'react';
import {Toast, InputItem} from 'antd-mobile';
import Header from './Header.js';

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: props.defaultValue
    }
  }
  onChange(value) {
    this.setState({input: value})
  }
  onSubmit() {
    const {input} = this.state
    if (!input) return
    this.props.save(input).then(res => {
      if (!res.status) return
      Toast.info('修改成功', 1)
      this.props.history.push('/my')
    })
  }
  render() {
    const {title} = this.props
    const {input} = this.state
    return (
      <div>
        <Header title={'修改' + title} onLeftClick={this.props.history.goBack} rightContent={<span onClick={this.onSubmit.bind(this)}>完成</span>}/>
        <InputItem
            clear
            placeholder={'请输入' + title}
            value={input}
            onChange={this.onChange.bind(this)}
            autoFocus
          >{title}</InputItem>
      </div>
    );
  }
}
