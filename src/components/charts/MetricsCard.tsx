import { Card, Col, Row, Space } from "antd";
import React, { ReactNode } from "react";
import "./index.css"
import { FallOutlined, RiseOutlined } from "@ant-design/icons";


interface TitleValue {
    icon?: ReactNode
    value: string
}

interface MetricsValue extends TitleValue {
    content: string
    isUp?: boolean
    changeValue?: string
}



const MetricsTitle: React.FC<TitleValue> = (prop) => {
    return (
        <>
            <Space size={"large"}>
                {prop.icon}
                <label className="metrics-card-title">{prop.value}</label>
            </Space>
        </>
    )
}

const MetricsCard: React.FC<MetricsValue> = (prop) => {



    const getChangeRatio = (): ReactNode => {
        if (prop.isUp != undefined && prop.changeValue != undefined) {
            return (
                <>
                    <Space>
                        {((): ReactNode => {
                            if (prop.isUp) {
                                return (
                                    <>
                                        <RiseOutlined style={{ fontSize: "1.2em", color: "green" }} />
                                        <label style={{ fontSize: "1.2em", color: "green" }}>{prop.changeValue}</label>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <FallOutlined style={{ fontSize: "1.2em", color: "red" }} />
                                        <label style={{ fontSize: "1.2em", color: "red" }}>{prop.changeValue}</label>
                                    </>
                                )
                            }
                        })()}
                    </Space>
                </>
            )
        }
        return (<>
        </>)
    }


    return (
        <>
            <Card
                title={<MetricsTitle icon={prop.icon} value={prop.value} />}
                hoverable={true}
                bordered={false}
            >
                <Row justify={"space-between"}>
                    <Col>
                        <label className="metrics-card-content">{prop.content}</label>
                    </Col>
                    <Col>
                        {getChangeRatio()}
                    </Col>
                </Row>
            </Card >
        </>
    );
}

export default MetricsCard;