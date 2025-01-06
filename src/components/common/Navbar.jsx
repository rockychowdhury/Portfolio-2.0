import React, { useRef } from "react";
import { toast } from 'react-toastify';

const Navbar = () => {
    const textRef = useRef();
    const copyToClipboard = () => {
        if (textRef.current) {
            const textToCopy = textRef.current.textContent;
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    toast.success("Text copied to clipboard!");
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        }
    };
    return (
        <div className="py-8 flex items-center justify-between">
            <div className="flex gap-8">
                <div className="flex border rounded-full w-fit items-center drop-shadow-sm ">
                    <h2  ref={textRef}  className="font-medium text-lg px-4">rocky20809@gmail.com</h2>
                    <button  onClick={copyToClipboard}  className="bg-marble hover:scale-105 transition-transform hover:border-action border border-transparent px-6 py-2 rounded-full font-semibold" >Copy</button>
                </div>
                <div className="">
                    <button className="bg-marble px-6 py-2 rounded-full font-semibold" >Resume</button>
                </div>
            </div>
            <div>
                <h1>LinkedIn / GitHub / LeetCode</h1>
            </div>
        </div>
    );
};

export default Navbar;