import React, { Component } from 'react';
import { WingBlank, ActivityIndicator, Pagination } from 'antd-mobile';

export default class Content extends Component {
    componentDidMount() {
        let {num} = this.props.match.params
        this.goNext(+num)
    }
    componentWillReceiveProps(nextProps) {
      const {num} = nextProps.match.params
      if (num !== this.props.match.params.num) {
        this.goNext(+num)
      }
    }
    goNext(next) {
        const {id} = this.props.match.params
        this.props.getContent(id, next).then(res => {
            if (!res.status) return
            if (this.props.token) this.props.updateProgress(id, next)
        })
    }
    render() {
      const {background, color, lineHeight, loading, fontSize, data, total, showTabBar} = this.props
        return (
            <div style={{ background, color }} className="content-warp">
                {loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <h2 style={{ fontSize: fontSize * 0.1 + 'rem' }} className="content-title">{data.title}</h2>
                <WingBlank>
                    <p onClick={showTabBar} style={{minHeight: '80vh', fontSize: fontSize * 0.08 + 'rem', lineHeight: lineHeight, }} dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    <Pagination total={total}
                        className="custom-pagination-with-icon"
                        current={data.number}
                        onChange={this.goNext.bind(this)}
                        locale={{
                            prevText: (<span className="arrow-align">上一章</span>),
                            nextText: (<span className="arrow-align">下一章</span>),
                        }}
                    />
                </WingBlank>
            </div>
        );
    }
}
