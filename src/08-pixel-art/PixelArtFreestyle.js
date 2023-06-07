import { React, createContext, useContext, useState } from "react";

const ColorPicked = createContext();

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  //Passing state hook to update the current picked color state hosted by PixelArt
  const { setCurrentColor } = useContext(ColorPicked);

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setCurrentColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel() {
  //Passing the currently picked color to each pixel component such that it is avaliable to them if clicked
  const { currentColor } = useContext(ColorPicked);
  //Initialising the default color as grey such that all pixels are grey by default. If clicked, I update the individual pixelColor state to the color saved in context.
  const [pixelColor, setPixelColor] = useState("lightGrey");

  return (
    <div
      onClick={() => setPixelColor(currentColor)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  //Defining a statehook to manage the current picked color in a top level component such that I can pass the value and the statehook through the tree
  const [currentColor, setCurrentColor] = useState("");

  //Defining the hook as an object such that I can pass both in the value attribute
  const colorState = {
    currentColor: currentColor,
    setCurrentColor: setCurrentColor,
  };

  return (
    <div>
      <ColorPicked.Provider value={colorState}>
        <ColorPicker />
        <Pixels />
      </ColorPicked.Provider>
    </div>
  );
}
