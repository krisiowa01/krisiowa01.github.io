import { useState } from "react";
import Banner from "./components/Banner";
import AlbumList from "./components/AlbumList";
import Gallery from "./components/Gallery";
import About from "./components/About";
import BackButton from "./components/BackButton";
import "./style.css";
import albumsData from "./data/albums.json";
import { Albums, Album } from "./types/Albums";

const albums: Albums = albumsData as Albums;

function findAlbumById(albums: Album[], albumId: string): Album | undefined {
  for (const album of albums) {
    if (album.id === albumId) return album;
    if (album.albums) {
      const nested = findAlbumById(album.albums, albumId);
      if (nested) return nested;
    }
  }

  return undefined;
}

export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const handleSelectAlbum = (albumId: string) => {
    setSelectedAlbum(albumId);
    setShowAbout(false);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
    setSelectedAlbum(null);
  };

  const handleBack = () => {
    setSelectedAlbum(null);
    setShowAbout(false);
  };

  const activeAlbum = selectedAlbum ? findAlbumById(albums.albums, selectedAlbum) : undefined;
  const nestedAlbums = activeAlbum?.albums ?? [];

  return (
    <>
      <Banner onAboutClick={handleShowAbout} />

      {/* Home view */}
      {!selectedAlbum && !showAbout && (
        <AlbumList albums={albums.albums} onSelect={handleSelectAlbum} />
      )}

      {/* Album view with TOP + BOTTOM back buttons */}
      {selectedAlbum && !showAbout && (
        <>
          <BackButton onClick={handleBack} />   {/* TOP */}

          <Gallery photos={activeAlbum?.photos || []} />

          {nestedAlbums.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <AlbumList albums={nestedAlbums} onSelect={handleSelectAlbum} />
            </div>
          )}

          <BackButton onClick={handleBack} />   {/* BOTTOM */}
        </>
      )}

      {/* About view with TOP + BOTTOM back buttons */}
      {showAbout && (
        <>
          <BackButton onClick={handleBack} />   {/* TOP */}
          <About />
          <BackButton onClick={handleBack} />   {/* BOTTOM */}
        </>
      )}
    </>
  );
}
