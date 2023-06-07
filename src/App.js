<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import ShoppingCart from "./11-shopping-cart/ShoppingCart";
import ShoppingCartExpected from "./11-shopping-cart/ShoppingCartExpectedSolution";
=======
import "./App.css";
//import ToggleWindowEvent from "./06-add-window-event/ToggleWindowEvent";
import ToggleWindowEventFreestyle from "./06-add-window-event/ToggleWindowEvent";
>>>>>>> 01_06b
=======
import "./App.css";
import PixelArt from "./08-pixel-art/PixelArt";
import PixelArtContext from "./08-pixel-art/PixelArtContext";
import PixelArtFreeStyle from "./08-pixel-art/PixelArtFreestyle";
>>>>>>> 01_08b

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      <ShoppingCartExpected />
=======
      <ToggleWindowEventFreestyle />
>>>>>>> 01_06b
=======
      <PixelArtFreeStyle />
      <PixelArt />
      <PixelArtContext />
>>>>>>> 01_08b
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> 01_02b
=======
>>>>>>> 01_06b
=======
>>>>>>> 01_08b
export default App;
