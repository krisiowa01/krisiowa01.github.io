<<<<<<< HEAD
export default function BackButton({ onClick }: { onClick: () => void }) {
=======
interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
>>>>>>> main
  return (
    <button className="back-button" onClick={onClick}>
      Back
    </button>
  );
}
