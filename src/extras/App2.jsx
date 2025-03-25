import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <header className="text-4xl font-bold mt-10 text-teal-400">RGUKT University 3D Game</header>
      
      <section className="mt-6 max-w-3xl text-center">
        <p className="text-lg">Experience RGUKT University like never before with our interactive 3D game! Walk around the campus, explore locations, and have fun in a virtual version of our college.</p>
      </section>

      <section className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400">Game Features</h2>
          <ul className="list-disc pl-5 mt-2 text-lg">
            <li>Fully interactive 3D environment</li>
            <li>Explore the RGUKT campus</li>
            <li>Fun and immersive gameplay</li>
            <li>Developed using Unity & Blender</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400">Meet the Team</h2>
          <p className="mt-2 text-lg">This project was developed by **Srinivas & Anil**, CSE 3rd Year students at RGUKT.</p>
          <ul className="list-disc pl-5 mt-2 text-lg">
            <li><b>Srinivas</b> - 3D Model Design (Blender)</li>
            <li><b>Anil</b> - Coding & Game Development (Unity, C#)</li>
          </ul>
        </div>
      </section>

      <button className="mt-8 px-6 py-3 bg-teal-500 text-black text-lg font-semibold rounded-xl shadow-md hover:bg-teal-400">
        Download / Play Game
      </button>
    </div>
  );
};

export default App;