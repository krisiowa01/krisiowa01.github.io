interface ImageModalProps {
  open: boolean;
  src: string;
  caption: string;
  onClose: () => void;
}

export default function ImageModal({ open, src, caption, onClose }: ImageModalProps) {
  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <img className="modal-content" src={src} alt="" />
        <p className="modal-caption">{caption}</p>
      </div>
    </div>
  );
}
