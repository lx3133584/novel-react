import React from 'react';
import { NavBar } from 'antd-mobile';

export default function Header({onLeftClick, more, title, fixed}) {
    const headerStyle = fixed ? { 
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1,
    } : {}
    return (
        <div style={{height: '0.9rem'}}>
            <NavBar
            mode="dark"
            style={headerStyle}
            iconName={null}
            onLeftClick={onLeftClick}
            leftContent={
                onLeftClick && <i className="iconfont icon-back" style={{ fontSize: '0.45rem' }}></i>
            }
            rightContent={
                more && <i className="iconfont icon-ellipsis" style={{ fontSize: '0.4rem' }}></i>
            }
        >
            {title}
        </NavBar>
        </div>
        
    );
}
