import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

<<<<<<< HEAD
export default function ColorRenderer () {
  return colors.map(color =>
    <Color
      name={color.name}
      hex={color.hex}
      key={color.hex}
    />
  )
=======
function renderColors() {
  return colors.map((e) => {
    return <Color hex={e.hex} name={e.name} />;
  });
>>>>>>> 01_01b
}

export default function ColorRenderer() {
  return (
    <>
      <h2>
        Use the Color component to render each item in the colors array on the
        page!
      </h2>
      {renderColors()}
      {/*
      {colors.map((e) => (
        <Color name={e.name} hex={e.hex} />
      ))}
      */}
    </>
  );
}

/*
        <Color hex={colors[0].hex} name={colors[0].name} />
        <Color hex={colors[1].hex} name={colors[1].name} />
        <Color hex={colors[2].hex} name={colors[2].name} />
        <Color hex={colors[3].hex} name={colors[3].name} />
*/
