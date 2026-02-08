import AlbumCard from "./AlbumCard";
import type { Album } from "../types/Albums";

interface AlbumListProps {
  albums: Album[];
  onSelect: (albumName: string) => void;
}

export default function AlbumList({ albums, onSelect }: AlbumListProps) {
  return (
    <div className="albums">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          name={album.id}
          image={album.cover}
          headline={album.title}
          summary={album.description}
          onClick={() => onSelect(album.id)}
        />
      ))}
    </div>
  );
}
