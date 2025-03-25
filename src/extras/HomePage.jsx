import React from "react";
import { FaWindows, FaLinux, FaAndroid } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-cover bg-center text-white " style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-extrabold text-red-500 uppercase">RGUKT Virtual Game</h1>
        <h2 className="text-4xl font-bold mt-4">Choose Your Platform</h2>
        <p className="text-lg mt-3 max-w-2xl text-gray-300">
          Experience RGUKT in an immersive 3D environment. Available on multiple platforms with interactive features.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button className="flex items-center bg-red-600 px-6 py-3 text-lg font-bold uppercase rounded hover:bg-red-700">
            <FaWindows className="mr-2" /> Windows
          </button>
          <button className="flex items-center bg-green-600 px-6 py-3 text-lg font-bold uppercase rounded hover:bg-green-700">
            <FaLinux className="mr-2" /> Ubuntu
          </button>
          <button className="flex items-center bg-yellow-600 px-6 py-3 text-lg font-bold uppercase rounded hover:bg-yellow-700">
            <FaAndroid className="mr-2" /> Android
          </button>
        </div>

       
      </div>
    </div>
  );
}