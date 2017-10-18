import React, { Component } from 'react';
import { List, ActivityIndicator } from 'antd-mobile';
import Book from './Book';
export default class RankComponent extends Component {
    componentDidMount() {
        this.props.rank.length || this.props.getRank()
    }
    render() {
        return (
            <div>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                {this.props.rank.map(rankType => <List renderHeader={() => rankType.type} key={rankType.type}>
                      {rankType.rank.map(({novel, num}) => <Book
                          key={novel._id}
                          to={{
                              pathname: `/detail/${novel._id}`
                          }}
                          num={num + 1}
                          pic={novel.img}
                          title={novel.name}
                          author={novel.author}
                          detailList={[
                              {
                                  key: '简介',
                                  value: novel.introduction
                              }
                          ]}
                      />)}
                  </List>
                )}
            </div>
        );
    }
}
