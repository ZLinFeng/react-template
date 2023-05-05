import React from "react";
import { Column } from "@ant-design/plots"

interface ColumnData {
    xValue: string
    yValue: number
    type: string
}

const data: ColumnData[] = [
    { xValue: "2023/04/16", yValue: 90, type: "Memory" },
    { xValue: "2023/04/16", yValue: 80, type: "Core" },
    { xValue: "2023/04/16", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/17", yValue: 90, type: "Memory" },
    { xValue: "2023/04/17", yValue: 80, type: "Core" },
    { xValue: "2023/04/17", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/18", yValue: 90, type: "Memory" },
    { xValue: "2023/04/18", yValue: 80, type: "Core" },
    { xValue: "2023/04/18", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/19", yValue: 90, type: "Memory" },
    { xValue: "2023/04/19", yValue: 80, type: "Core" },
    { xValue: "2023/04/19", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/20", yValue: 90, type: "Memory" },
    { xValue: "2023/04/20", yValue: 80, type: "Core" },
    { xValue: "2023/04/20", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/21", yValue: 90, type: "Memory" },
    { xValue: "2023/04/21", yValue: 80, type: "Core" },
    { xValue: "2023/04/21", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/22", yValue: 90, type: "Memory" },
    { xValue: "2023/04/22", yValue: 80, type: "Core" },
    { xValue: "2023/04/22", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/23", yValue: 90, type: "Memory" },
    { xValue: "2023/04/23", yValue: 80, type: "Core" },
    { xValue: "2023/04/23", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/24", yValue: 90, type: "Memory" },
    { xValue: "2023/04/24", yValue: 80, type: "Core" },
    { xValue: "2023/04/24", yValue: 20, type: "HDFS" },
    { xValue: "2023/04/25", yValue: 90, type: "Memory" },
    { xValue: "2023/04/25", yValue: 80, type: "Core" },
    { xValue: "2023/04/25", yValue: 20, type: "HDFS" },
]

const ColumnChart: React.FC = () => {

    const config = {
        height: 363,
        data,
        xField: "xValue",
        yField: "yValue",
        seriesField: "type",
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };

    return (
        <>
            <Column {...config} />
        </>
    );
}

export default ColumnChart;