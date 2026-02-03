import React from "react";

interface BannerProps {
  onAbout: () => void;
}

export default function Banner({ onAbout }: BannerProps) {
  return (
    <div className="banner">
      <h1 className="kage-font">KageWolffoto</h1>
      <p>Capturing Moments, Creating Memories</p>

      <button className="about-link" onClick={onAbout}>
        About Me
      </button>
    </div>
  );
}
