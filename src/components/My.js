import React, {Component} from 'react';
import LoginBtn from './LoginBtn.js';
import { Toast, Grid, Modal } from 'antd-mobile';
import defaultAvatar from '../assets/images/avatar.jpg';
const avatarBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}
const avatarStyle = {
  height: '2rem',
  width: '2rem',
  borderRadius: '50%',
  margin: '0.6rem auto'
}
const nameStyle = {
  textAlign: 'center',
  marginTop: 0,
}
export default class My extends Component {
  constructor() {
    super()
    const icon = (iconfont) => <i className={`iconfont icon-${iconfont}`} style={{ fontSize: '0.6rem' }}></i>
    this.menuMap = [
      {
          icon: icon('modify'),
          text: '修改昵称',
          handler: () => this.props.history.push(`/my/edit_name/${this.props.info.name}`)
      },
      {
          icon: icon('password'),
          text: '修改密码',
          handler: () => this.setState({ step: 'lineHeight' })
      },
      {
          icon: icon('logout'),
          text: '退出登录',
          handler: () => this.logout()
      },
    ]
  }
    componentDidMount() {
        this.props.token && this.props.getInfo()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.token !== this.props.token) {
            nextProps.token && this.props.getInfo()
        }
    }
    logout() {
      Modal.alert('注销', '确认注销？', [
        { text: '取消', onPress: (f) => f },
        {
          text: '确定', onPress: () => {
            this.props.removeToken();
            localStorage.removeItem('TOKEN');
            Toast.info('注销成功', 1)
          }
        }
      ])

    }
    render() {
        if (this.props.token) {
          const info = this.props.info
            return <div>
              <div style={avatarBoxStyle}>
                <img style={avatarStyle} src={info.avatar || defaultAvatar} alt="头像加载失败" />
                <h2 style={nameStyle}>{info.name}</h2>
              </div>
              <Grid data={this.menuMap} columnNum={3} onClick={item => item.handler()} />
            </div>} else {
            return <LoginBtn />
        }
    }

}
