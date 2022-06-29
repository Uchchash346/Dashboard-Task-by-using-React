import React from 'react';
import '../../Styles/SortBy.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';

const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menu = (
    <Menu
        onClick={handleMenuClick}
        items={[
            {
                label: '1st menu item',
                key: '1',
                icon: <UserOutlined />,
            },
            {
                label: '2nd menu item',
                key: '2',
                icon: <UserOutlined />,
            },
            {
                label: '3rd menu item',
                key: '3',
                icon: <UserOutlined />,
            },
        ]}
    />
);

const SortBy = () => {
    return (
        <>
            <div className="sort-section">
                <div className="sort-text-area">Sort By</div>
                <Dropdown overlay={menu}>
                    <Button className="top-rated-button">
                        <Space>
                            Top Rated
                            <span id="down-icon"><DownOutlined /></span>
                        </Space>
                    </Button>
                </Dropdown>
            </div>
        </>
    );
};

export default SortBy;