import React, { useState } from "react";

//const ThemeContext = createContext();

function ColorPicker(props) {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => props.setCurrentColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel(props) {
  const [currentColor, setCurrentColor] = useState("lightGrey");

  const testColor = props.currentColor;

  return (
    <div
      onClick={() => setCurrentColor(testColor)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: currentColor /*"lightGrey"*/,
        margin: "1px",
      }}
    />
  );
}

function Pixels(props) {
  const pixels = [];
  for (let i = 0; i < 100; i++)
    pixels.push(<Pixel key={i} currentColor={props.currentColor} />);
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
  const [currentColor, setCurrentColor] = useState("lightGray");
  return (
    <div>
      <ColorPicker setCurrentColor={setCurrentColor} />
      <Pixels currentColor={currentColor} />
    </div>
  );
}
