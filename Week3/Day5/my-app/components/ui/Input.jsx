export default function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 focus:outline-blue-500"
      />
    </div>
  );
}
