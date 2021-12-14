import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(color === "blue" ? "red" : "blue")}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
