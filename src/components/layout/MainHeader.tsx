import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import "./layout.css";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import { getItem } from "@/utils";

const { Header, } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const NavValueList = ["Dashboard", "Jobs", "Resources", "Namespace"]
const NavList: MenuItem[] = NavValueList.map((value, key) => (
    getItem(<NavItem key={String(key)} value={value} link={value.toLowerCase()} />, String(key))
));

const MainHeader: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState("0");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.substring(1, 5) === "jobs") {
            setSelectedKey("1");
        }

        if (location.pathname.substring(1, 10) === "resources") {
            setSelectedKey("2");
        }

        if (location.pathname.substring(1, 10) === "namespace") {
            setSelectedKey("3");
        }

        if (location.pathname.substring(1, 10) === "dashboard" || location.pathname.substring(1) === "") {
            setSelectedKey("0")
        }
    });

    return (
        <>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} items={NavList} />
            </Header>
        </>
    )

}

export default MainHeader;