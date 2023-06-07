<<<<<<< HEAD
import ShoppingCart from "./11-shopping-cart/ShoppingCart";
import ShoppingCartExpected from "./11-shopping-cart/ShoppingCartExpectedSolution";

function App() {
  return (
    <div className="App">
      <ShoppingCartExpected />
    </div>
  );
}

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
export default App;
