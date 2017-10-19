import React, { Component } from 'react';
import ModifyPassword from '../containers/ModifyPassword.js';
class ModifyPasswordPage extends Component {
    render() {
        return (
            <ModifyPassword  title="密码" items={[
              {
                title: '旧密码',
                type: 'password',
              },
              {
                title: '新密码',
                type: 'password',
              },
              {
                title: '确认密码',
                type: 'password',
                placeholder: '请再次输入密码'
              }
            ]}></ModifyPassword>
        );
    }
}

export default ModifyPasswordPage;
