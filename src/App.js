// App.js
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ImageUploader from './components/ImageUploader';
import ImageEditor from './components/ImageEditor';
import ImageNavigation from './components/ImageNavigation';
import LabelEditor from './components/LabelEditor';
import DownloadButtons from './components/DownloadButtons';
import LandingPage from './components/LandingPage';
import logo from './NL_Logo.png';

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
    script.setAttribute('data-message', 'Buy me a coffee :)');
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

  const FooterComponent = () => (
    <footer className="mt-12 text-center">
      <p className="text-gray-600">Brought to you by</p>
      <img 
        src="/fsfalogo.png" 
        alt="Florida Smoke Free Association" 
        className="mx-auto my-2 max-w-xs"
      />
      <p className="text-gray-600 font-semibold">Florida Smoke Free Association</p>
    </footer>
  );

  return (
    <div className="container mx-auto p-4">
      {showLandingPage ? (
        <>
          <LandingPage onStartLabeling={handleStartLabeling} />
          <FooterComponent />
        </>
      ) : (
        <>       
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Nic Labeler
            </h1>
            <img src={logo} alt="Nic Labeler Logo" className="ml-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"/>
          </div>
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
          <FooterComponent />
        </>
      )}
      <Analytics />
    </div>
  );
}

export default App;