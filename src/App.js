import "./App.css";
import DarkMode from "./02-dark-mode/DarkMode";

function switchToDarkMode() {
  document.getElementsByClassName("App")[0].classList.add("dark-mode");
  document.getElementsByClassName("App")[0].classList.remove("light-mode");
  console.log("Dark fire");
}

function switchToLightMode() {
  document.getElementsByClassName("App")[0].classList.add("light-mode");
  document.getElementsByClassName("App")[0].classList.remove("dark-mode");
  console.log("Light fire");
}

function App() {
  return (
    <div className="App">
      <DarkMode
        switchToDarkMode={() => switchToDarkMode()}
        switchToLightMode={() => switchToLightMode()}
      />
    </div>
  );
}

export default App;
