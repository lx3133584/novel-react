import React, { PureComponent } from 'react';
import Content from '../containers/Content.js';
import List from '../containers/List.js';
import { Drawer } from 'antd-mobile';
import ContentTabBar from '../containers/ContentTabBar.js';
import ContentHeader from '../containers/ContentHeader.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Content.css';

export default class ContentPage extends PureComponent {
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
        return (
            <Drawer
              position="right"
              sidebarStyle={{width: '80%'}}
              sidebar={<List showTabBar={this.showTabBar} showList={this.showList} isListShow={isListShow}/>}
              open={isListShow}
              onOpenChange={this.showList}>
              <ReactCSSTransitionGroup
                  transitionName="slide"
                  component="div"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}>
                  {isTabBarShow && <div>
                    <ContentHeader showTabBar={this.showTabBar}/>
                    <ContentTabBar showList={this.showList}/>
                  </div>}
              </ReactCSSTransitionGroup>
              <Content showTabBar={this.showTabBar} showList={this.showList}/>
            </Drawer>
        );
    }
}
