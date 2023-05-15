import { useState } from "react";

export default function DogPics() {
  const [dawg, setDawg] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );
  // API: https://dog.ceo/dog-api/
  async function getRandomDawg() {
    //const APIbaseUrl = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    ).then((humlebuks) => humlebuks.json());

    setDawg(response.message);
  }

  return (
    <div className="dog-pics">
      <img src={dawg} />
      <button onClick={() => getRandomDawg()}>🐶</button>
    </div>
  );
}
