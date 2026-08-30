import { useState } from "react";
import "./App.css";

function MyButton() {
  const [isRunning, setRunning] = useState(false);
  function handleClick() {
    //You can respond to events by
    //declaring event handler functions inside your components:
    setRunning(!isRunning);
  }
  return (
    <>
      <button onClick={handleClick}>Start:{isRunning.toString()}</button>
    </>
  );
}

export default function MyApp() {
  return (
    <>
      <h1> LOCK IN </h1>
      <div>
        <MyButton className="startButton" />
      </div>
    </>
  );
}
