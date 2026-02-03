import { useState } from "react";
import Banner from "./components/Banner";
import AlbumList from "./components/AlbumList";
import Gallery from "./components/Gallery";
import About from "./components/About";
import BackButton from "./components/BackButton";
import "./style.css";

import albumsData from "./data/albums.json";
import type { Albums } from "./types";

const albums: Albums = albumsData as Albums;

export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState<boolean>(false);

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

      {!selectedAlbum && !showAbout && (
        <AlbumList albums={albums} onSelect={handleSelectAlbum} />
      )}

      {selectedAlbum && !showAbout && (
        <Gallery
          albumName={selectedAlbum}
          photos={albums[selectedAlbum].photos}
        />
      )}

      {showAbout && <About />}

      {(selectedAlbum || showAbout) && <BackButton onClick={handleBack} />}
    </>
  );
}
