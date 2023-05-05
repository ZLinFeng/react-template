import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NavValue {
    key: string,
    value: string,
    link: string
}

const NavItem: React.FC<NavValue> = (pro: NavValue) => {

    const history = useNavigate();

    const jump = () => {
        history(pro.link);
    }

    useEffect(() => {
        console.log(pro);
    });

    return (
        <>
            <div onClick={jump} className="nav-item">
                {pro.value}
            </div>
        </>
    )
}

export default NavItem;