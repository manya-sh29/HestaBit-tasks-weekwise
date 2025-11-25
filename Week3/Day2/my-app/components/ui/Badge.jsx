// components/ui/Badge.jsx
// Yes, the parentheses contain destructured parameters (text and color) with color having a default value "blue".
export default function Badge({ text, color = "blue" }) { 
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-200 text-gray-700",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${colors[color]}`}>
      {text}
    </span>
  );
}
