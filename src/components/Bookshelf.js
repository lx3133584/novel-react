import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
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
            dataSource: dataSource.cloneWithRows(this.props.results),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.results !== this.props.results) {
            this.props.results.length || (this.pageIndex = 0);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows([...nextProps.results]),
            });
        }
    }

    onEndReached = (event) => {
        if (this.props.isLoading || !this.hasMore) {
            return;
        }
        this.props.search(this.props.keyword, ++this.pageIndex)
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
                    data={rowData}
                />
            );
        };
        const footer = () => {
            let Text = null;
            if (this.props.isLoading) {
                Text = () => <span>加载中...</span>;
            } else if (!this.hasMore) {
                Text = () => <span>已经没有更多数据</span>;
            } else if (!this.props.results.length) {
                Text = () => <span>暂时没有数据</span>;
            } else {
                Text = () => <span>下拉加载更多</span>;
            }
            return (<div style={{ padding: '0.4rem', textAlign: 'center' }}>
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