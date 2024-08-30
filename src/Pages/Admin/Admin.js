import React, { useState } from 'react';
import {
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    ShoppingOutlined,
    UserAddOutlined

} from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, } from 'antd';
import AllOrders from '../AllOrders/AllOrders';
import Food from './Food/Food';
import withAdminAuth from '../../HOC/withAdminAuth';
import ListFood from './ListFood/ListFood';
import ListUser from './ListUser/ListUser';
import Shipper from './Shipper/Shipper';
import ListShipper from './ListShipper/ListShipper';
import OrderStatus from './OrderStatus/OrderStatus';

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    // getItem('User', '1', <UserOutlined />),
    getItem('List User', '2', <UserOutlined />),

    getItem('Food', '3', <ShopOutlined />),
    getItem('List Food', '4', <ShopOutlined />),

    getItem('All Orders', '5', <ShoppingOutlined />),
    
    getItem('Shipper', '6',<UserAddOutlined />),
    getItem('List Shipper', '7',<UserAddOutlined />),
    getItem('Revenue Statistics', '8',<UserAddOutlined />),



    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '10'), getItem('Team 2', '11')]),
];
const menus = [
    {
        label: <Avatar size={30} icon={<UserOutlined />} />,
        key: "SubMenu",
        icon: <MenuOutlined />,
        children: [
            {
                type: "group",
                children: [

                    {
                        label: "Logout",
                        key: "setting:2",
                    },
                ],
            },
        ],
    },
];
const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('5');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onClick = ({ key }) => {
        setCurrent(key);
    }

    const handleAddNewFood = () => {
        setCurrent('3'); // Cập nhật giá trị current thành 3
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} />
            </Sider>
            <Layout>
                <div className="menu-user d-flex justify-content-between p-3">
                    <MenuFoldOutlined className='rounded-circle' />
                    <Menu triggerSubMenuAction="click" mode="horizontal" items={menus} />
                </div>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >

                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {current === '2' ? <ListUser /> : <></>}
                        {current === '3' ? <Food /> : <></>}
                        {current === '4' ? <ListFood onAddNewFood={handleAddNewFood} /> : <></>}
                        {current === '5' ? <AllOrders /> : <></>}
                        {current === '6' ? <Shipper /> : <></>}
                        {current === '7' ? <ListShipper /> : <></>}
                        {current === '8' ? <OrderStatus /> : <></>}



                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default withAdminAuth(Admin);