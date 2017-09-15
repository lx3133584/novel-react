import React, { Component } from 'react';
import Header from '../components/Header.js';
import { Grid } from 'antd-mobile';
export default class ContentTabBar extends Component {
    constructor(props) {
        super(props)
        let icon = (iconfont) => <i className={`iconfont icon-${iconfont}`} style={{fontSize: '0.6rem'}}></i>
        this.map = [
            // {
            //     icon: icon('addbookshelf'),
            //     text: '加入书架',
            //     handler: this.add.bind(this),
            // },
            {
                icon: icon('list'),
                text: '查看目录',
                handler: this.list.bind(this)
            },
            {
                icon: icon('detail'),
                text: '书籍详情',
                handler: this.detail.bind(this)
            },
        ]
    }
    add() {
        // if (this.props.isAdd) return
        // let data = this.props.data
        // this.props.add({
        //     ...data,
        //     uid: data.category + data.ids,
        //     pic: this.props.location.search.replace('?pic=', '')
        // })
        // Toast.success('加入书架成功', 1);
    }
    list() {
        let params = this.props.match.params
        this.props.history.push(`/list/${params.category}/${params.ids}`)
    }
    detail() {
        let params = this.props.match.params
        this.props.history.push(`/detail/${params.category}/${params.ids}`)
    }
    render() {
        return (
            <div>
                <div style={{position: 'fixed', width: '100%', top: 0}}>
                    <Header title={this.props.title} onLeftClick={this.props.history.goBack}/>
                </div>
                <div style={{position: 'fixed', width: '100%', bottom: 0, boxShadow: ' #4b4b4b 0 0 0.2rem'}}>
                    <Grid data={this.map} columnNum={3} onClick={item => item.handler()}/>
                </div>
            </div>
            
        );
    }
}
