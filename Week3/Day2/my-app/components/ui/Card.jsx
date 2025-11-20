// components/ui/Card.jsx
export default function Card({ title, children, image, footer }) {
  return (
    <div className="border bg-white rounded-lg shadow p-4 flex flex-col gap-3">
      {image && <img src={image} alt={title} className="rounded-md" />}

      {title && <h2 className="font-semibold text-lg">{title}</h2>}

      <div>{children}</div>

      {footer && <div className="border-t pt-2 text-sm text-gray-600">{footer}</div>}
    </div>
  );
}
