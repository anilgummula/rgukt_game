import React, { useState } from "react";
import { FaWindows, FaLinux, FaAndroid } from "react-icons/fa";
import Portfolio from "./Portfolio";
import UbuntuPopup from "./UbuntuPopup";
import CodeBlock from "./CodeBlock";

export default function LandingPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [showUbuntuPopup, setShowUbuntuPopup] = useState(false);

    const handleUbuntuDownload = (e) => {
        e.preventDefault(); // Prevent immediate navigation
        setShowUbuntuPopup(true);

        setTimeout(() => {
            window.location.href = "https://www.dropbox.com/scl/fi/aw6cuw55cc2pex7beizwp/rgukt-game.deb?rlkey=94y03l9dllqwmfdh0ucbdqlvi&st=ei2hemnw&dl=1";
        }, 1000); // Delay before starting download
    };

    return (
        <>
            <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center flex flex-col items-center justify-center py-20 px-4">
                <div className="text-center text-white px-4 max-w-3xl space-y-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-red-600 font-rajdhani">RGUKT Virtual Game</h1>
                    <h2 className="text-2xl text-yellow-200 sm:text-3xl font-bold uppercase">Choose Your Platform & Download</h2>
                    <p className="text-lg text-gray-100 font-semibold">
                        Experience <span className="text-yellow-400">RGUKT-B</span>  in an immersive 3D environment. Available on multiple platforms.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10">

                        <a className="flex items-center justify-center bg-emerald-600 px-6 py-3 text-lg font-bold uppercase rounded-md shadow-md hover:bg-emerald-800 transition-all"
                            href="https://www.dropbox.com/scl/fi/ao3z2ox3lfme46u4iv1w8/Rgukt-Game.exe?rlkey=2iju0i2kp2r913my5qmdfrgvg&st=60r7puxb&dl=1">
                            <FaWindows className="mr-2" /> Windows
                        </a>
                        <button className="flex items-center justify-center bg-emerald-600 px-6 py-3 text-lg font-bold uppercase rounded-md shadow-md hover:bg-emerald-800 transition-all"
                            onClick={handleUbuntuDownload}>
                            <FaLinux className="mr-2" /> Ubuntu
                        </button>
                        <button className="flex items-center justify-center bg-gray-600 px-6 py-3 text-lg font-bold uppercase rounded-md shadow-md hover:bg-gray-500 transition-all"
                            onClick={() => setShowPopup(true)}>
                            <FaAndroid className="mr-2" /> Android
                        </button>

                    </div>
                    {/* <UbuntuPopup onClose={() => setShowUbuntuPopup(false)} /> */}
                    <div className="flex justify-center items-center h-screen bg-transparent">
                        <CodeBlock />
                    </div>
                </div>
            </div>
            
            <div className="min-h-screen bg-black pb-20 px-4">
                <div className="flex flex-col text-white justify-center mx-auto w-full py-16">
                    <h1 className="font-bold text-2xl text-center p-2">TEAM</h1>
                    <p className="flex justify-center mx-auto text-sm text-yellow-400">Made with ❤️ by RGUKT-B students</p>
                    <div className="flex flex-wrap justify-center mt-6 gap-6">
                        <a href="https://in.linkedin.com/in/anil-gummula" target="_blank" className="w-full sm:w-auto">
                            <div className="flex items-center border-2 rounded-lg p-6 sm:p-10">
                                <img src="/dp.png" alt="" className="border-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                                <p className="ml-6 text-lg sm:text-xl font-semibold text-teal-300 underline">ANIL GUMMULA</p>
                            </div>
                        </a>

                        <a href="https://in.linkedin.com/in/talari-srinivas" target="_blank" className="w-full sm:w-auto">
                            <div className="flex items-center border-2 rounded-lg p-6 sm:p-10">
                                <img src="/srinivas-dp.jpg" alt="" className="border-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                                <p className="ml-6 text-lg sm:text-xl font-semibold text-yellow-200 underline">SRINIVAS TALARI</p>
                            </div>
                        </a>
                        
                    </div>
                </div>
                
                <div className="text-center text-white mt-8 pb-10 w-full px-4">
                <h3 className="text-3xl font-bold uppercase p-2 text-red-500">Feedback</h3>
                <p className="text-gray-300 mt-2 font-semibold">Let us know your thoughts about the game!</p>
                <form className="flex flex-col items-center mx-auto mt-6 space-y-4 w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg" 
                    action="https://getform.io/f/bdrnxpwb" method="POST">
                    
                    <label htmlFor="name" className="text-lg font-semibold text-gray-300">Enter Your Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Your Name"
                        required
                    />

                    <label htmlFor="feedback" className="text-lg font-semibold text-gray-300">Your Feedback</label>
                    <textarea 
                        name="feedback" 
                        className="w-full h-32 p-3 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500" 
                        placeholder="Write your feedback here..."
                        required
                    ></textarea>

                    <button 
                        type="submit" 
                        className="mt-4 bg-red-600 px-6 py-3 rounded-md uppercase font-bold hover:bg-red-700 transition-all w-full max-w-xs">
                        Submit Feedback
                    </button>
                </form>
            </div>
            </div>
            
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 px-4">
                    <div className="bg-white p-6 rounded-lg text-center shadow-xl max-w-sm w-full">
                        <h2 className="text-2xl font-bold text-red-600">Coming Soon!</h2>
                        <p className="mt-2 text-gray-700">This version will be available soon. Stay tuned!</p>
                        <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all" onClick={() => setShowPopup(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Ubuntu Popup */}
            {showUbuntuPopup && <UbuntuPopup onClose={() => setShowUbuntuPopup(false)} />}
        </>
    );
}
