import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";

const OutputComponent = ({ beshifiedText }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(beshifiedText);
        setIsCopied(true);
    };

    useEffect(() => {
        let timeoutId;

        if (isCopied) {
            // Set a timeout to hide the element after one second
            timeoutId = setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        }

        // Clean up the timeout when the component unmounts or when showElement changes
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isCopied]);

    return (
        <div className="bg-white flex items-center rounded-sm transition-opacity">
            <span className="w-full p-2 rounded-sm text-[#60809] text-left">
                {beshifiedText}
            </span>
            <span onClick={handleCopy} className="px-4 cursor-pointer">
                <FiCopy className="text-[#60809]" />
            </span>
            <div className="absolute top-5 right-5 inset-x-auto">
                {isCopied && (
                    <div
                        id="data-collapse-toggle"
                        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                        role="alert"
                    >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            Beshify copied succesfully
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OutputComponent;
