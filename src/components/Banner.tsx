import React from "react";

interface BannerProps {
  onAboutClick: () => void;
}

export default function Banner({ onAboutClick }: BannerProps) {
  return (
    <div className="banner">
      <h1 className="kage-font">KageWolffoto</h1>
      <p>A Personal Journey Through Time and Space</p>

      <button className="about-link" onClick={onAboutClick}>
        About Me
      </button>
    </div>
  );
}
