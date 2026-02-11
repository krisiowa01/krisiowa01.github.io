import { useState } from "react";
import Banner from "./components/Banner";
import AlbumList from "./components/AlbumList";
import Gallery from "./components/Gallery";
import About from "./components/About";
import BackButton from "./components/BackButton";
import "./style.css";
import albumsData from "./data/albums.json";
import { Albums } from "./types/Albums";

const albums: Albums = albumsData as Albums;

export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const handleSelectAlbum = (albumName: string) => {
    setSelectedAlbum(albumName);
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

          <Gallery
            photos={
              albums.albums.find(a => a.id === selectedAlbum)?.photos || []
            }
          />

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
