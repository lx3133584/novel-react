import React, { Component } from 'react';
import { ListView, ActivityIndicator } from 'antd-mobile';
import Book from '../components/Book.js'

class Bookshelf extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.pageIndex = 0;
        this.PAGE_SIZE = 10;
        this.hasMore = true;
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.data),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.props.data.length || (this.pageIndex = 0);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows([...nextProps.data]),
            });
        }
    }

    onEndReached = (event) => {
        if (this.props.isLoading || !this.hasMore) {
            return;
        }
        this.props.getData(++this.pageIndex, this.props.keyword)
        if (this.pageIndex === Math.floor(this.props.count / this.PAGE_SIZE)) this.hasMore = false
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: '0.1rem',
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            return (
                <Book
                    key={rowID}
                    to={{
                        pathname: `/detail/${rowData.title}/${rowData.url}`
                    }}
                    pic={rowData.img}
                    title={rowData.title}
                    author={rowData.author}
                    detailList={[
                        {
                            key: '简介',
                            value: rowData.introduction
                        },
                        {
                            key: '最新章节',
                            value: rowData.new_chapter
                        },
                    ]}
                />
            );
        };
        const footer = () => {
            let Text = null;
            if (this.props.isLoading) {
                Text = () => <ActivityIndicator
                text="加载中"
              />;
            } else if (!this.hasMore) {
                Text = () => <span>已经没有更多数据</span>;
            } else if (!this.props.data.length) {
                Text = () => <span>暂时没有数据</span>;
            } else {
                Text = () => <span>下拉加载更多</span>;
            }
            return (<div style={{ padding: '0.4rem', display: 'flex', justifyContent: 'center' }}>
                <Text />
            </div>)
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderFooter={footer}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={this.PAGE_SIZE}
                useBodyScroll
                onEndReached={this.onEndReached}
                scrollRenderAheadDistance={500}
                scrollEventThrottle={200}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default Bookshelf;