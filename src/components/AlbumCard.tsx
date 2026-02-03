interface AlbumCardProps {
  name: string;
  image: string;
  headline: string;
  summary: string;
  onClick: () => void;
}

export default function AlbumCard({
  name,
  image,
  headline,
  summary,
  onClick
}: AlbumCardProps) {
  return (
    <article className="album" onClick={onClick}>
      <img loading="lazy" src={image} alt={name} />
      <h2 className="headline">{headline}</h2>
      <p className="summary">{summary}</p>
    </article>
  );
}
