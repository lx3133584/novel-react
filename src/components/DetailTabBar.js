import React, { Component } from 'react';
import { TabBar, Toast } from 'antd-mobile';
export default class DetailTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemMap: [{
                title: '加入书架',
                icon: 'addbookshelf',
                handler: this.add.bind(this),
                isAdd: this.props.isAdd
            },
            {
                title: '快速阅读',
                icon: 'book',
                handler: this.read.bind(this)
            },
            {
                title: '查看目录',
                icon: 'list',
                handler: this.list.bind(this)
            },
            ]
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAdd !== this.props.isAdd) {
            let itemMap = [...this.state.itemMap]
            itemMap[0].isAdd = nextProps.isAdd
            itemMap[0].title = nextProps.isAdd ? '已加入书架' : '加入书架'
            this.setState({
                itemMap
            })
        }
    }
    add() {
        if (this.props.isAdd) return
        this.props.add(this.props.id).then(res => {
            if (!res.status) return
            this.props.markAdded()
            Toast.info('加入书架成功', 1);
        })
    }
    read() {
        this.props.history.push(`/content/${this.props.id}/0`)
    }
    list() {
        this.props.history.push(`/list/${this.props.id}`)
    }
    renderItem({
        title,
        icon,
        handler,
        isAdd
    }) {
        let Icon = () => < i className={"iconfont icon-" + icon}
            style={{ fontSize: '0.44rem' }} />
        return (<TabBar.Item title={title}
            key={icon}
            icon={<Icon />}
            selected={isAdd}
            selectedIcon={<Icon />}
            onPress={handler} />
        )
    }
    render() {
        return (<TabBar unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white">
            {this.state.itemMap.map(item => this.renderItem(item))}
        </TabBar>
        );
    }
}