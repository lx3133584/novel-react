import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';

export default class extends Component {
    render() {
        return (
            <NavBar
                mode="dark"
                iconName={null}
                onLeftClick={this.props.onLeftClick}
                leftContent={
                    <i className="iconfont icon-back" style={{fontSize: '0.45rem'}}></i>
                }
                rightContent={
                    this.props.more && <i className="iconfont icon-ellipsis" style={{fontSize: '0.4rem'}}></i>
                }
            >
            {this.props.title}
            </NavBar>
        );
    }
}
