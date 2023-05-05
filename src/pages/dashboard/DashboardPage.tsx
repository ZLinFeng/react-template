import LiquidChart from "@/components/charts/LiquidChart";
import React from "react";
import { Row, Col, Space, Card, Input, Tooltip } from "antd";
import Timer from "@/components/charts/Timer";
import "./index.css";
import { BlockOutlined, ExperimentOutlined, FunctionOutlined, InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import ColumnChart from "@/components/charts/ColumnChart";
import MetricsCard from "@/components/charts/MetricsCard";
import AreaChart from "@/components/charts/AreaChart";


const DashboardPage: React.FC = () => {
    return (
        <>
            <Row id="welcome">
                <Col span={12}>
                    <Space size={"large"}>
                        {/*<label style={{ fontWeight: "bold", paddingRight: "100px" }}>Dashboard</label>*/}
                        <Timer />
                    </Space>
                </Col>
                <Col span={6} push={4}>
                    <Input
                        placeholder="Search here..."
                        prefix={<SearchOutlined className="site-form-item-icon" style={{ fontSize: "20px" }} />}
                        suffix={
                            <Tooltip title="Search ">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: "20px" }} />
                            </Tooltip>
                        }
                        style={{ borderRadius: "10px" }}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Row>
                        <Card className="usage-card"
                            title={<label style={{ fontWeight: "bold" }}>Resource Usage</label>}
                            hoverable={true}
                            bordered={false}
                        >
                            <Space size={20}>
                                <LiquidChart label="Memory" ratio={0.9111} />
                                <LiquidChart label="Core" ratio={0.7956} />
                                <LiquidChart label="HDFS" ratio={0.2323} />
                            </Space>
                        </Card>
                    </Row>
                    <Row>
                        <Col span={8} className="metrics-col">
                            <MetricsCard
                                icon={<BlockOutlined style={{ fontSize: "20px" }} />}
                                value="Workspaces"
                                content="9"
                                isUp={true}
                                changeValue="90%" />
                        </Col>
                        <Col span={8} className="metrics-col">
                            <MetricsCard
                                icon={<ExperimentOutlined style={{ fontSize: "20px" }} />}
                                value="Jobs"
                                content="1,000"
                                isUp={false}
                                changeValue="30%" />
                        </Col>
                        <Col span={8} className="metrics-col">
                            <MetricsCard
                                icon={<FunctionOutlined style={{ fontSize: "20px" }} />}
                                value="UDF"
                                content="500"
                                isUp={true}
                                changeValue="10%" />
                        </Col>
                    </Row>

                </Col>
                <Col span={12}>
                    <Card className="usage-trend"
                        title={<label style={{ fontWeight: "bold" }}>Daily Average Usage</label>}
                        hoverable={true}
                        bordered={false}
                    >
                        <ColumnChart />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card className="usage-trend"
                        title={<label style={{ fontWeight: "bold" }}>Daily Running Jobs</label>}
                        hoverable={true}
                        bordered={false}
                    >
                        <AreaChart />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DashboardPage;