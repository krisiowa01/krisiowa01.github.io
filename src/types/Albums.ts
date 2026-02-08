export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: string[];   // ← important
}

export interface Albums {
  albums: Album[];
}
