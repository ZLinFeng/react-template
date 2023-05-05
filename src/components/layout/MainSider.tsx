import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";

const { Sider, } = Layout;

type MenuItem = Required<MenuProps>["items"][number]

const MainSider: React.FC = () => {

    const history = useLocation();

    useEffect(() => {
        console.log("History nav is: " + history.pathname.substring(1));
    });

    return (
        <>
            <Sider width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={[]}
                />
            </Sider>
        </>
    )
}

export default MainSider;