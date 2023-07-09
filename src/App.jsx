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
        setIsCopy(true);
    };
    return (
        <>
            <div className=" w-full bg-[#2b5e69] h-screen flex justify-center items-center m-auto">
                <form
                    className="relative bg-[#eaefd7] h-5/6 w-11/12 mx-auto rounded-md p-8 flex flex-col space-y-10 md:max-w-md min-w-max"
                    onSubmit={handleSubmit}
                >
                    <h1 className="title text-3xl mb-4 font-black text-center italic">
                        BESHIFY APP🤸
                    </h1>

                    <input
                        ref={inputRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Enter text to beshify"
                        className=" w-full p-3 rounded-sm focus:outline-[#ccbcc9]"
                    />
                    <button
                        type="submit"
                        className="bg-[#2b5e69] text-white font-semibold px-12 py-2 rounded-sm md:hover:bg-[#692b5e] transition ease-in"
                    >
                        BESHIFY
                    </button>

                    {isClicked && (
                        <div className="w-full mx-auto bg-white p-3 rounded-sm">
                            <p className="flex justify-between items-center ">
                                {beshifiedText}{" "}
                                <span
                                    className="cursor-pointer"
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

                    <div className="absolute bottom-0  flex w-full inset-x-0">
                        <p className="text-center w-full pb-2 font-medium">
                            Developed by &copy; Ibrahim Tangco
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
