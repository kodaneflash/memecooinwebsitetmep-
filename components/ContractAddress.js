"use client";

import React from "react";

const ContractAddress = () => {
  const handleCopyClick = () => {
    const contractAddress = "8J5r6kteet9Cm6waM2MWB2SNeu97CZ1jTKSDG76MoON";
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied to clipboard!");
  };

  return (
    <div className="text-center p-8">
      <div className="mb-8 flex justify-center">
        <div className="bg-black rounded-2xl p-8 border-4 border-dashed border-cosmic-cyan">
          <h2 className="text-4xl font-stopbuck text-duis text-shadow text-center mb-4">
            CONTRACT ADDRESS
          </h2>
          <div className="bg-white rounded-lg p-4 font-mono text-lg text-black break-all">
            COMING SOON!
          </div>
        </div>
      </div>

      <div className="group relative block w-fit mx-auto transition-transform hover:scale-105">
        <span className="absolute inset-0 bg-cosmic-coral rounded-xl border-2 border-dashed border-black"></span>

        <div className="relative h-full transform border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 rounded-xl shadow-lg shadow-gray-500">
          <button 
            onClick={handleCopyClick}
            className="transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium text-cosmic-pink shadow-2xl bg-gray-700 hover:bg-cosmic-pink hover:text-white hover:outline-cosmic-cyan outline outline-2 outline-offset-0"
          >
            Copy Contract Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractAddress;
