import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="neon-wrapper">
      <div className="neon-card">
        <h1 className="neon-title">Crazy Counter</h1>

        <div className="neon-number">{count}</div>

        <div className="neon-btns">
          <button className="neon-btn plus" onClick={() => setCount(count + 1)}>+</button>
          <button className="neon-btn minus" onClick={() => setCount(count - 1)}>-</button>
        </div>

        <button className="neon-reset" onClick={() => setCount(0)}>RESET</button>
      </div>
    </div>
  );
}
