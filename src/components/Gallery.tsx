import type { Photo } from "../types";

interface GalleryProps {
  albumName: string;
  photos: Photo[];
}

export default function Gallery({ albumName: _albumName, photos }: GalleryProps) {
  return (
    <div className="gallery">
      {photos.map((photo: Photo, index: number) => (
        <div className="gallery-item" key={index}>
          <img
            src={photo.src}
            alt={photo.caption}
            className="watermarked"
          />
          <p className="gallery-caption" style={{ fontFamily: '"Playfair Display", serif' }}>
            {photo.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
