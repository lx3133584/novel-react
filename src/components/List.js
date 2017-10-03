import React, { Component } from 'react';
import { List, ActivityIndicator } from 'antd-mobile';
export default class extends Component {
    componentDidMount() {
        let {id} = this.props.match.params
        this.props.getList(id)
        console.log(this)
    }
    goContent(num) {
        let _this = this
        return () => {
            let {id} = _this.props.match.params
            _this.props.history.push({
                pathname: `/content/${id}/${num}`
            })
        }
    }
    render() {
        let listData = this.props.list
        return (
            <div>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <List renderHeader={() => this.props.title}>
                    {listData.map(item => <List.Item arrow="horizontal" key={item._id} onClick={this.goContent(item.number)}>{item.title}</List.Item>)}
                </List>
            </div>
        );
    }
}
