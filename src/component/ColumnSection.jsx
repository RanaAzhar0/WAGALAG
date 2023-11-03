import React from "react";

function ColumnSection() {
  return (
    <div className="h-[50vh] flex items-center bg-green-700">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl max-sm:text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        What are you waiting for?
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur risus id est semper condimentum
text-white
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-sm text-base sm:text-sm md:text-lg lg:text-3xl">
          BUY TICKETS
        </button>
      </div>
    </div>
  );
}

export default ColumnSection;
