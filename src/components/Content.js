import React, { Component } from 'react';
import { WingBlank, ActivityIndicator } from 'antd-mobile';
export default class extends Component {
    componentDidMount() {
        let params = this.props.match.params
        this.props.getContent(params.category, params.ids, this.props.location.search.replace('?id=', ''))
        console.log(this)
    }
    render() {
        return (
            <div style={{padding: '0.5em 0', backgroundColor: '#fff'}}>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..."/>}
                <h2 style={{margin: '0', padding: '0.5em 0', textAlign: 'center'}}>{this.props.title}</h2>
                <WingBlank>
                    <p dangerouslySetInnerHTML={{__html: this.props.content}}></p>
                </WingBlank>
            </div>
        );
    }
}
