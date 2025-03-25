import React, { useState } from "react";
import { FaWindows, FaLinux, FaAndroid } from "react-icons/fa";
import Portfolio from "./Portfolio";

export default function LandingPage() {
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  return (
    
    <>
    <div
      className=" min-h-screen bg-black flex flex-col items-center justify-center mx-auto py-20 "
    //   style={{ backgroundImage: "url('/bg.png')" }} // Ensure bg.png is in the 'public' folder
    >
      {/* Dark Overlay */}
      <div className=" bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className=" text-center text-white px-6 max-w-3xl space-y-16">
        {/* Game Title */}
        <h1 className="text-5xl font-extrabold uppercase text-red-600">RGUKT Virtual Game</h1>
        <h2 className="text-3xl font-bold mt-4 uppercase">Choose Your Platform & Download</h2>
        
        {/* Description */}
        <p className="text-lg mt-3 text-gray-300 font-semibold">
          Experience RGUKT in an immersive 3D environment. Available on multiple platforms with interactive features.
        </p>

        {/* Platform Buttons */}
        <div className="flex justify-center gap-6 mt-20">
          <a className="flex items-center justify-center bg-red-600 px-8 py-3 text-lg font-bold uppercase rounded-md shadow-md hover:bg-red-800 transition-all hover:cursor-pointer"
          href="https://www.dropbox.com/scl/fi/ao3z2ox3lfme46u4iv1w8/Rgukt-Game.exe?rlkey=2iju0i2kp2r913my5qmdfrgvg&st=60r7puxb&dl=1"
          >
            <FaWindows className="mr-2" /> Windows
          </a>
          <a className="flex items-center justify-center bg-red-600 px-8 py-3 text-lg font-bold uppercase rounded-md shadow-md hover:bg-red-800 transition-all"
           onClick={() => setShowPopup(true)}
          >
            <FaLinux className="mr-2" /> Ubuntu
          </a>
          <a className="flex items-center justify-center bg-red-600 px-8 py-3 text-lg font-bold uppercase rounded-md shadow-md hover:bg-red-800 transition-all"

           onClick={() => setShowPopup(true)}
          >
            <FaAndroid className="mr-2" /> Android
          </a>
        </div>

        {/* Account Message */}
        {/* <p className="mt-6 text-gray-400">
          You’ll need an account to log in and play. Don’t have one? 
          <a href="#" className="text-blue-400 underline ml-1">Create an Account</a>
        </p> */}
      </div>
       
            
    </div>
    {/* //second part */}
    <div className="min-h-screen bg-black pb-40">

        <div className=" flex flex-col text-white bg-black justify-center mx-auto w-full py-24">
                <h1 className="font-bold text-2xl w-full text-center p-2">TEAM</h1>
                <div className="flex justify-center mt-10 gap-10">
                        <a href="https://github.com/anilgummula" target="_blank">
                            <div className=" flex w-100 border-2 rounded-lg p-10 align-center justify-center">
                                <img src="/devil.jpg" alt="" className="border-2  w-14 h-14 rounded-full" />
                            
                                    <p className="mx-10 text-xl font-semibold text-teal-300 underline ">ANIL GUMMULA</p>
                            </div>
                        </a>

                        <a href="https://github.com/anilgummula" target="_blank">
                            <div className=" flex w-100 border-2 rounded-lg p-10 align-center justify-center">
                                <img src="/srinivas-dp.jpg" alt="" className="border-2 w-14 h-14 rounded-full align" />
                            
                                    <p className="mx-10 text-xl font-semibold text-yellow-200 underline">SRINIVAS TALARI</p>
                            </div>
                        </a>
                
                </div>
        </div>

        {/* other projects */}
        {/* <Portfolio/> */}

        {/* Feedback Section */}
        <div className=" text-center  text-white mt-8 pb-10 w-full">
            <h3 className="text-2xl font-bold uppercase p-2">Feedback</h3>
            <p className="text-gray-300 mt-2 font-semibold">Let us know your thoughts about the game!</p>
            <textarea
                className="mt-4 w-120 h-40 p-3 text-black rounded-md border-2"
                placeholder="Write your feedback here..."
            ></textarea>
            <br />
            <button className="mt-4 bg-red-600 px-6 py-2 rounded-md uppercase font-bold hover:bg-red-700 transition-all">
                Submit Feedback
            </button>
        </div>
    </div>
     {/* Pop-up Modal */}
     {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg text-center shadow-xl">
            <h2 className="text-2xl font-bold text-red-600">Coming Soon!</h2>
            <p className="mt-2 text-gray-700">The Android version will be available soon. Stay tuned!</p>
            <button 
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
              onClick={() => setShowPopup(false)} // Hide popup on click
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
