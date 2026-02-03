interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button className="back-button" onClick={onClick}>
      Back
    </button>
  );
}
