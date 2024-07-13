import { useState } from 'react';
import './App.css';

function App() {
  const [weakPlan, setWeakPlan] = useState([]);
  const [sub, setSub] = useState("");
  const [hour, setHour] = useState("");

  function add() {
    if (sub === "" || hour === "") {
      alert("Enter Subject and Hour");
      return;
    }
    setWeakPlan([...weakPlan, { sub, hour }]);
    setSub("");
    setHour("");
  }

  function increment(item) {
    let { hour } = weakPlan[item];
    hour = parseInt(hour) + 1;
    weakPlan[item].hour = hour;
    setWeakPlan([...weakPlan]);
  }

  function decrement(item) {
    let { hour } = weakPlan[item];
    if (parseInt(hour) <= 0) {
      return;
    }
    hour = parseInt(hour) - 1;
    weakPlan[item].hour = hour;
    setWeakPlan([...weakPlan]);
  }

  return (
    <div className="container">
      <h1>Geekster Week Planner</h1>
      <div style={{display:'flex'}}><input
        type="text"
        value={sub}
        onChange={(e) => setSub(e.target.value)}
      />
      <input
        type="number"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
      />
      <button onClick={add}>Add</button></div>
      {weakPlan.map((item, index) => (
        <div key={index} className="plan-item">
          <span>{item.sub}</span>
          <button onClick={() => increment(index)}>+</button>
          <span className="hour">{item.hour}</span>
          <button onClick={() => decrement(index)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default App;
