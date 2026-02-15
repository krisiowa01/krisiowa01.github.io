export interface Photo {
  src: string;
  caption: string;
  captionClass?: string;
}

export interface Album {
  cover: string;
  title: string;
  description: string;
  photos: Photo[];
}

export interface Albums {
  [key: string]: Album;
}
