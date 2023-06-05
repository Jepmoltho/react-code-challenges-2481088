import "./App.css";
import PixelArt from "./08-pixel-art/PixelArt";
import PixelArtContext from "./08-pixel-art/PixelArtContext";
import PixelArtFreeStyle from "./08-pixel-art/PixelArtFreestyle";

function App() {
  return (
    <div className="App">
      <PixelArtFreeStyle />
      <PixelArt />
      <PixelArtContext />
    </div>
  );
}

export default App;
