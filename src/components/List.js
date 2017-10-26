import React, { Component } from 'react';
import { List, ActivityIndicator, Button } from 'antd-mobile';
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
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.list === this.props.list && nextState.reverseList === this.props.reverseList) return false
      return true
    }
    goContent(num) {
        return () => {
            const {id} = this.props.match.params
            this.props.history.push(`/content/${id}/${num}`)
        }
    }
    flipList() {
      const {reverseList} = this.state;
      let newList = [...reverseList];
      newList.reverse();
      this.setState({reverseList: newList})
    }
    render() {
        const {reverseList} = this.state
        return (
            <div>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <Tip len={reverseList.length} flipList={this.flipList}></Tip>
                <List renderHeader={() => this.props.title}>
                    {reverseList.map(item => <List.Item arrow="horizontal" key={item._id} onClick={this.goContent(item.number)}>{item.title}</List.Item>)}
                </List>
            </div>
        );
    }
}
