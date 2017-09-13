import React, {
    Component
} from 'react';
import {
    TabBar
} from 'antd-mobile';
export default class extends Component {
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
            itemMap[0].isAdd = nextProps
            itemMap[0].title = nextProps ? '已加入书架' : '加入书架'
            this.setState({
                itemMap
            })
        }
    }
    add() {
        if(this.props.isAdd) return
        let data = this.props.data
        this.props.add({
            ...data,
            uid: data.category + data.ids,
            pic: this.props.location.search.replace('?pic=', '')
        })
    }
    read() {
        let params = this.props.match.params
        this.props.history.push(`/content/${params.category}/${params.ids}`)
    }
    list() {
        let params = this.props.match.params
        this.props.history.push(`/list/${params.category}/${params.ids}`)
    }
    renderItem({
        title,
        icon,
        handler,
        isAdd
    }) {
        let Icon = () => < i className = {"iconfont icon-" + icon}
        style = {{fontSize: '0.44rem'}}/>
        return ( <TabBar.Item title = {title}
            key = {icon}
            icon = {<Icon/>}
            selected = {isAdd}
            selectedIcon = {<Icon/>}
            onPress = {handler}/>
        )
    }
    render() {
        return ( <TabBar unselectedTintColor = "#949494"
            tintColor = "#33A3F4"
            barTintColor = "white">
            { this.state.itemMap.map(item => this.renderItem(item))} 
            </TabBar>
        );
    }
}