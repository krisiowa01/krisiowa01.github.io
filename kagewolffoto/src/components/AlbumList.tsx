import AlbumCard from "./AlbumCard";

interface AlbumListProps {
  albums: any;
  onSelect: (albumName: string) => void;
}

export default function AlbumList({ albums, onSelect }: AlbumListProps) {
  return (
    <div className="albums">
      {Object.entries(albums).map(([key, album]: any) => (
        <AlbumCard
          key={key}
          name={key}
          image={album.cover}
          headline={album.title}
          summary={album.description}
          onClick={() => onSelect(key)}
        />
      ))}
    </div>
  );
}
