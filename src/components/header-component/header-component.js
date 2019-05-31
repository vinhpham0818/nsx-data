import React from 'react';
import './header-component.css';
class HeaderComp extends React.Component {
    render () {
        return (
            <div className="main-header">
                <ul>
                    <a href="/">
                        <li>Trang Chủ</li>
                    </a>
                
                
                    <a href="/product">
                        <li>Sản Phẩm</li>
                    </a>
                
                
                    <li>Nông Trại</li>
                
                
                    <li>Tin Tức</li>
               
               
                    <li>Liên Hệ</li>
                </ul>
            </div>
        )
    }
    
}

export default HeaderComp