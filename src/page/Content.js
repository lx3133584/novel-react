import React, { Component } from 'react';
import Content from '../containers/Content.js';
import ContentTabBar from '../containers/ContentTabBar.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Content.css';

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
                <ReactCSSTransitionGroup
                    transitionName="slide"
                    component="div"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {this.state.isShow && <ContentTabBar showPopup={this.showPopup}/>}
                </ReactCSSTransitionGroup>
                <Content showPopup={this.showPopup}/>
            </div>
        );
    }
}
