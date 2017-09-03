import React, { Component } from 'react';
class Book extends Component {
    render() {
        let obj = this.props.data
        return (
        <div className="row">
            <div className="row-title">{obj.title}</div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '0.3rem 0' }}>
            <img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={obj.img} alt="icon" />
            <div className="row-text">
                <div style={{ marginBottom: '0.16rem', fontWeight: 'bold' }}>{obj.des}</div>
                <div><span style={{ fontSize: '0.6rem', color: '#FF6E27' }}>35</span>¥</div>
            </div>
            </div>
        </div>
        );
    }
  }
  
  export default Book;