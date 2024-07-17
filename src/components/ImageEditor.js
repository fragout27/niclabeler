// components/ImageEditor.js
import React, { useRef, useEffect } from 'react';

const ImageEditor = ({ image, onUpdateSettings }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      const labelHeight = Math.max(img.height * 0.28, 50);
      canvas.width = img.width;
      canvas.height = image.isOutside 
        ? img.height + labelHeight
        : img.height;
      
      if (image.isOutside) {
        if (image.labelPosition === 'top') {
          ctx.drawImage(img, 0, labelHeight, img.width, img.height);
        } else {
          ctx.drawImage(img, 0, 0, img.width, img.height);
        }
      } else {
        ctx.drawImage(img, 0, 0, img.width, img.height);
      }
      
      drawLabel(ctx, img.width, img.height, image.labelPosition, image.isInverted, image.isOutside);
    };
    img.src = URL.createObjectURL(image.file);
  }, [image]);

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

  return <canvas ref={canvasRef} className="max-w-full h-auto" />;
};

export default ImageEditor;