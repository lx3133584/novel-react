import React from 'react';
import { Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
const btnBoxStyle = {
  height: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
function LoginBtn({history}) {
  return <div style={btnBoxStyle}>
    <Button type="primary" size="large" inline onClick={() => history.push('/login')}>立即登录</Button>
  </div>
}

export default withRouter(LoginBtn)
