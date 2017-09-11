import React, { Component } from 'react';
import { List, ActivityIndicator } from 'antd-mobile';
export default class extends Component {
    componentDidMount() {
        let params = this.props.match.params
        this.props.getList(params.category, params.ids)
        console.log(this)
    }
    goContent(id) {
        let _this = this
        return () => {
            let params = _this.props.match.params
            _this.props.history.push({
                pathname: `/content/${params.category}/${params.ids}`,
                search: `?id=${id}`
            })
        }
    }
    render() {
        let listData = this.props.list
        return (
            <div>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <List renderHeader={() => this.props.title}>
                    {listData.map(item => <List.Item arrow="horizontal" key={item.id} onClick={this.goContent(item.id)}>{item.title}</List.Item>)}
                </List>
            </div>
        );
    }
}
