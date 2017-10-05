import React, { Component } from 'react';
import { ActivityIndicator } from 'antd-mobile';

const tipsStyle = { fontSize: '0.2rem', marginBottom: '0.1rem' }
const picStyle = {
    height: '2rem',
    width: '25%',
    margin: '0 0.2rem',
    border: '1px solid #333',
    boxShadow: '5px 5px 10px #999',
    textAlign: 'center',
    borderRadius: '5px'
}
export default class extends Component {
    componentDidMount() {
        console.log(this)
        let {id, name, url} = this.props.match.params
        this.props.getDetail(id, name, decodeURIComponent(url))
    }
    render() {
        let detail = this.props.detail
        return (
            <div>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                {Object.keys(detail).length && <div><div style={{ display: 'flex', padding: '0.8rem 8%', color: '#333' }}>
                    <div style={picStyle}>
                        <img style={{ width: '100%', height: '100%' }} src={detail.img} alt="暂无封面" />
                    </div>
                    <div style={{ width: '70%', marginLeft: '5%' }}>
                        <div style={{ ...tipsStyle, fontSize: '0.3rem' }}>{detail.name}</div>
                        <div style={{ color: '#a4a4a4', marginBottom: '0.2rem' }}>{detail.author}</div>
                        <div style={tipsStyle}>章节数: {detail.countChapter}</div>
                        <div style={tipsStyle}>最后更新时间: {detail.updateTime}</div>
                        <div style={tipsStyle}>最新章节: {detail.lastChapterTitle}</div>
                    </div>
                </div>
                <div style={{ color: '#999', background: '#fff', padding: '1em' }}>
                    <span style={{ fontSize: '0.3rem', color: '#333' }}>内容简介:</span>
                    <span style={{ fontSize: '0.3rem'}} dangerouslySetInnerHTML={{__html: detail.introduction}}></span>
                </div></div>}
            </div>
        );
    }
}
