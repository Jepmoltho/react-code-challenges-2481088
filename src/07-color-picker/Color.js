export default function Color({ hex, name, statehook }) {
  return (
    <button
      className="color-square"
      style={{ backgroundColor: hex }}
      onClick={() => statehook(hex)}
    >
      <h2>{name}</h2>
    </button>
  );
}
