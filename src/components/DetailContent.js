import React, { Component } from 'react';
import { List, WhiteSpace } from 'antd-mobile';
export default class extends Component {
    componentDidMount() {
        let params = this.props.match.params
        this.props.getDetail(params.category, params.ids)
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
        let detail = this.props.detail
        console.log(detail)
        return (
            <div>
                <div style={{ display: 'flex', padding: '0.8rem 8%', color: '#333' }}>
                    <div style={{
                        height: '2rem',
                        width: '20%',
                        margin: '0 0.2rem',
                        border: '1px solid #333',
                        boxShadow: '5px 5px 10px #999',
                        textAlign: 'center',
                        borderRadius: '5px'
                    }}>
                        <img style={{ width: '100%', height: '100%' }} src={this.props.location.search.replace('?pic=', '')} alt="Cover" />
                    </div>
                    <div style={{ width: '70%', marginLeft: '5%' }}>
                        <div style={{ fontSize: '0.3rem', marginBottom: '0.1rem' }}>{detail.title}</div>
                        <div style={{ color: '#a4a4a4', marginBottom: '0.2rem' }}>{detail.author}</div>
                        <div style={{ fontSize: '0.2rem', marginBottom: '0.1rem' }}>分类: {detail.category_name}</div>
                        <div style={{ fontSize: '0.2rem', marginBottom: '0.1rem' }}>状态: {detail.state}</div>
                        <div style={{ fontSize: '0.2rem', marginBottom: '0.1rem' }}>最后更新时间: {detail.update_time}</div>
                    </div>
                </div>
                <div style={{ color: '#999', background: '#fff', padding: '1em' }}>
                    <span style={{ fontSize: '0.3rem', color: '#333' }}>内容简介:</span>
                    <span style={{ fontSize: '0.3rem'}} dangerouslySetInnerHTML={{__html: detail.introduction}}></span>
                </div>
                <WhiteSpace />
                <List renderHeader={() => '最新章节'}>
                    {detail.new_chaptar_list && detail.new_chaptar_list.map(item => <List.Item arrow="horizontal" key={item.id} onClick={this.goContent(item.id)}>{item.title}</List.Item>)}
                </List>
            </div>
        );
    }
}
