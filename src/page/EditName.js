import React, { Component } from 'react';
import EditName from '../containers/EditName.js';
class EditNamePage extends Component {
    render() {
        return (
            <EditName title="昵称" items={[{
              title: '昵称',
              value: this.props.match.params.name
            }]}></EditName>
        );
    }
}

export default EditNamePage;
