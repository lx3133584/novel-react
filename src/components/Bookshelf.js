import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import Book from '../components/Book.js'

let pageIndex = 0;
const PAGE_SIZE = 5

class Bookshelf extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.results),
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.results !== this.props.results) {
            console.log('update')
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.results),
            });
        }
    }

    onEndReached = (event) => {
        if (this.props.isLoading || !this.hasMore) {
            return;
        }
        console.log('reach end', event);
        console.log('index', pageIndex)
        console.log('judge', pageIndex === Math.ceil(this.props.count / PAGE_SIZE))
        this.props.search(this.props.keyword, ++pageIndex)
        if (pageIndex === Math.ceil(this.props.count / PAGE_SIZE)) this.hasMore = false
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
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

        return (
            <ListView ref="lv"
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.props.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={PAGE_SIZE}
                useBodyScroll
                scrollRenderAheadDistance={500}
                scrollEventThrottle={200}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default Bookshelf;