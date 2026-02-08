export interface Photo {
  src: string;
  caption: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: Photo[];
}

export interface Albums {
  albums: Album[];
}
