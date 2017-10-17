import React, { Component } from 'react';
import { List, ActivityIndicator } from 'antd-mobile';
import Book from './Book';
export default class RankComponent extends Component {
    componentDidMount() {
        this.props.getRank()
    }
    render() {
        return (
            <div>
                {this.props.loading && <ActivityIndicator size="large" toast text="正在加载..." />}
                {this.props.rank.map(rankType => <List renderHeader={() => rankType.type} key={rankType._id}>
                      {rankType.rank.map(item => <Book
                          key={item._id}
                          to={{
                              pathname: `/detail/${item._id}`
                          }}
                          pic={item.img}
                          title={item.name}
                          author={item.author}
                          detailList={[
                              {
                                  key: '简介',
                                  value: item.introduction
                              }
                          ]}
                      />)}
                  </List>
                )}
            </div>
        );
    }
}
