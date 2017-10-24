import React, {Component} from 'react';
import LoginBtn from './LoginBtn.js';
import { Toast, Grid, Modal } from 'antd-mobile';
import defaultAvatar from '../assets/images/avatar.jpg';
import selectImage from '../utils/selectImage';
const avatarBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}
const avatarStyle = {
  height: '2rem',
  width: '2rem',
  borderRadius: '50%',
  background: '#fff',
  margin: '0.6rem auto',
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
          handler: () => this.props.history.push(`/my/modify_password`)
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
    uploadAvatar() {
      selectImage().then(file => {
        this.props.uploadAvatar(file).then(res => {
          Toast.info('修改头像成功', 1)
        })
      })
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
              <div style={avatarBoxStyle} onClick={this.uploadAvatar.bind(this)}>
                <img style={avatarStyle} src={info.avatar || defaultAvatar} alt="" />
                <h2 style={nameStyle}>{info.name}</h2>
              </div>
              <Grid data={this.menuMap} columnNum={3} onClick={item => item.handler()} />
            </div>} else {
            return <LoginBtn />
        }
    }

}
