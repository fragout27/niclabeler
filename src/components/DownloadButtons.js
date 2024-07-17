// components/DownloadButtons.js
import React from 'react';

const DownloadButtons = ({ images, currentIndex }) => {
  const downloadImage = (index) => {
    const img = new Image();
    img.onload = () => {
      const labelHeight = Math.max(img.height * 0.28, 50);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = img.width;
      canvas.height = images[index].isOutside 
        ? img.height + labelHeight
        : img.height;
      
      if (images[index].isOutside) {
        if (images[index].labelPosition === 'top') {
          ctx.drawImage(img, 0, labelHeight, img.width, img.height);
        } else {
          ctx.drawImage(img, 0, 0, img.width, img.height);
        }
      } else {
        ctx.drawImage(img, 0, 0, img.width, img.height);
      }
      
      drawLabel(ctx, img.width, img.height, images[index].labelPosition, images[index].isInverted, images[index].isOutside);
      
      const link = document.createElement('a');
      
      // Get the original file name and add "-niclabel" before the extension
      const originalName = images[index].fileName;
      const nameParts = originalName.split('.');
      const newName = nameParts.length > 1
        ? `${nameParts.slice(0, -1).join('.')}-niclabel.${nameParts[nameParts.length - 1]}`
        : `${originalName}-niclabel`;
      
      link.download = newName;
      link.href = canvas.toDataURL();
      link.click();
    };
    img.src = URL.createObjectURL(images[index].file);
  };

  const drawLabel = (ctx, width, height, position, isInverted, isOutside) => {
    const labelHeight = Math.max(height * 0.28, 50);
    let y;
    
    if (isOutside) {
      y = position === 'top' ? 0 : height;
    } else {
      y = position === 'top' ? 0 : height - labelHeight;
    }

  ctx.fillStyle = isInverted ? 'white' : 'black';
  ctx.fillRect(0, y, width, labelHeight);

  ctx.fillStyle = isInverted ? 'black' : 'white';
  const text = 'WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.';
  
  // Split text into words
  const words = text.split(' ');
  let lines = [];
  let currentLine = words[0];

  // Calculate font size (adjust this value to fit your needs)
  const fontSize = Math.min(labelHeight / 4, width / 20);
  ctx.font = `bold ${fontSize}px Arial`;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < 0.9 * ctx.canvas.width) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);

  // Draw each line
  const lineHeight = fontSize * 1.2;
  const totalTextHeight = lineHeight * lines.length;
  let startY = y + (labelHeight - totalTextHeight) / 2 + fontSize / 2;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, startY + index * lineHeight);
  });
};

  const drawImageNumber = (ctx, number) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillRect(ctx.canvas.width - 40, ctx.canvas.height - 30, 40, 30);
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText(number, ctx.canvas.width - 5, ctx.canvas.height - 5);
  };

  const downloadAllImages = () => {
    images.forEach((_, index) => downloadImage(index));
  };

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => downloadImage(currentIndex)}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Download this image
      </button>
      <button
        onClick={downloadAllImages}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Download all images
      </button>
    </div>
  );
};

export default DownloadButtons;