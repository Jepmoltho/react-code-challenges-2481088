import { useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  function returnWindowEvent() {
    if (windowEvent) {
      return <WindowEvent />;
    }
  }

  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {returnWindowEvent()}
    </div>
  );
}
