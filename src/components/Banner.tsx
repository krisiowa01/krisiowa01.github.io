interface BannerProps {
  onAboutClick: () => void;
}

export default function Banner({ onAboutClick }: BannerProps) {
  return (
    <div className="banner">
      <h1>KageWolffoto</h1>

      <a className="about-link" onClick={onAboutClick}>
        About Me
      </a>
    </div>
  );
}
