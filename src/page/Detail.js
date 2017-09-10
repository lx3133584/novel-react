import React, { Component } from 'react';
import DetailContent from '../containers/DetailContent.js';
import DetailTabBar from '../containers/DetailTabBar.js';
class Detail extends Component {
    render() {
        return (
            <div>
                <DetailContent />
                <DetailTabBar />
            </div>
        );
    }
}

export default Detail;