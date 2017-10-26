import React from 'react';
import { NavBar } from 'antd-mobile';
import Icon from './Icon.js';

export default function Header({onLeftClick, rightContent, title, fixed}) {
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
            style={{...headerStyle}}
            iconName={null}
            onLeftClick={onLeftClick}
            leftContent={
                onLeftClick && <Icon iconfont="back" fontSize={0.45} />
            }
            rightContent={
                rightContent
            }
        >
            {title}
        </NavBar>
        </div>

    );
}
