import React, { useState } from "react";
import { FaClipboard, FaTimes } from "react-icons/fa";

export default function UbuntuPopup({ onClose }) {
    const [copied, setCopied] = useState(false);

    const installCommand = `0 #Run this cmds after file download
1 cd ~/Downloads
2 sudo dpkg -i rgukt-game.deb
3 sudo apt-get install -f
4
5 #To Start the game
6 rgukt-game`

    const handleCopy = () => {
        navigator.clipboard.writeText(installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 px-4">
            <div className="bg-[#1e1e1e] text-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
                {/* Title */}
                <h2 className="text-xl font-bold mb-4 text-gray-300">PowerShell (Download setup commands)</h2>

                {/* Code Block */}
                <div className="bg-[#252526] p-4 rounded-md relative overflow-x-auto">
                    <pre className="text-sm text-green-400 whitespace-pre-wrap">{installCommand}</pre>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
                        onClick={handleCopy}
                    >
                        <FaClipboard className="mr-2" />
                        {copied ? "Copied!" : "Copy to clipboard"}
                    </button>
                    <button
                        className="text-gray-400 hover:text-white"
                        onClick={onClose}
                    >
                        <FaTimes size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
