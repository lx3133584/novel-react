import React, {Component} from 'react';
import Header from './Header.js';
import Icon from './Icon.js';
import {Toast} from 'antd-mobile';
import {
  Grid,
  Slider,
  createTooltip,
  WhiteSpace,
  WingBlank,
  Button,
  Popover
} from 'antd-mobile';
import './Content.less';
// import skin from '../assets/images/skin-default.jpg';
import skinT from '../assets/images/skin-default-t.jpg';
import skinB from '../assets/images/skin-default-b.jpg';
import skinM from '../assets/images/skin-default-m.jpg';
// import skinS from '../assets/images/skin-default-s.png';
const SliderWithTooltip = createTooltip(Slider);
const Item = Popover.Item;
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

class Top extends Component {
  constructor(props) {
    super(props)
    this.ellipsisMap = [
      {
        icon: <Icon iconfont="addbookshelf" fontSize={0.4} />,
        text: '加入书架',
        handler: this.add.bind(this)
      }, {
        icon: <Icon iconfont="detail" fontSize={0.4} />,
        text: '书籍详情',
        handler: this.detail.bind(this)
      }, {
        icon: <Icon iconfont="bookshelf" fontSize={0.4} />,
        text: '返回书架',
        handler: () => props.history.push('/')
      },
    ];
    this.state = {
      ellipsis: false
    };
    this.ellipsis = this.ellipsis.bind(this)
  }
  add() {
    const {id} = this.props.match.params;
    this.ellipsis()
    this.props.add(id).then(res => {
      if (!res.status) return;
      Toast.info('加入书架成功', 1);
    })
  }
  detail() {
    const {id} = this.props.match.params
    this.props.history.push(`/detail/${id}`)
  }
  ellipsis() {
    this.setState({ellipsis: !this.state.ellipsis})
  }
  onSelect({props}) {
    props.onClick()
  }
  render() {
    return <div className="top" style={fixedStyle}>
      <Header title={this.props.title}
        rightContent={
          <Popover
            visible={this.state.ellipsis}
            onSelect={this.onSelect}
            onVisibleChange={this.ellipsis}
            overlay={this.ellipsisMap.map(item => <Item
              icon={item.icon}
              onClick={item.handler}
              key={item.text}>
              {item.text}</Item>)}>
          <Icon iconfont="ellipsis" handler={this.ellipsis} />
        </Popover>}
        onLeftClick={this.props.history.goBack}/>
    </div>
  }
}
export default class ContentTabBar extends Component {
  constructor(props) {
    super(props)
    this.indexMap = [
      {
        icon: <Icon iconfont="list" />,
        text: '查看目录',
        handler: this.list.bind(this)
      }, {
        icon: <Icon iconfont="process" />,
        text: '阅读进度',
        handler: () => this.setState({step: 'process'})
      }, {
        icon: <Icon iconfont="config" />,
        text: '设置',
        handler: () => this.setState({step: 'config'})
      }
    ];
    this.configMap = [
      {
        icon: <Icon iconfont="font-size" />,
        text: '字体大小',
        handler: () => this.setState({step: 'fontSize'})
      }, {
        icon: <Icon iconfont="line-height" />,
        text: '行高',
        handler: () => this.setState({step: 'lineHeight'})
      }, {
        icon: <Icon iconfont="color" />,
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
    ];
    this.state = {
      step: 'index'
    };
    this.goNext = this.goNext.bind(this)
  }

  list() {
    const {showList} = this.props;
    showList(true)
  }
  goNext(num) {
      const {id} = this.props.match.params
      this.props.history.replace( `/content/${id}/${num}`)
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
    const {list} = this.props
    const {num} = this.props.match.params
    const cur = +num
    return (
      <div>
        <Top {...this.props}/>
        <div className="bottom" style={{
          ...fixedStyle,
          background: '#fff',
          boxShadow: ' #4b4b4b 0 0 0.2rem'
        }}>
          {this.state.step === 'index' && <Grid data={this.indexMap} columnNum={3} onClick={item => item.handler()}/>}
          {this.state.step === 'config' && <WingBlank>
            <Grid data={this.configMap} columnNum={3} onClick={item => item.handler()}/>
            <Button onClick={() => this.setState({step: 'index'})}>返回</Button>
            <WhiteSpace size="sm"/>
          </WingBlank>}
          {this.state.step === 'process' && <WingBlank>
            <WhiteSpace size="sm"/>
            <div style={{...configBoxStyle,
              fontSize: '0.3rem'
            }}>
              <span onClick={() => this.goNext(cur - 1)}>上一章</span>
              <dl style={{
                textAlign: 'center'
              }}>
                <dd>{list[cur].title}</dd>
                <dt>{(cur / list.length * 100).toFixed(2)}%</dt>
              </dl>
              <span onClick={() => this.goNext(cur + 1)}>下一章</span>
            </div>
            <WhiteSpace size="lg"/>
            <SliderWithTooltip defaultValue={cur + 1}
              style={{height: '2em'}}
              min={1} max={list.length} step={1}
              onAfterChange={value => this.goNext(value - 1)}/>
            <WhiteSpace size="sm"/>
            <Button onClick={() => this.setState({step: 'index'})}>返回</Button>
            <WhiteSpace size="sm"/>
          </WingBlank>}
          {this.state.step === 'fontSize' && <ConfigBox>
            <Icon iconfont="font-size-down" fontSize={0.4} handler={() => this.props.changeFontSize(this.props.fontSize - 1)}/>
            <div style={{
              width: '90%'
            }}>
              <SliderWithTooltip defaultValue={this.props.fontSize}
                min={1} max={10} step={0.1}
                onAfterChange={value => this.props.changeFontSize(value)}/>
            </div>
            <Icon iconfont="font-size-up" fontSize={0.4} handler={() => this.props.changeFontSize(this.props.fontSize + 1)}/>
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
