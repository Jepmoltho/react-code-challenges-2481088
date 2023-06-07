import { useEffect, useState } from "react";

<<<<<<< HEAD
export default function ScoreKeeper () {
  const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0)

  useEffect(() => {
    localStorage.setItem('score', score)
  }, [score])
=======
export default function ScoreKeeper() {
  const [score, setScore] = useState(parseInt(localStorage.getItem("score")));

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);
>>>>>>> 01_05b

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
    </div>
  );
}
