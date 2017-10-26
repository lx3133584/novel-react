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
export default class extends Component {
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
    }
    componentDidMount() {
        let {id} = this.props.match.params
        this.props.id === id || this.props.getList(id)
        this.scrollToItem()
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.list === this.props.list && nextState.reverseList === this.props.reverseList) return false
      return true
    }
    goContent(num) {
        return () => {
            const {id} = this.props.match.params
            const {showList, showTabBar} = this.props
            if (showList) {
              showList()
              showTabBar()
              this.props.history.replace(`/content/${id}/${num}`)
            } else {
              this.props.history.push(`/content/${id}/${num}`)
            }
        }
    }
    flipList() {
      const {reverseList} = this.state;
      let newList = [...reverseList];
      newList.reverse();
      this.setState({reverseList: newList})
    }
    scrollToItem() {
      const {num} = this.props.match.params
      if(!num) return
      const top = +num > 4 ? this.listDom.children[1].children[1].children[+num - 2].getBoundingClientRect().top : 0
      this.listDom.parentElement.scrollTo(0, top)
    }
    render() {
        const {reverseList} = this.state
        const {num} = this.props.match.params
        const Item = (item) => <div
          style={{...itemStyle, color: +num === item.number ? '#108ee9' : '#000'}}
          key={item._id}
          onClick={this.goContent(item.number)}>
            {item.number + 1}. {item.title}
          </div>
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
