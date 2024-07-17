// components/ImageNavigation.js
import React from 'react';

const ImageNavigation = ({ currentIndex, totalImages, onNavigate }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <span className="font-bold mb-2">Navigation</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-bold">
          Image {currentIndex + 1} of {totalImages}
        </span>
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          disabled={currentIndex === totalImages - 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageNavigation;