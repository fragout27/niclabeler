// App.js
import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageEditor from './components/ImageEditor';
import ImageNavigation from './components/ImageNavigation';
import LabelEditor from './components/LabelEditor';
import DownloadButtons from './components/DownloadButtons';
import LandingPage from './components/LandingPage';

function App() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [applyToAll, setApplyToAll] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleImagesUpload = (newImages) => {
    setImages(prevImages => [
      ...prevImages,
      ...newImages.map(img => ({
        file: img,
        fileName: img.name,
        labelPosition: 'top',
        isInverted: false,
        isOutside: false
      }))
    ]);
  };

  const updateImageSettings = (index, settings) => {
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages[index] = { ...newImages[index], ...settings };
      
      if (applyToAll) {
        return newImages.map(img => ({ ...img, ...settings }));
      } else {
        return newImages;
      }
    });
  };

  const handleApplyToAll = (checked) => {
    setApplyToAll(checked);
    if (checked && images.length > 0) {
      const currentSettings = {
        labelPosition: images[currentImageIndex].labelPosition,
        isInverted: images[currentImageIndex].isInverted,
        isOutside: images[currentImageIndex].isOutside
      };
      setImages(prevImages => prevImages.map(img => ({ ...img, ...currentSettings })));
    }
  };

  const handleStartLabeling = () => {
    setShowLandingPage(false);
  };

  return (
    <div className="container mx-auto p-4">
      {showLandingPage ? (
        <LandingPage onStartLabeling={handleStartLabeling} />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 font-serif italic">
            Niclabeler
          </h1>
          <ImageUploader onImagesUpload={handleImagesUpload} />
          {images.length > 0 && (
            <div className="mt-6">
              <ImageNavigation
                currentIndex={currentImageIndex}
                totalImages={images.length}
                onNavigate={setCurrentImageIndex}
              />
              <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/4">
                  <LabelEditor
                    labelPosition={images[currentImageIndex].labelPosition}
                    isInverted={images[currentImageIndex].isInverted}
                    isOutside={images[currentImageIndex].isOutside}
                    onUpdateSettings={(settings) => updateImageSettings(currentImageIndex, settings)}
                    applyToAll={applyToAll}
                    onApplyToAllChange={handleApplyToAll}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <ImageEditor
                    image={images[currentImageIndex]}
                    onUpdateSettings={(settings) => updateImageSettings(currentImageIndex, settings)}
                  />
                </div>
                <div className="w-full md:w-1/4">
                  <DownloadButtons
                    images={images}
                    currentIndex={currentImageIndex}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;