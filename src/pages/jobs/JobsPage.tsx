import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import "./index.css"
import { getItem } from "@/utils";
import SparkIcon from "@/components/icons/SparkIcon";
import FlinkIcon from "@/components/icons/FlinkIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import PytorchIcon from "@/components/icons/PytorchIcon";
import EngineIcon from "@/components/icons/EngineIcon";
import ManagementIcon from "@/components/icons/ManagementIcon";
import { Link, Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

const items2: MenuProps['items'] = [
    getItem(<Link to={"/jobs/management"}>Management</Link>, "0", <ManagementIcon />),
    getItem(<label>Computing Engine</label>, "1", <EngineIcon />, [
        getItem(<Link to={"/jobs/spark"}>Spark 3.0+</Link>, "2", <SparkIcon />),
        getItem(<label>Flink</label>, "3", <FlinkIcon />),
        getItem(<label>Java 1.8</label>, "4", <JavaIcon />),
        getItem(<label>Python</label>, "5", <PythonIcon />),
        getItem(<label>Pytorch</label>, "6", <PytorchIcon />),
    ]),
]


const JobsPage: React.FC = () => {
    return (
        <>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['0']}
                        defaultOpenKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="jobs-content"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default JobsPage;