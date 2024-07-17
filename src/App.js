// App.js
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Load Buy Me a Coffee widget
    const script = document.createElement('script');
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-id', 'niclabeler');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', 'Coffee + Nicotine = :)');
    script.setAttribute('data-color', '#5F7FFF');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          {/* Add Florida Smoke Free Association footer */}
          <footer className="mt-12 text-center">
            <p className="text-gray-600">Brought to you by</p>
            <img 
              src="/fsfalogo.png" 
              alt="Florida Smoke Free Association" 
              className="mx-auto my-2 max-w-xs"
            />
            <p className="text-gray-600 font-semibold">Florida Smoke Free Association</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;