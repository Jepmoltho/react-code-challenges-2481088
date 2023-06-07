export default function DarkMode(props) {
  return (
    <div className="page">
      <button className="dark-mode-button" onClick={props.switchToDarkMode}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={props.switchToLightMode}>
        Light Mode
      </button>
    </div>
  );
}
