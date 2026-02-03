import type { Albums } from "../types";

interface AlbumListProps {
  albums: Albums;
  onSelect: (name: string) => void;
}

export default function AlbumList({ albums, onSelect }: AlbumListProps) {
  return (
    <div className="albums">
      {Object.entries(albums).map(([name, album]) => (
        <div className="album" key={name} onClick={() => onSelect(name)}>
          <img src={album.cover} alt={album.title} />
          <h2 className="headline">{album.title}</h2>
          <p className="summary">{album.description}</p>
        </div>
      ))}
    </div>
  );
}
