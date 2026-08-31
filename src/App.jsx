import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function MyButton() {
  const [isRunning, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    let id;

    if (isRunning) {
      id = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
    }

    return () => {
      clearInterval(id); //clean up
    };
  }, [isRunning]); // rerun this effect whenever isRunning changes

  function handleClick() {
    setRunning(!isRunning);
  }

  let label;

  if (isRunning) {
    label = "Stop";
  } else {
    label = "Start";
  }

  return (
    <div className="button">
      <button onClick={handleClick}>{label}</button>
      <div className="timer"> {secondsLeft} </div>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1> LOCK IN </h1>
      <div>
        <MyButton />
      </div>
    </div>
  );
}
