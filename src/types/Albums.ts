export interface Photo {
  src: string;
  caption: string;
  captionClass?: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: Photo[];
  albums?: Album[];
}

export interface Albums {
  albums: Album[];
}
