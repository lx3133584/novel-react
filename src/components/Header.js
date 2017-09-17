import React from 'react';
import { NavBar } from 'antd-mobile';

export default function Header({onLeftClick, more, title}) {
    return (
        <NavBar
            mode="dark"
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
    );
}
