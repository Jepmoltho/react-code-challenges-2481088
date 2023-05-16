import { useState, useEffect } from "react";

export default function DogPics() {
  const [dawg, setDawg] = useState("");
  // API: https://dog.ceo/dog-api/
  async function getRandomDawg() {
    //const APIbaseUrl = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    ).then((res) => res.json());

    setDawg(response.message);
  }

  useEffect((e) => {
    getRandomDawg();
  }, []);

  return (
    <div className="dog-pics">
      <img src={dawg} />
      <button onClick={() => getRandomDawg()}>🐶</button>
    </div>
  );
}
