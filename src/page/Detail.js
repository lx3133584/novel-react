import React, { Component } from 'react';
import DetailContent from '../containers/DetailContent.js';
import DetailTabBar from '../containers/DetailTabBar.js';
import Header from '../components/Header.js';
class Detail extends Component {
    render() {
        return (
            <div style={{paddingBottom: '1rem'}}>
                <Header title="书籍详情" onLeftClick={this.props.history.goBack}/>
                <DetailContent />
                <DetailTabBar />
            </div>
        );
    }
}

export default Detail;