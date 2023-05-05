import React, { useEffect, useState } from "react";
import moment from "moment";

const Timer: React.FC = () => {

    const [timer, setTimer] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

    useEffect(() => {
        setInterval(() => {
            let time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            setTimer(time);
        }, 1000);
    });

    return (
        <>
            <label style={{ color: "#8c8c8c" }}>{timer}</label>
        </>
    );
}

export default Timer;