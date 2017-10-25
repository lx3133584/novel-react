import React, {Component} from 'react';
import Header from '../components/Header.js';
import {Toast} from 'antd-mobile';
import {
  Grid,
  Slider,
  createTooltip,
  WhiteSpace,
  WingBlank,
  Button
} from 'antd-mobile';
import './Content.less';
// import skin from '../assets/images/skin-default.jpg';
import skinT from '../assets/images/skin-default-t.jpg';
import skinB from '../assets/images/skin-default-b.jpg';
import skinM from '../assets/images/skin-default-m.jpg';
// import skinS from '../assets/images/skin-default-s.png';
const SliderWithTooltip = createTooltip(Slider);
const fixedStyle = {
  position: 'fixed',
  width: '100%'
}
const configBoxStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '3em'
}
const colorItemStyle = {
  width: '0.8rem',
  height: '0.8rem',
  borderRadius: '50%',
  border: '3px solid #EEE'
}
export default class ContentTabBar extends Component {
  constructor(props) {
    super(props)
    const icon = (iconfont) => <i className={`iconfont icon-${iconfont}`} style={{
      fontSize: '0.6rem'
    }}></i>
    this.indexMap = [
      {
        icon: icon('addbookshelf'),
        text: '加入书架',
        handler: this.add.bind(this)
      }, {
        icon: icon('list'),
        text: '查看目录',
        handler: this.list.bind(this)
      }, {
        icon: icon('detail'),
        text: '书籍详情',
        handler: this.detail.bind(this)
      }, {
        icon: icon('config'),
        text: '设置',
        handler: () => this.setState({step: 'config'})
      }
    ];
    this.configMap = [
      {
        icon: icon('font-size'),
        text: '字体大小',
        handler: () => this.setState({step: 'fontSize'})
      }, {
        icon: icon('line-height'),
        text: '行高',
        handler: () => this.setState({step: 'lineHeight'})
      }, {
        icon: icon('color'),
        text: '主题',
        handler: () => this.setState({step: 'theme'})
      }
    ];
    this.themeMap = [
      {
        background: '#FFF',
        color: '#000'
      }, {
        background: `url(${skinT}) no-repeat center top,url(${skinB}) no-repeat center bottom,url(${skinM}) repeat-y center 1.586666rem`,
        color: '#000'
      }, {
        background: '#3A3531',
        color: '#94938F'
      }, {
        background: '#CBE7CE',
        color: '#000'
      }, {
        background: '#001C28',
        color: '#666D79'
      }
    ]
    this.state = {
      step: 'index'
    };
  }
  add() {
    let {id} = this.props.match.params
    this.props.add(id).then(res => {
      if (!res.status)
        return
      Toast.info('加入书架成功', 1);
    })
  }
  list() {
    let {id} = this.props.match.params
    this.props.history.push(`/list/${id}`)
  }
  detail() {
    let {id} = this.props.match.params
    this.props.history.push(`/detail/${id}`)
  }
  render() {
    const ConfigBox = ({children}) => {
      return <WingBlank>
        <WhiteSpace size="lg"/>
        <div style={configBoxStyle}>
          {children}
        </div>
        <WhiteSpace size="lg"/>
        <Button onClick={() => this.setState({step: 'config'})}>返回</Button>
        <WhiteSpace size="sm"/>
      </WingBlank>
    }
    const ColorItem = ({theme}) => {
      const activeStyle = this.props.background === theme.background
        ? {
          borderColor: '#108ee9'
        }
        : {}
      return <span onClick={() => this.props.changeTheme(theme)} style={{
        ...colorItemStyle,
        background: theme.background,
        ...activeStyle
      }}></span>
    }
    return (
      <div>
        <div className="top" style={{
          ...fixedStyle
        }}>
          <Header title={this.props.title} onLeftClick={this.props.history.goBack}/>
        </div>
        <div className="bottom" style={{
          ...fixedStyle,
          background: '#fff',
          boxShadow: ' #4b4b4b 0 0 0.2rem'
        }}>
          {this.state.step === 'index' && <Grid data={this.indexMap} columnNum={4} onClick={item => item.handler()}/>}
          {this.state.step === 'config' && <WingBlank>
            <Grid data={this.configMap} columnNum={3} onClick={item => item.handler()}/>
            <Button onClick={() => this.setState({step: 'index'})}>返回</Button>
            <WhiteSpace size="sm"/>
          </WingBlank>}
          {this.state.step === 'fontSize' && <ConfigBox>
            <i className={`iconfont icon-font-size-down`} style={{
              fontSize: '0.4rem'
            }} onClick={() => this.props.changeFontSize(this.props.fontSize - 1)}></i>
            <div style={{
              width: '90%'
            }}>
              <SliderWithTooltip defaultValue={this.props.fontSize}
                min={1} max={10} step={0.1}
                onAfterChange={value => this.props.changeFontSize(value)}/>
            </div>
            <i className={`iconfont icon-font-size-up`} style={{
              fontSize: '0.4rem'
            }} onClick={() => this.props.changeFontSize(this.props.fontSize + 1)}></i>
          </ConfigBox>}
          {this.state.step === 'lineHeight' && <ConfigBox>
            <span style={{
              fontSize: '0.5rem'
            }} onClick={() => this.props.changeLineHeight(this.props.lineHeight - 0.1)}>-</span>
            <div style={{
              width: '90%'
            }}>
              <SliderWithTooltip defaultValue={this.props.lineHeight}
                min={1} max={3} step={0.01}
                onAfterChange={value => this.props.changeLineHeight(value)}/>
            </div>
            <span style={{
              fontSize: '0.5rem'
            }} onClick={() => this.props.changeLineHeight(this.props.lineHeight + 0.1)}>+</span>
          </ConfigBox>}
          {this.state.step === 'theme' && <ConfigBox>
            {this.themeMap.map(item => <ColorItem key={item.background} theme={item}></ColorItem>)}
          </ConfigBox>}
        </div>
      </div>

    );
  }
}
