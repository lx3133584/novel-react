import React, { Component } from 'react';
import { WingBlank, ActivityIndicator, Pagination } from 'antd-mobile';
export default class Content extends Component {
    componentDidMount() {
        let params = this.props.match.params
        this.props.getContent(params.category, params.ids, this.props.location.search.replace('?id=', ''))
        this.updateReadProgress(this.props.book)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.cur !== this.props.cur) {
            this.updateReadProgress(nextProps.book)
        }
    }
    updateReadProgress(book) {
        book && this.props.updateReadProgress(book)
    }
    goNext(next) {
        let params = this.props.match.params
        this.props.getContent(params.category, params.ids, +this.props.first_id + next)
    }
    render() {
        return (
            <div style={{ padding: '0.5em 0', backgroundColor: '#fff' }}>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                <h2 style={{ margin: '0', padding: '0.5em 0', textAlign: 'center' }}>{this.props.title}</h2>
                <WingBlank>
                    <p dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
                    <Pagination total={this.props.total}
                        className="custom-pagination-with-icon"
                        current={this.props.cur - 1}
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
