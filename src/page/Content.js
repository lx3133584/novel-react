import React, { Component } from 'react';
import Content from '../containers/Content.js';
import ContentTabBar from '../containers/ContentTabBar.js';

export default class ContentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
        this.showPopup = this.showPopup.bind(this)
    }
    showPopup() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div>
                {this.state.isShow && <ContentTabBar showPopup={this.showPopup}/>}
                <Content showPopup={this.showPopup}/>
            </div>
        );
    }
}
