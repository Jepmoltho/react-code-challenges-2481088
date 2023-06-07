import { useEffect, useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);

  useEffect(() => {
    function handleDblClick() {
      alert("Double click detected");
    }

    if (windowEvent) {
      document.addEventListener("dblclick", handleDblClick);
      //Not like this, as you are invoking the funciton directly
      //document.addEventListener("dblclick", alert("Double click detected"));
    } else {
      document.removeEventListener("dblclick", handleDblClick);
      //Not like this, as you are invoking the funciton directly
      //document.removeEventListener("dblclick", alert("Double click detected"));
    }
    //Not needed in this case, since I do the same in the else statement, but othewise you write cleanup funcitons like this
    /*
    return () => {
      document.removeEventListener("dblclick", handleDblClick);
    };
    */
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
