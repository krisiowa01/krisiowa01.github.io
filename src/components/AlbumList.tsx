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
<<<<<<< HEAD
      {albums.albums.map((album: any) => (
        <AlbumCard
          key={album.id}
          name={album.id}
          image={album.cover}
          headline={album.title}
          summary={album.description}
          onClick={() => onSelect(album.id)}
        />
=======
      {Object.entries(albums).map(([name, album]) => (
        <div className="album" key={name} onClick={() => onSelect(name)}>
          <img src={album.cover} alt={album.title} />
          <h2 className="headline">{album.title}</h2>
          <p className="summary">{album.description}</p>
        </div>
>>>>>>> main
      ))}
    </div>
  );
}
