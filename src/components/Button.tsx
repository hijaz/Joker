export enum Variants {
  blue = "bg-lime-600",
  green = "bg-sky-600",
}

type Props = {
  onClick: () => void;
  label: string;
  color: Variants;
  className?: string;
};

function Button({ onClick, label, color, className }: Props) {
  return (
    <button
      className={`${color} ${className} p-6 rounded-full text-white max-w-fit`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
