export default function Color(props) {
  return (
    <div className="color-square" style={{ backgroundColor: props.hex }}>
      <h2>{props.name}</h2>
    </div>
  );
}
