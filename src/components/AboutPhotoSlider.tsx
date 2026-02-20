import React, { useState, useEffect } from "react";

interface AboutPhotoSliderProps {
  images: string[];
  interval?: number;
}

export default function AboutPhotoSlider({
  images,
  interval = 5000
}: AboutPhotoSliderProps) {
  const [index, setIndex] = useState(0);
 
useEffect(() => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, [images]);


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="about-photo-slider">
      <div className="fade-wrapper">
        {images.map((src, i) => (
          <div
            key={i}
            className={`fade-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}
