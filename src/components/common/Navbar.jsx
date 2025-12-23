import React, { useRef } from "react";
import { toast } from 'react-toastify';
import { CircleArrowDown } from 'lucide-react';
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
    const resumeLink ="https://drive.google.com/uc?export=download&id=1zK5LxNeAA7_JdWgvgICkm-c-lkrZOSlF";
    return (
        <div className="py-8 flex items-center justify-between">
            <div className="flex gap-8">
                <div className="flex border border-darkCard rounded-full w-fit items-center drop-shadow-sm bg-darkCard/30 backdrop-blur-sm">
                    <h2 ref={textRef} className="font-medium text-lg px-4 text-darkText">rocky20809@gmail.com</h2>
                    <button onClick={copyToClipboard} className="bg-darkCard hover:bg-darkCard/80 hover:scale-105 transition-transform hover:border-accent border border-accent/30 px-6 py-2 rounded-full font-semibold text-accent" >Copy</button>
                </div>
                <div className="">
                    <button onClick={() => {
                        window.open(resumeLink, "_blank");
                    }} className="bg-accent hover:bg-highlight hover:scale-105 transition shadow-glow text-darkBg border-accent border px-6 py-2 flex items-center gap-3 rounded-full font-semibold" >Resume <CircleArrowDown size={25} /></button>
                </div>
            </div>
            <div>
                <h1 className="text-accent font-semibold">LinkedIn / GitHub / LeetCode</h1>
            </div>
        </div>
    );
};

export default Navbar;