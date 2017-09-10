import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
export default class extends Component {
    constructor(props) {
        super(props);
        this.itemMap = [
            {title: '加入书架', icon: '049bookshelf', handler: this.add.bind(this)},
            {title: '快速阅读', icon: 'book', handler: this.read.bind(this)},
            {title: '查看目录', icon: 'list', handler: this.list.bind(this)},
        ]
    }
    add() {

    }
    read() {
        let params = this.props.match.params
        this.props.history.push(`/content/${params.category}/${params.ids}`)
    }
    list() {
        let params = this.props.match.params
        this.props.history.push(`/list/${params.category}/${params.ids}`)
    }
    renderItem({title, icon, handler}) {
        let Icon = () => <i className={"iconfont icon-" + icon} style={{fontSize:'0.44rem'}} />
        return (
            <TabBar.Item
            title={title}
            key={icon}
            icon={<Icon />}
            selectedIcon={<Icon />}
            onPress={handler}
        />
        )
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
            {this.itemMap.map(item => this.renderItem(item))}
            </TabBar>
        );
    }
}
