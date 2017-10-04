import React, { Component } from 'react';
import Register from '../containers/Register.js';
import Header from '../components/Header.js';
export default class extends Component {
    render() {
        return (
            <div>
                <Header title="注册" onLeftClick={this.props.history.goBack}/>
                <Register />
            </div>
        );
    }
}
