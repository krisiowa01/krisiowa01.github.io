<<<<<<< HEAD
import AlbumCard from "./AlbumCard";

interface AlbumListProps {
  albums: any;
  onSelect: (albumName: string) => void;
=======
import type { Albums } from "../types";

interface AlbumListProps {
  albums: Albums;
  onSelect: (name: string) => void;
>>>>>>> main
}

export default function AlbumList({ albums, onSelect }: AlbumListProps) {
  return (
    <div className="albums">
      {albums.albums.map((album: any) => (
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
