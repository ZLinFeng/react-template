import React, { useEffect, useState } from "react";
import { Liquid } from "@ant-design/plots";

interface LiquidValue {
    label: string
    ratio: number
}

const LiquidChart: React.FC<LiquidValue> = (prop) => {

    const [ratioValue, setRatioValue] = useState(0.0)
    const [color, setColor] = useState("#2593fc")

    const formatRatio = () => {
        if (prop.ratio > 1) {
            setRatioValue(1.0)
            console.error("Ratio value[%s] to LiquidChart is greater than 1.", prop.ratio)
        }

        if (prop.ratio < 0) {
            setRatioValue(0.0)
            console.error("Ratio value[%s] to LiquidChart is less than 0.", prop.ratio)
        }

        setRatioValue(Number(prop.ratio.toFixed(4)))
        console.log("Ratio value is: %f", ratioValue)
    }

    const changeColor = () => {
        if (ratioValue > 0.9) {
            setColor("#f5222d")
        } else if (ratioValue > 0.7) {
            setColor("#faad14")
        }
    }

    useEffect(() => {
        formatRatio()
        changeColor()
    });

    const config = {
        width: 200,
        height: 200,
        statistic: {
            title: {
                content: prop.label,
                style: {
                    fontSize: "20px"
                }
            },
            content: {
                style: {
                    fontSize: "28px"
                }
            }
        },
        percent: ratioValue,
        outline: {
            border: 4,
            distance: 8,
        },
        wave: {
            length: 128,
        },
        liquidStyle: {
            fill: color,
            fillOpacity: 0.5,
            stroke: color,
            lineWidth: 1,
            //lineDash: [4, 5],
            strokeOpacity: 0.7,
            shadowColor: color,
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: 'pointer'
        }
    };

    return (
        <>
            <Liquid {...config} />
        </>
    );
}

export default LiquidChart;