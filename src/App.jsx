import { useEffect, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
function App() {
    const inputRef = useRef();
    const [text, setText] = useState("");
    const [arrText, setArrText] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const beshifiedText = arrText.join("🤸");
    const [isCopy, setIsCopy] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        if (text) {
            setArrText(text.split(" "));
            setIsClicked(true);
            setText("");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(beshifiedText);
        setIsCopy(!isCopy);
    };
    return (
        <>
            <div className="relative w-full bg-[#2b5e69] py-20 h-screen  mx-auto px-8">
                <form
                    className="bg-[#eaefd7] w-full h-full mx-auto rounded-sm flex flex-col items-center space-y-8 p-4 md:p-8 md:max-w-md"
                    onSubmit={handleSubmit}
                >
                    <h1 className="title text-2xl md:text-3xl mb-4 font-black text-center italic">
                        BESHIFY🤸
                    </h1>

                    <input
                        ref={inputRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Enter text to beshify"
                        className="w-10/12 p-3  rounded-sm focus:outline-[#ccbcc9]"
                    />
                    <button
                        type="submit"
                        className="bg-[#2b5e69] text-white font-semibold px-12 py-2 rounded-sm md:hover:bg-[#692b5e] transition ease-in"
                    >
                        BESHIFY
                    </button>

                    {isClicked && (
                        <div className="w-10/12 mx-auto bg-white p-3 rounded-sm">
                            <p className="flex justify-between items-center ">
                                {beshifiedText}{" "}
                                <span
                                    className="cursor-pointer p"
                                    onClick={handleCopy}
                                >
                                    {!isCopy ? (
                                        <FaRegCopy className="text-gray-500 w-5" />
                                    ) : (
                                        <BsCheckLg />
                                    )}
                                </span>
                            </p>
                        </div>
                    )}
                </form>

                <div className="absolute bottom-0 left-0 flex w-full">
                    <p className="text-center w-full pb-2 font-medium">
                        Developed by &copy; Ibrahim Tangco
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
