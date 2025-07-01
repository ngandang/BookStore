interface ButtonProps {
  label: string;
  color?: string;
  onClick: () => void;
}
const Button = ({ label, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
