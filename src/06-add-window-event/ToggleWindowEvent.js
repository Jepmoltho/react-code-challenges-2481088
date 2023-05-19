import { useEffect, useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  useEffect(() => {
    const handleDblClick = () => {
      if (windowEvent) {
        alert("Clicked");
      }
    };

    document.addEventListener("dblclick", handleDblClick);

    //Cleanup function
    return () => {
      document.removeEventListener("dblclick", handleDblClick);
    };
  }, [windowEvent]);

  function returnWindowEvent() {
    if (windowEvent) {
      return <WindowEvent />;
    }
  }

  return (
    <div className="page-body">
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {returnWindowEvent()}
    </div>
  );
}
