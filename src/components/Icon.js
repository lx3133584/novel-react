import React from 'react';

export default function Icon({iconfont, fontSize, handler}) {
  return <i className={`iconfont icon-${iconfont}`} style={{
    fontSize: (fontSize || 0.6) + 'rem'
  }} onClick={handler}></i>
}
