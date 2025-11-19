import React from "react";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";

function App() {
    return (
        <div>
            <h1>FocusTime</h1>
            <TimerDisplay />
            <Controls />
        </div>
    );
}

export default App;