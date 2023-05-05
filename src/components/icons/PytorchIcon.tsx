import Icon, { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import React from "react";


const svg = () => (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5357" width="1em" height="1em">
        <path fill="currentColor" d="M512.213333 1.706667l-299.946666 299.946666a419.498667 419.498667 0 0 0 0 596.266667 419.541333 419.541333 0 0 0 596.309333 0c169.386667-165.845333 169.472-433.962667 3.584-596.309333l-74.154667 74.112c123.52 123.52 123.52 324.608 0 448.128-123.477333 123.477333-324.608 123.477333-448.128 0C166.4 700.330667 166.4 499.2 289.877333 375.722667l197.632-197.589334 24.746667-28.288z m151.722667 165.802666a56.448 56.448 0 0 0-56.448 56.448 56.448 56.448 0 0 0 56.448 56.448 56.448 56.448 0 0 0 56.448-56.448 56.448 56.448 0 0 0-56.448-56.448z" p-id="5358">
        </path>
    </svg>
)

const Pytorch = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={svg} {...props} />
)

const PytorchIcon: React.FC = () => {
    return (
        <>
            <Pytorch />
        </>
    )
}

export default PytorchIcon;