import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.location.pathname
        };
        this.itemMap = [
            {path: '/', title: '书架', icon: 'bookshelf'},
            {path: '/rank', title: '排行', icon: 'rank'},
            {path: '/search', title: '搜索', icon: 'search'},
            {path: '/my', title: '我的', icon: 'my'},
        ]
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({
                selectedTab: nextProps.location.pathname,
            });
        }
    }
    renderItem({path, title, icon}) {
        let Icon = () => <i className={"iconfont icon-" + icon} style={{fontSize:'0.44rem'}} />
        return (
            <TabBar.Item
            title={title}
            key={icon}
            icon={<Icon />}
            selectedIcon={<Icon />}
            selected={this.state.selectedTab === path}
            onPress={() => {
                this.props.history.push(path)
            }}
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

export default Bar;