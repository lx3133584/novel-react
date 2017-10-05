import React, { Component } from 'react';
import { WingBlank, ActivityIndicator, Pagination } from 'antd-mobile';
export default class Content extends Component {
    componentDidMount() {
        let {num} = this.props.match.params
        this.goNext(+num)
    }
    goNext(next) {
        let {id, num} = this.props.match.params
        this.props.getContent(id, next).then(res => {
            if (!res.status) return
            this.props.updateProgress(id, next)
        }) 
    }
    render() {
        return (
            <div style={{ padding: '0.5em 0', backgroundColor: '#fff' }}>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <h2 style={{ fontSize: this.props.fontSize * 1.6 + 'px', margin: '0', padding: '0.5em 0', textAlign: 'center' }}>{this.props.data.title}</h2>
                <WingBlank>
                    <p onClick={this.props.showPopup} style={{minHeight: '80vh', fontSize: this.props.fontSize + 'px', lineHeight: this.props.lineHeight, }} dangerouslySetInnerHTML={{ __html: this.props.data.content }}></p>
                    <Pagination total={this.props.total}
                        className="custom-pagination-with-icon"
                        current={this.props.data.number}
                        onChange={this.goNext.bind(this)}
                        locale={{
                            prevText: (<span className="arrow-align">上一页</span>),
                            nextText: (<span className="arrow-align">下一页</span>),
                        }}
                    />
                </WingBlank>
            </div>
        );
    }
}
