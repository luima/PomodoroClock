import React, { useState } from 'react';

function Settings(props) {
  const {
    breakLength,
    sessionLength,
    incrementBreak,
    incrementSession,
    decrementBreak,
    decrementSession,
  } = props;
  return (
    <div>
      <div>
        <span id="break-label">Break Length</span>
        <button id="break-increment" type="button" onClick={incrementBreak}>
          +
        </button>
        <span id="break-length">{breakLength}</span>
        <button id="break-decrement" type="button" onClick={decrementBreak}>
          -
        </button>
      </div>
      <div>
        <span id="session-label">Session Length</span>
        <button id="session-increment" type="button" onClick={incrementSession}>
          +
        </button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-decrement" type="button" onClick={decrementSession}>
          -
        </button>
      </div>
    </div>
  );
}

function Timer() {
  return (
    <div>
      <div>
        <span id="timer-label">Session</span>
      </div>
      <div>
        <span id="time-left">25:00</span>
      </div>
      <div>
        <button id="start_stop" type="button">
          Start
        </button>
        <button id="reset" type="button">
          Reset
        </button>
      </div>
    </div>
  );
}

function App() {
  const [breakLength, setBreak] = useState(5);

  const incrementBreakHandler = () => {
    setBreak(breakLength + 1);
  };
  const decrementBreakHandler = () => {
    setBreak(breakLength - 1);
  };

  const [sessionLength, setSession] = useState(25);

  const incrementSessionHandler = () => {
    setSession(sessionLength + 1);
  };
  const decrementSessionHandler = () => {
    setSession(sessionLength - 1);
  };

  return (
    <div>
      <Timer />
      <Settings
        breakLength={breakLength}
        sessionLength={sessionLength}
        incrementBreak={incrementBreakHandler}
        decrementBreak={decrementBreakHandler}
        incrementSession={incrementSessionHandler}
        decrementSession={decrementSessionHandler}
      />
    </div>
  );
}

export default App;
