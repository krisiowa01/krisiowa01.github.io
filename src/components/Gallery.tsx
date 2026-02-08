interface Photo {
  src: string;
  caption: string;
}

interface GalleryProps {
  photos: Photo[];
}

export default function Gallery({ photos }: GalleryProps) {
  return (
    <div className="gallery">
      {photos.map((photo, index) => {
        const srcPath = photo.src.startsWith("/") ? photo.src : `/${photo.src}`;
        return (
          <div className="gallery-item" key={index}>
            <img src={srcPath} alt={photo.caption} className="journal-image" />
            <div className="gallery-caption">{photo.caption}</div>
          </div>
        );
      })}
    </div>
  );
}
