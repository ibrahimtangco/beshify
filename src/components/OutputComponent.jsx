import React from "react";
import { FiCopy } from "react-icons/fi";

const OutputComponent = ({ beshifiedText }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(beshifiedText).then(() => {
            alert("Success copy");
        });
    };
    return (
        <div className="bg-white flex items-center rounded-sm">
            <span className="w-full p-2 rounded-sm text-[#60809] text-left">
                {beshifiedText}
            </span>
            <span onClick={handleCopy} className="px-4 cursor-pointer">
                <FiCopy className="text-[#60809]" />
            </span>
        </div>
    );
};

export default OutputComponent;
