import React, { Component } from 'react';
import Content from '../containers/Content.js';
import ContentTabBar from '../containers/ContentTabBar.js';
export default class ContentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowHeader: false
        }
        this.switchShowHeader = this.switchShowHeader.bind(this)
    }
    switchShowHeader() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }
    render() {
        return (
            <div>
                {this.state.isShowHeader && <ContentTabBar switchShowHeader={this.switchShowHeader}/>}
                <Content switchShowHeader={this.switchShowHeader}/>
            </div>
        );
    }
}
