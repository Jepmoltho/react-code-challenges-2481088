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

/*
function Pixel() {
  //  const { currentColor } = useContext(ColorPicked);
  const { currentColor, setCurrentColor } = useContext(ColorPicked);
  //const [pixelColor, setPixelColor] = useState("lightGrey");
  const handleClick = () => {
    setCurrentColor(currentColor);
  };

  return (
    <div
      //onClick={() => setPixelColor(currentColor)}
      onClick={handleClick}
      style={{
        height: "20px",
        width: "20px",
        //backgroundColor: pixelColor,
        backgroundColor: currentColor,
        margin: "1px",
      }}
    />
  );
}
*/

/*
Create and export it with export const MyContext = createContext(defaultValue).
Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
Wrap children into <MyContext.Provider value={...}> to provide it from a parent.
*/

/*
//Works drilling the context down. Not updating yet

import { React, Context, createContext, useContext, useState } from "react";

const ColorPicked = createContext();
//const [color, setColor] = useState(colorPicked);

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  //const [currentColor, setCurrentColor] = useState(ColorPicked);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button key={color} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

function Pixel() {
  const colorPicked = useContext(ColorPicked);

  const [bgColor, setBgColor] = useState("lightGrey");
  return (
    <div
      onClick={() => setBgColor(colorPicked)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: bgColor,
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
  //const [colorPicked, setColorPicked] = useState(ColorPicked);
  return (
    <div>
      <ColorPicked.Provider value={"blue"}>
        <ColorPicker />
        <Pixels />
      </ColorPicked.Provider>
    </div>
  );
}




*/
