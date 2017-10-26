import React, { Component } from 'react';
import Content from '../containers/Content.js';
import List from '../containers/List.js';
import ContentTabBar from '../containers/ContentTabBar.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Content.css';

export default class ContentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTabBarShow: false,
            isListShow: false,
        }
        this.showTabBar = this.showTabBar.bind(this)
        this.showList = this.showList.bind(this)
    }
    showTabBar(bool) {
        this.setState({
            isTabBarShow: typeof bool !== 'boolean' ? !this.state.isTabBarShow : bool
        })
    }
    showList(bool) {
        this.setState({
            isListShow: typeof bool !== 'boolean' ? !this.state.isListShow : bool
        })
    }
    render() {
        const {isTabBarShow, isListShow} = this.state
        const ListCache = <div className='list-box'>
          <List showTabBar={this.showTabBar} showList={this.showList}/>
        </div>
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="slide"
                    component="div"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {isTabBarShow && <ContentTabBar showTabBar={this.showTabBar} showList={this.showList}/>}
                    {isListShow && ListCache}
                    {isListShow && <div className='cover' onClick={this.showList}></div>}
                </ReactCSSTransitionGroup>
                <Content showTabBar={this.showTabBar} showList={this.showList}/>
            </div>
        );
    }
}
