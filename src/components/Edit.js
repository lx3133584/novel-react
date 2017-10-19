import React, {Component} from 'react';
import {Toast, InputItem} from 'antd-mobile';
import Header from './Header.js';

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
    this.onItemsChange = this.onItemsChange.bind(this)
  }
  onItemsChange(index) {
    return (value) => {
      let newItems = [...this.state.items]
      newItems[index].value = value
      this.setState({items: newItems})
    }
  }
  onSubmit() {
    const {items} = this.state
    const params = items.map(item => item.value)

    this.props.save(...params).then(res => {
      if (!res.status) return
      Toast.info('修改成功', 1)
      this.props.history.push('/my')
    })
  }
  render() {
    const {title} = this.props
    const {items} = this.state
    return (
      <div>
        <Header title={'修改' + title} onLeftClick={this.props.history.goBack} rightContent={<span onClick={this.onSubmit.bind(this)}>完成</span>}/>
        {items.map((item, index) => {
          const {title, value, type, placeholder} = item
          return <InputItem
              clear
              placeholder={placeholder || '请输入' + title}
              key={title}
              value={value}
              type={type || 'text'}
              onChange={this.onItemsChange(index)}
              autoFocus
            >{title}</InputItem>
        })}
      </div>
    );
  }
}
