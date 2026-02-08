import { useState } from "react";
import Banner from "./components/Banner";
import AlbumList from "./components/AlbumList";
import Gallery from "./components/Gallery";
import About from "./components/About";
import BackButton from "./components/BackButton";
import "./style.css";

import albumsData from "./data/albums.json";
<<<<<<< HEAD
import { Albums } from "./types/Albums";
=======
import type { Albums } from "./types";
>>>>>>> main

const albums: Albums = albumsData as Albums;

export default function App() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
<<<<<<< HEAD
  const [showAbout, setShowAbout] = useState(false);
=======
  const [showAbout, setShowAbout] = useState<boolean>(false);
>>>>>>> main

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
<<<<<<< HEAD
          photos={albums.albums.find(a => a.id === selectedAlbum)?.photos || []}
=======
          photos={albums[selectedAlbum].photos}
>>>>>>> main
        />
      )}

      {showAbout && <About />}

      {(selectedAlbum || showAbout) && <BackButton onClick={handleBack} />}
    </>
  );
}
