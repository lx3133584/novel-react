import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd-mobile';

const BadgeStyle = {
  marginLeft: '0.15rem',
  padding: '0 0.08rem',
  backgroundColor: '#fff',
  borderRadius: 2,
  color: '#108ee9',
  border: '1px solid #108ee9',
}
export default function BOOK({ to, pic, title, author, detailList, num }) {
    return (
        <Link style={{ display: 'flex', padding: '0.3rem 0', color: '#333' }} to={to}>
            <div style={{ height: '2rem', width: '20%', margin: '0 0.2rem', border: '1px solid #333', textAlign: 'center', borderRadius: '5px' }}>
                <img style={{ width: '100%', height: '100%' }} src={pic} alt="暂无封面" />
            </div>
            <div style={{ width: '70%' }}>
                {title && <div style={{ fontSize: '0.3rem', marginBottom: '0.1rem' }}>{title}
                  {num && <Badge text={num}
                      style={BadgeStyle}
                    />}</div>}
                {author && <div style={{ color: '#a4a4a4', marginBottom: '0.1rem' }}>{author}</div>}
                {detailList.map(item => (!item.isShow || item.isShow()) && <div
                  style={{ fontSize: '0.2rem', marginBottom: '0.2rem' }}
                  key={item.key}>
                  {item.key}: {typeof item.value === 'string' ? item.value.slice(0, 120) : item.value}
                  {typeof item.value === 'string' && item.value.length > 120 && <span>...</span>}
                </div>)}
            </div>
        </Link>
    );
}
