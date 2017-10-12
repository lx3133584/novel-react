import React, {Component} from 'react';
import Book from './Book.js';
import LoginBtn from './LoginBtn.js';
import {Toast, SwipeAction, WhiteSpace} from 'antd-mobile';
export default class ReaderBookshelf extends Component {
  componentDidMount() {
    this.props.token && this.props.getBookshelf()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.token !== this.props.token) {
      nextProps.token && this.props.getBookshelf()
    }
  }
  removeBook(id) {
    this.props.removeBook(id).then(() => {
      this.props.getBookshelf()
      Toast.info('删除成功', 1)
    })
  }
  render() {
    if (this.props.token) {
      return <div>
        {this.props.list.map(itemBox => {
          const item = itemBox.novel
          return <SwipeAction style={{
            backgroundColor: 'gray'
          }} autoClose key={itemBox._id} right={[
            {
              text: '取消',
              style: {
                backgroundColor: '#ddd',
                color: 'white',
                padding: '0 1em'
              }
            }, {
              text: '删除',
              onPress: this.removeBook.bind(this, itemBox._id),
              style: {
                backgroundColor: '#F4333C',
                color: 'white',
                padding: '0 1em'
              }
            }
          ]}><Book to={{
            pathname: `/content/${item._id}/${itemBox.progress && itemBox.progress - 1}`
          }} pic={item.img} title={item.name} detailList={[
            {
              key: '状态',
              value: '已完结',
              isShow: () => item.state === '已完成'
            }, {
              key: '连载至',
              value: item.lastChapterTitle,
              isShow: () => item.state !== '已完成'
            }, {
              key: '更新时间',
              value: item.updateTime
            }, {
              key: '阅读进度',
              value: itemBox.progress
                ? `${itemBox.progress}/${item.countChapter} (${ (itemBox.progress / item.countChapter * 100).toFixed(2)}%)`
                : '未读'
            }
          ]}/>
          </SwipeAction>
        })}
        {!this.props.list.length && <div style={{
          textAlign: 'center'
        }}><WhiteSpace size='xl'/>你的书架空空如也</div>}
      </div>
    } else {
      return <LoginBtn/>
    }
  }

}
