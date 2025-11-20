// components/ui/Modal.jsx
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg w-80 shadow">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black"
          >
            ✖
          </button>
        </div>

        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
