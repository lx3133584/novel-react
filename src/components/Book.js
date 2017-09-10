import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    render() {
        let obj = this.props.data
        return (
            <Link style={{ display: 'flex', padding: '0.3rem 0', color: '#333' }} to={{
                pathname: `/detail/${obj.category}/${obj.ids}`,
                search: `?pic=${obj.pic}`
            }}>
                <div style={{ height: '2rem', width: '20%', margin: '0 0.2rem', border: '1px solid #333', textAlign: 'center', borderRadius: '5px'}}>
                    <img style={{ width: '100%', height: '100%' }} src={obj.pic} alt="Cover" />
                </div>
                <div style={{width: '70%'}}>
                    <div style={{ fontSize: '0.3rem', marginBottom: '0.1rem' }}>{obj.title}</div>
                    <div style={{ color: '#a4a4a4', marginBottom: '0.1rem' }}>{obj.author}</div>
                    <div style={{ fontSize: '0.2rem', marginBottom: '0.2rem' }}>简介: {obj.desc}</div>
                    <div style={{ fontSize: '0.2rem', marginBottom: '0.1rem' }}>最新章节: {obj.new_chapter}</div>
                </div>
            </Link>
        );
    }
}

export default Book;