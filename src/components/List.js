import React, { Component } from 'react';
import { List, ActivityIndicator, Button } from 'antd-mobile';
const itemStyle = {
  height: '0.88rem',
  lineHeight: '0.88rem',
  padding: '0.14rem 0',
  margin: '0 0.3rem',
  fontSize: '0.34rem',
  color: '#000',
  borderBottom: '1px solid #ddd',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}
class Tip extends Component {
  constructor() {
    super()
    this.state = {
      reverse: false
    }
    this.flip = this.flip.bind(this)
  }
  flip() {
    const {reverse} = this.state
    const {flipList} = this.props
    flipList()
    this.setState({reverse: !reverse})
  }
  render() {
    const {len} = this.props
    const {reverse} = this.state
    return <List.Item
        extra={<Button type="primary" inline size="small" onClick={this.flip}>{!reverse ? '正序' : '倒序'}</Button>}
      >共{len}章</List.Item>
  }

}
class ListItem extends Component {
  constructor(props) {
    super(props)
    const {num} = this.props.match.params;
    this.state = {
      active: props.item.number === +num
    }
  }
  goContent() {
    const {showList, showTabBar} = this.props;
    const {id} = this.props.match.params;
    const {number} = this.props.item;
    if (showList) {
      showList(false)
      showTabBar(false)
      this.props.history.replace(`/content/${id}/${number}`)
    } else {
      this.props.history.push(`/content/${id}/${number}`)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.num !== this.props.match.params.num) {
      this.setState({active: nextProps.item.number === +nextProps.match.params.num})
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item === this.props.item
      && nextState.active === this.state.active) return false
    return true
  }
  render() {
    const {_id, number, title} = this.props.item
    const {getActiveItem} = this.props
    const {active} = this.state
    return <div
      ref={active && getActiveItem}
      style={{...itemStyle, color: active ? '#108ee9' : '#000'}}
      key={_id}
      onClick={this.goContent.bind(this)}>
        {number + 1}. {title}
      </div>
  }
}
export default class ListCompent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        reverseList: props.list
      }
      this.flipList = this.flipList.bind(this)
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.list !== this.props.list) {
        this.setState({reverseList: nextProps.list})
      }
      nextProps.isListShow && this.scrollToItem()
    }
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.id === id || this.props.getList(id)
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.list === this.props.list
        && nextState.reverseList === this.state.reverseList
        && nextProps.match.params.num === this.props.match.params.num) return false
      return true
    }
    flipList() {
      const {reverseList} = this.state;
      let newList = [...reverseList];
      newList.reverse();
      this.setState({reverseList: newList});
    }
    scrollToItem() {
      if (!this.listDom || !this.itemDom) return;
      const top = this.itemDom.offsetTop || 0;
      this.listDom.parentElement.scrollTo(0, top);
    }
    render() {
        const {reverseList} = this.state
        const Item = item => <ListItem
          {...this.props}
          key={item.number}
          getActiveItem={dom => this.itemDom = dom}
          item={item} />
        return (
            <div style={{backgroundColor: '#fff'}} ref={dom => this.listDom = dom}>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <Tip len={reverseList.length} flipList={this.flipList}></Tip>
                <List renderHeader={() => this.props.title}>
                    {reverseList.map(Item)}
                </List>
            </div>
        );
    }
}
