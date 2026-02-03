export default function About() {
  return (
    <div className="about-section" style={{ display: "block" }}>
      <h2>About Me</h2>

      <p>
        Hello! Thank you for visiting my photography portfolio. I'm a passionate
        photographer capturing moments of beauty and emotion in the world around
        me...
      </p>

      <div className="about-photos">
        <img src="/images/about/IMG_6072_jpg.webp" alt="Profile" />
        <img src="/images/about/DSC02914.webp" alt="Camera" />
        <img src="/images/about/IMG_0388.webp" alt="Nature" />
      </div>
    </div>
  );
}
