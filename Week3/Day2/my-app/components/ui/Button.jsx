// components/ui/Button.jsx
export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
}) {
  const base = "rounded font-medium";

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
