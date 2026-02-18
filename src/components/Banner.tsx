import React, { useState, useEffect } from "react";

interface BannerProps {
  onAboutClick: () => void;
}

const sliderImages = [
  "/images/banner/DSC02493.webp",
  "/images/banner/DSC02795.webp",
  "/images/banner/DSC03693.webp"
];

export default function Banner({ onAboutClick }: BannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="banner slider-banner"
      style={{ backgroundImage: `url(${sliderImages[index]})` }}
    >
      <h1 className="kage-font">KageWolffoto</h1>
      <p>A Personal Journey Through Time and Space</p>

      <button className="about-link" onClick={onAboutClick}>
        About Me
      </button>
    </div>
  );
}
