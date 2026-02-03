interface GalleryProps {
  photos: any[];
  onOpen: (src: string, caption: string) => void;
}

export default function Gallery({ photos, onOpen }: GalleryProps) {
  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={photo.src}
            alt={photo.caption}
            className="journal-image"
            onClick={() => onOpen(photo.src, photo.caption)}
          />
        </div>
      ))}
    </div>
  );
}
