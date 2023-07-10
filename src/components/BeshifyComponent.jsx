import React, { useState, useRef } from "react";
import OutputComponent from "./OutputComponent";

const BeshifyComponent = () => {
    const [text, setText] = useState("");
    const inputRef = useRef();
    const [isClicked, setIsClicked] = useState(false);
    const [beshifiedText, setBeshifiedText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            setIsClicked(true);
            const trimmedText = text.trim();
            const newText = trimmedText.replace(/\s+/g, " ");
            const final = newText.replace(/\s+/g, "🤸");
            setBeshifiedText(final);
            setText("");
        } else {
            inputRef.current.focus();
        }
    };

    return (
        <div className="bg-[#e0e6eb] py-8 px-4 rounded-md w-10/12 mx-auto h-5/6 min-w-fit md:h-auto md:max-w-lg ">
            <h1 className="mb-8 font-title text-center text-3xl font-black">
                🤸BESHIFY🤸
            </h1>

            <form
                onSubmit={handleSubmit}
                className="w-10/12 mx-auto text-center space-y-8"
            >
                <input
                    ref={inputRef}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className="w-full p-2 rounded-sm focus:outline-[#587489] text-[#60809]"
                    type="text"
                    placeholder="Enter text to beshify..."
                />
                <button
                    type="submit"
                    className="bg-[#618298] px-12 py-2 font-medium  text-white rounded-sm "
                >
                    Beshify
                </button>
                {isClicked && <OutputComponent beshifiedText={beshifiedText} />}
            </form>
        </div>
    );
};

export default BeshifyComponent;
