// Button.jsx
export default function Button({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : ""}
        onClick={onSelect}
        type="button"
      >
        {children}
      </button>
    </li>
  );
}
