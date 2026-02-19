import React from "react";
import "./App.css";

import StartDateText from "./StartDateText"
import TimeDifference from "./TimeDifference";
import Milestones from "./Milestones";

function App() {
  // 19 Feb 2021, 2:12 PM (local time)
  const startDate = new Date(2021, 1, 19, 14, 12, 0, 0);
  
  return (
    <div>
      <header className="App-header">
        <div>
          <h2>Stem Cell Day ✨</h2>
          <StartDateText startDate={startDate} />
          <h2 className="butterfly">🦋</h2>
          <TimeDifference startDate={startDate} />
          <h3>Milestones ⏳</h3>
          <Milestones startDate={startDate} milestones={[7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 100, 150, 200, 365, 730, 1095, 1461, 1826, 2191, 2556, 2922, 3287, 3652]}/>
        </div>
      </header>
    </div>
  );
}

export default App;
