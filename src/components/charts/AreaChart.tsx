import React from "react";
import { Area } from "@ant-design/plots";

interface AreaData {
    xValue: string
    yValue: number
    type: string
}

const data: AreaData[] = [
    { xValue: "2023/04/15", yValue: 20, type: "running" },
    { xValue: "2023/04/15", yValue: 30, type: "stop" },
    { xValue: "2023/04/16", yValue: 18, type: "running" },
    { xValue: "2023/04/16", yValue: 32, type: "stop" },
    { xValue: "2023/04/17", yValue: 10, type: "running" },
    { xValue: "2023/04/17", yValue: 40, type: "stop" },
    { xValue: "2023/04/18", yValue: 20, type: "running" },
    { xValue: "2023/04/18", yValue: 30, type: "stop" },
    { xValue: "2023/04/19", yValue: 11, type: "running" },
    { xValue: "2023/04/19", yValue: 39, type: "stop" },
    { xValue: "2023/04/20", yValue: 23, type: "running" },
    { xValue: "2023/04/20", yValue: 27, type: "stop" },
    { xValue: "2023/04/21", yValue: 50, type: "running" },
    { xValue: "2023/04/21", yValue: 0, type: "stop" },
    { xValue: "2023/04/22", yValue: 10, type: "running" },
    { xValue: "2023/04/22", yValue: 40, type: "stop" },
    { xValue: "2023/04/23", yValue: 20, type: "running" },
    { xValue: "2023/04/23", yValue: 30, type: "stop" },
];

const AreaChart: React.FC = () => {

    const config = {
        height: 250,
        smooth: true,
        data,
        xField: "xValue",
        yField: "yValue",
        seriesField: "type",
        areaStyle: (e: AreaData) => {
            // 直接打印e的话是每个type的第一个数据，也就是e.type就是data里面写好的type
            if (e.type == "running") {
                return {
                    fill: "green",
                    fillOpacity: 0.2,// 透明度
                }
            } else {
                return {
                    fill: "red",
                    fillOpacity: 0.2,
                }
            }
        },
        line: {
            color: ["green", "red"]
        },
        colorField: "type",
        color: ["green", "red"],
        slider: {
            start: 0.1,
            end: 0.9,
        },
        xAxis: {
            range: [0, 1],
        },
    };

    return <Area {...config} />;
}

export default AreaChart;