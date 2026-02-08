<<<<<<< HEAD
import React from "react";

=======
>>>>>>> main
interface BannerProps {
  onAboutClick: () => void;
}

export default function Banner({ onAboutClick }: BannerProps) {
  return (
    <div className="banner">
<<<<<<< HEAD
      <h1 className="kage-font">KageWolffoto</h1>
      <p>Capturing Moments, Creating Memories</p>

      <button className="about-link" onClick={onAboutClick}>
        About Me
      </button>
=======
      <h1>KageWolffoto</h1>

      <a className="about-link" onClick={onAboutClick}>
        About Me
      </a>
>>>>>>> main
    </div>
  );
}
