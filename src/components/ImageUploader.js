// components/ImageUploader.js
import React, { useRef } from 'react';

const ImageUploader = ({ onImagesUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    onImagesUpload(files);
  };

  return (
    <div className="mb-4 flex justify-center"> {/* Added flex and justify-center */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Images
      </button>
    </div>
  );
};

export default ImageUploader;