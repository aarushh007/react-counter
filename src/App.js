import React from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
