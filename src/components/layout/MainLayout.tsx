import React from "react";
import { Layout } from "antd";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <>
            <Layout>
                <MainHeader />
                <Layout>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default MainLayout;