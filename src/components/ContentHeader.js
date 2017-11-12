import React, {PureComponent} from 'react';
import Header from './Header.js';
import Icon from './Icon.js';
import {
  Popover,
  Toast
} from 'antd-mobile';
const Item = Popover.Item;

const fixedStyle = {
  position: 'fixed',
  width: '100%'
}

export default class ContentHeader extends PureComponent {
  constructor(props) {
    super(props)
    this.ellipsisMap = [
      {
        icon: <Icon iconfont="addbookshelf" fontSize={0.4} />,
        text: '加入书架',
        handler: this.add.bind(this)
      }, {
        icon: <Icon iconfont="detail" fontSize={0.4} />,
        text: '书籍详情',
        handler: this.detail.bind(this)
      }, {
        icon: <Icon iconfont="bookshelf" fontSize={0.4} />,
        text: '返回书架',
        handler: () => props.history.push('/')
      },
    ];
    this.state = {
      ellipsis: false
    };
    this.ellipsis = this.ellipsis.bind(this)
  }
  add() {
    const {id} = this.props.match.params;
    this.ellipsis()
    this.props.add(id).then(res => {
      if (!res.status) return;
      Toast.info('加入书架成功', 1);
    })
  }
  detail() {
    const {id} = this.props.match.params
    this.props.history.push(`/detail/${id}`)
  }
  ellipsis() {
    this.setState({ellipsis: !this.state.ellipsis})
  }
  onSelect({props}) {
    props.onClick()
  }
  render() {
    return <div className="top" style={fixedStyle}>
      <Header title={this.props.title}
        rightContent={
          <Popover
            visible={this.state.ellipsis}
            onSelect={this.onSelect}
            onVisibleChange={this.ellipsis}
            overlay={this.ellipsisMap.map(item => <Item
              icon={item.icon}
              onClick={item.handler}
              key={item.text}>
              {item.text}</Item>)}>
          <Icon iconfont="ellipsis" handler={this.ellipsis} />
        </Popover>}
        onLeftClick={this.props.history.goBack}/>
    </div>
  }
}
