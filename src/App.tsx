import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState<number | null>(null);
  const [input2, setInput2] = useState<number | null>(null);

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (input1 === null || input2 === null) {
          setError("invalid input");
        } else if (input1 >= 100 || input1 <= -100) {
          setError("input1 invalid range");
        } else if (input2 >= 100 || input2 <= -100) {
          setError("input2 invalid range");
        } else {
          setError("");
          setResult(input1 + input2);
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [input1, input2]);

  return (
    <div className="App">
      <h1>Adder</h1>
      <div style={{ marginBottom: 12 }}>
        <span>
          Input1:
          <input
            type="number"
            onChange={(e: any) => setInput1(Number(e.target.value))}
          />
        </span>
      </div>

      <div style={{ marginBottom: 12 }}>
        <span>
          Input2:
          <input
            type="number"
            onChange={(e: any) => setInput2(Number(e.target.value))}
          />
        </span>
      </div>

      <div style={{ color: error ? "red" : "black" }}>
        {!error
          ? `Result: ${result !== null ? result : ""}`
          : `Error: ${error}`}
      </div>
    </div>
  );
}

export default App;
