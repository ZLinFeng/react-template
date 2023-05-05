import { Divider } from "antd";
import React from "react";


const ManagementPage: React.FC = () => {
    return (
        <>
            <Divider orientation={"left"} style={{ color: "#8c8c8c", fontStyle: "italic" }}>Stream Jobs</Divider>
            <Divider orientation={"left"} style={{ color: "#8c8c8c", fontStyle: "italic" }}>Import & Export</Divider>
            <Divider orientation={"left"} style={{ color: "#8c8c8c", fontStyle: "italic" }}>Import & Export</Divider>
        </>
    );
}

export default ManagementPage;