import React, { Component } from 'react';
import Header from '../components/Header.js';
import { Grid, Slider, createTooltip, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import './Content.less';
const SliderWithTooltip = createTooltip(Slider);
export default class ContentTabBar extends Component {
    constructor(props) {
        super(props)
        let icon = (iconfont) => <i className={`iconfont icon-${iconfont}`} style={{ fontSize: '0.6rem' }}></i>
        this.indexMap = [
            // {
            //     icon: icon('addbookshelf'),
            //     text: '加入书架',
            //     handler: this.add.bind(this),
            // },
            {
                icon: icon('list'),
                text: '查看目录',
                handler: this.list.bind(this)
            },
            {
                icon: icon('detail'),
                text: '书籍详情',
                handler: this.detail.bind(this)
            },
            {
                icon: icon('config'),
                text: '设置',
                handler: () => this.setState({ step: 'config' })
            },
        ]
        this.configMap = [
            {
                icon: icon('font-size'),
                text: '字体大小',
                handler: () => this.setState({ step: 'fontSize' })
            },
            {
                icon: icon('line-height'),
                text: '行高',
                handler: () => this.setState({ step: 'lineHeight' })
            },
            {
                icon: icon('background'),
                text: '背景',
                handler: () => this.setState({ step: 'background' })
            },
        ]
        this.state = {
            step: 'index'
        }
    }
    add() {
        // if (this.props.isAdd) return
        // let data = this.props.data
        // this.props.add({
        //     ...data,
        //     uid: data.category + data.ids,
        //     pic: this.props.location.search.replace('?pic=', '')
        // })
        // Toast.success('加入书架成功', 1);
    }
    list() {
        let params = this.props.match.params
        this.props.history.push(`/list/${params.category}/${params.ids}`)
    }
    detail() {
        let params = this.props.match.params
        this.props.history.push(`/detail/${params.category}/${params.ids}`)
    }
    render() {
        return (
            <div>
                <div style={{ position: 'fixed', width: '100%', top: 0 }}>
                    <Header title={this.props.title} onLeftClick={this.props.history.goBack} />
                </div>
                <div style={{ position: 'fixed', background: '#fff', width: '100%', bottom: 0, boxShadow: ' #4b4b4b 0 0 0.2rem' }}>
                    {this.state.step === 'index' && <Grid data={this.indexMap} columnNum={3} onClick={item => item.handler()} />}
                    {this.state.step === 'config' && <WingBlank>
                        <Grid data={this.configMap} columnNum={3} onClick={item => item.handler()} />
                        <Button onClick={() => this.setState({ step: 'index' })}>返回</Button>
                        <WhiteSpace size="sm" />
                    </WingBlank>}
                    {this.state.step === 'fontSize' && <WingBlank>
                        <WhiteSpace size="lg" />
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3em'}}>
                            <i className={`iconfont icon-font-size-down`} style={{ fontSize: '0.4rem' }} onClick={() => this.props.changeFontSize(this.props.fontSize - 1)}></i>
                            <div style={{width: '90%'}}>
                                <SliderWithTooltip value={this.props.fontSize} min={12} max={42} step={0.1} onChange={this.props.changeFontSize.bind(this)} />
                            </div>
                            <i className={`iconfont icon-font-size-up`} style={{ fontSize: '0.4rem' }} onClick={() => this.props.changeFontSize(this.props.fontSize + 1)}></i>
                        </div>
                        <WhiteSpace size="lg" />
                        <Button onClick={() => this.setState({ step: 'config' })}>返回</Button>
                        <WhiteSpace size="sm" />
                    </WingBlank>}
                    {this.state.step === 'lineHeight' && <WingBlank>
                        <WhiteSpace size="lg" />
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3em'}}>
                            <span style={{ fontSize: '0.5rem' }} onClick={() => this.props.changeLineHeight(this.props.lineHeight - 0.1)}>-</span>
                            <div style={{width: '90%'}}>
                                <SliderWithTooltip value={this.props.lineHeight} min={1} max={3} step={0.01} onChange={this.props.changeLineHeight.bind(this)} />
                            </div>
                            <span style={{ fontSize: '0.5rem' }} onClick={() => this.props.changeLineHeight(this.props.lineHeight + 0.1)}>+</span>
                        </div>
                        <WhiteSpace size="lg" />
                        <Button onClick={() => this.setState({ step: 'config' })}>返回</Button>
                        <WhiteSpace size="sm" />
                    </WingBlank>}
                </div>
            </div>

        );
    }
}
