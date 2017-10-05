import React, { Component } from 'react';
import List from '../containers/List.js';
import Header from '../components/Header.js';
export default class extends Component {
    render() {
        return (
            <div>
                <Header fixed title="目录" onLeftClick={this.props.history.goBack}/>
                <List />
            </div>
        );
    }
}
